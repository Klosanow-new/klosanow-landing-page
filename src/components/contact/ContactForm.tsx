"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CheckCircle2, Send } from "lucide-react";
import { contactFormSchema } from "@/lib/validators/contactFormSchema";
import { CONTACT_EMAIL } from "@/data";
// @ts-expect-error: the package's default export shape differs between bundlers
const MyPhoneInput = PhoneInput.default ? PhoneInput.default : PhoneInput;

type ContactFormValues = {
  phone: string;
  email: string;
  message: string;
};

/**
 * The site is static, so the form hands the message to the visitor's email
 * app, addressed to the team. Previously it only logged to the console and
 * cleared itself, so nothing was ever sent.
 */
export const ContactForm: React.FC = () => {
  const [sent, setSent] = useState(false);

  const formik = useFormik<ContactFormValues>({
    initialValues: { phone: "", email: "", message: "" },
    validationSchema: contactFormSchema,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      const body = `${values.message}\n\n— ${values.email}${
        values.phone ? ` · +${values.phone}` : ""
      }`;
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Message from klosanow.com",
      )}&body=${encodeURIComponent(body)}`;
      setSent(true);
      actions.resetForm();
    },
  });

  const err = (f: keyof ContactFormValues) =>
    formik.touched[f] && formik.errors[f] ? formik.errors[f] : null;

  if (sent) {
    return (
      <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="size-7" />
        </span>
        <h2 className="mt-5 text-xl font-bold text-ink-900">Your message is ready</h2>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          We opened it in your email app. Press send there and we&apos;ll get
          back to you. Nothing opened? Email us at{" "}
          <a className="font-semibold text-brand-600 underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={() => setSent(false)}>
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit} noValidate>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink-700">
          Phone number
        </label>
        <div className="phone-field">
          <MyPhoneInput
            country="ng"
            regions={["africa"]}
            inputProps={{ id: "phone", name: "phone" }}
            value={formik.values.phone}
            onChange={(value: string) => formik.setFieldValue("phone", value)}
            onBlur={() => formik.setFieldTouched("phone", true)}
          />
        </div>
        {err("phone") && <p className="mt-1.5 text-xs font-medium text-red-500">{err("phone")}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink-700">
          Email
        </label>
        <input
          className="field"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="you@example.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {err("email") && <p className="mt-1.5 text-xs font-medium text-red-500">{err("email")}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink-700">
          Message
        </label>
        <textarea
          className="field h-36 resize-none py-3"
          placeholder="How can we help?"
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {err("message") && (
          <p className="mt-1.5 text-xs font-medium text-red-500">{err("message")}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary h-[52px] w-full">
        Send message
        <Send className="size-4" />
      </button>
    </form>
  );
};
