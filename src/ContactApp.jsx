import { useState } from "react";
import "./contact.css";

const emptyForm = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

function Field({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
  onBlur,
  ...props
}) {
  const errorId = `${id}-error`;
  const attributes = {
    id,
    name: id,
    type,
    value,
    onChange,
    onBlur,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    ...props,
  };
  return (
    <label htmlFor={id}>
      {label} <span aria-hidden="true">*</span>
      <input {...attributes} />
      {error && (
        <span className="field-error" id={errorId} role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function ContactApp() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function updateField(event) {
    const nextValues = { ...values, [event.target.name]: event.target.value };
    setValues(nextValues);
    setErrors((current) => ({
      ...current,
      [event.target.name]: validate(nextValues)[event.target.name],
    }));
  }

  function validateField(event) {
    setErrors((current) => ({
      ...current,
      [event.target.name]: validate(values)[event.target.name],
    }));
  }

  function submit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  }

  return (
    <main>
      <header>
        <p className="eyebrow">
          Nia Okafor / Independent designer &amp; developer
        </p>
        <h1>
          Digital work
          <br />
          <em>with a pulse.</em>
        </h1>
        <p>I build expressive identities and thoughtful digital products.</p>
      </header>
      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">02 / Let&apos;s talk</p>
          <h2>
            Have a good
            <br />
            <em>one in mind?</em>
          </h2>
          <p>
            Tell me a little about what you&apos;re working on. I&apos;ll get
            back to you within a couple of days.
          </p>
        </div>
        <form onSubmit={submit} noValidate aria-label="Contact form">
          {sent ? (
            <div role="status">
              <h3>Message received.</h3>
              <p>Thanks for reaching out. I&apos;ll be in touch soon.</p>
              <button
                type="button"
                onClick={() => {
                  setValues(emptyForm);
                  setErrors({});
                  setSent(false);
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <Field
                id="name"
                label="Name"
                value={values.name}
                error={errors.name}
                onChange={updateField}
                onBlur={validateField}
                autoComplete="name"
                placeholder="Jane Smith"
              />
              <Field
                id="email"
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={updateField}
                onBlur={validateField}
                autoComplete="email"
                placeholder="jane@example.com"
              />
              <label htmlFor="message">
                Message <span aria-hidden="true">*</span>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={values.message}
                  onChange={updateField}
                  onBlur={validateField}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <span className="field-error" id="message-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </label>
              <button type="submit">
                Send enquiry <span aria-hidden="true">↗</span>
              </button>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

export default ContactApp;
