"use server";

import { z } from "zod";

/*
  Enquiries are stored as Leads once a database is configured. Until then the
  action still validates and still confirms to the guest, and writes the
  enquiry to the server log so nothing is silently dropped. The phone number
  and WhatsApp link stay the primary path either way.
*/

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  // People write their number as "98490 11223" or "+91-98490-11223". Strip the
  // punctuation first, then validate, then store the bare ten digits.
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s()+\-.]/g, ""))
    .refine((v) => /^(91)?[6-9]\d{9}$/.test(v), {
      message: "Please enter a 10 digit mobile number",
    })
    .transform((v) => v.replace(/^91/, "")),
  people: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || (Number(v) > 0 && Number(v) <= 200), {
      message: "Enter a number between 1 and 200",
    }),
  arrival: z.string().trim().optional(),
  need: z.enum(["rooms", "package", "vehicle"], {
    message: "Please choose what you need",
  }),
  message: z.string().trim().max(500, "Please keep this under 500 characters").optional(),
});

export async function submitEnquiry(_prevState, formData) {
  const raw = Object.fromEntries(formData);
  const parsed = enquirySchema.safeParse(raw);

  if (!parsed.success) {
    const errors = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field && !errors[field]) errors[field] = issue.message;
    }
    return { status: "error", errors, values: raw };
  }

  const enquiry = parsed.data;

  if (process.env.DATABASE_URL) {
    try {
      const { db } = await import("@/lib/db");
      await db.lead.create({
        data: {
          name: enquiry.name,
          phone: enquiry.phone,
          need: enquiry.need,
          people: enquiry.people ? Number(enquiry.people) : null,
          arrival: enquiry.arrival || null,
          message: enquiry.message || null,
        },
      });
    } catch (error) {
      // A database problem must not lose the enquiry or block the guest.
      console.error("[enquiry] could not save, logging instead:", error.message);
      console.info("[enquiry]", enquiry);
      return {
        status: "success",
        message:
          "Thank you. We have your details and will call you back. If it is urgent, please call or message us directly.",
      };
    }
  } else {
    console.info("[enquiry]", enquiry);
  }

  return {
    status: "success",
    message: `Thank you ${enquiry.name}. We will call you back on ${enquiry.phone}.`,
  };
}
