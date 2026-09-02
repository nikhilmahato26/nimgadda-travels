import { business } from "@/data/business";

// Most enquiries here arrive on WhatsApp, so every call to action opens a chat
// with the message already written. Keep the text short: it appears in the
// guest's own input box and they should be able to send it without editing.

export function whatsappLink(message) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const whatsappMessages = {
  general: `Namaste, I would like to enquire about rooms at ${business.shortName} in Kasi.`,
  rooms: (roomName) =>
    `Namaste, I would like to book a ${roomName} at ${business.shortName} in Kasi.`,
  package: (packageName) =>
    `Namaste, I would like details of the ${packageName} package from ${business.shortName}.`,
  travels: `Namaste, I would like to book a vehicle through ${business.shortName} in Kasi.`,
};
