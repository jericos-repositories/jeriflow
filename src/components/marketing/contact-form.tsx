"use client";
import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Info } from "lucide-react";
type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
const empty: Values = { name: "", email: "", subject: "", message: "" };
export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Values>>({});
  const [checked, setChecked] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  function submit(event: FormEvent) {
    event.preventDefault();
    setChecked(false);
    const next: Partial<Values> = {};
    if (values.name.trim().length < 2)
      next.name = "Please enter a name with at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.subject.trim().length < 3)
      next.subject = "Please add a subject with at least 3 characters.";
    if (values.message.trim().length < 20)
      next.message =
        "Please write at least 20 characters so your idea has some context.";
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first)
      form.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    else setChecked(true);
  }
  function field(name: Field) {
    return {
      id: name,
      name,
      value: values[name],
      onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        setValues({ ...values, [name]: event.target.value });
        setChecked(false);
      },
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
      required: true,
    };
  }
  return (
    <form
      className="contact-form"
      id="contact-form"
      ref={form}
      onSubmit={submit}
      noValidate
    >
      <div className="form-demo-note">
        <Info size={20} aria-hidden="true" />
        <p>
          <strong>Demo form. Nothing is sent or stored.</strong>Try the
          validation below. A real message endpoint has not been connected.
        </p>
      </div>
      {Object.keys(errors).length > 0 && (
        <p className="form-error-summary" role="alert">
          Please check the highlighted fields.
        </p>
      )}
      <div className="form-row">
        <div>
          <label htmlFor="name">Your name</label>
          <input {...field("name")} autoComplete="name" maxLength={100} />
          {errors.name && (
            <p className="field-error" id="name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            maxLength={254}
          />
          {errors.email && (
            <p className="field-error" id="email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <label htmlFor="subject">What&apos;s on your mind?</label>
      <input {...field("subject")} maxLength={150} />
      {errors.subject && (
        <p className="field-error" id="subject-error">
          {errors.subject}
        </p>
      )}
      <label htmlFor="message">Your message</label>
      <textarea {...field("message")} rows={6} maxLength={3000} />
      {errors.message && (
        <p className="field-error" id="message-error">
          {errors.message}
        </p>
      )}
      <button type="submit" className="button button-primary">
        Check demo message
      </button>
      <p className="fine-print">
        This button checks the fields only. It does not send an email or create
        an enquiry.
      </p>
      {checked && (
        <p className="form-checked" role="status">
          <CheckCircle2 size={20} />
          Your demo message passes validation. Nothing was sent or stored.
        </p>
      )}
    </form>
  );
}
