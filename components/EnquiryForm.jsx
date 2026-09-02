"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Check, Info } from "lucide-react";
import { submitEnquiry } from "@/app/actions";

const initialState = { status: "idle" };

const needOptions = [
  { value: "rooms", label: "Rooms only" },
  { value: "package", label: "A yatra package" },
  { value: "vehicle", label: "A vehicle" },
];

export default function EnquiryForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-accent bg-surface-3 p-8"
      >
        <Check
          size={26}
          strokeWidth={1.5}
          className="text-accent-ink"
          aria-hidden="true"
        />
        <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight">
          Your enquiry is with us
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          {state.message}
        </p>
      </div>
    );
  }

  const values = state.values ?? {};
  const errors = state.errors ?? {};

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-card border border-line bg-surface-3 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          defaultValue={values.name}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Field
          label="Mobile number"
          name="phone"
          type="tel"
          inputMode="numeric"
          defaultValue={values.phone}
          error={errors.phone}
          hint="We will call you back on this number"
          autoComplete="tel"
          required
        />

        <div className="flex flex-col gap-2">
          <label
            htmlFor="need"
            className="text-[14px] font-semibold text-text"
          >
            What do you need?
          </label>
          <select
            id="need"
            name="need"
            defaultValue={values.need ?? "rooms"}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "need-error" : undefined}
            className="h-[46px] rounded-pill border border-line bg-surface px-3.5 text-[15px] text-text"
          >
            {needOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.need ? (
            <p id="need-error" className="text-[13px] font-medium text-accent-ink">
              {errors.need}
            </p>
          ) : null}
        </div>

        <Field
          label="How many people?"
          name="people"
          type="number"
          min="1"
          defaultValue={values.people}
          error={errors.people}
          hint="Optional"
        />

        <div className="sm:col-span-2">
          <Field
            label="Arrival date"
            name="arrival"
            type="date"
            defaultValue={values.arrival}
            error={errors.arrival}
            hint="Optional, an approximate date is fine"
          />
        </div>

        <div className="sm:col-span-2 flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[14px] font-semibold text-text"
          >
            Anything we should know
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            defaultValue={values.message}
            placeholder="Travelling with elders, need ground floor, arriving by train at night, and so on"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="rounded-pill border border-line bg-surface px-3.5 py-3 text-[15px] text-text placeholder:text-muted"
          />
          {errors.message ? (
            <p
              id="message-error"
              className="text-[13px] font-medium text-accent-ink"
            >
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      <SubmitButton />

      <p className="mt-4 flex items-start gap-2 text-[13px] leading-relaxed text-muted">
        <Info
          size={15}
          strokeWidth={1.5}
          className="mt-0.5 shrink-0"
          aria-hidden="true"
        />
        We use your number only to call you back about this enquiry.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-7 w-full rounded-pill bg-accent px-5 py-3.5 text-[15px] font-semibold text-on-accent transition-opacity hover:opacity-90 active:translate-y-px disabled:opacity-60 sm:w-auto sm:px-8"
    >
      {pending ? "Sending" : "Send enquiry"}
    </button>
  );
}

function Field({ label, name, error, hint, ...props }) {
  const errorId = `${name}-error`;
  const hintId = `${name}-hint`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[14px] font-semibold text-text">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className="h-[46px] rounded-pill border border-line bg-surface px-3.5 text-[15px] text-text placeholder:text-muted"
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-[13px] font-medium text-accent-ink">
          {error}
        </p>
      ) : hint ? (
        <p id={hintId} className="text-[13px] text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
