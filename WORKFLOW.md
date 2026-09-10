# AI-Assisted Contact Form Workflow

## Round 1: Vague Prompt

Round 1 was created on `fe-foundations-round-1` from the intentionally broad prompt, “Add a contact form to my portfolio website.” The AI generated a portfolio-styled form with Name, Email, Message, and an additional Project field. The fields used semantic labels and native `required` attributes, and the email input used `type="email"`. However, submission handling only prevented the browser default and immediately set the success state. There was no application-level validation, no inline validation message, and no protection against invalid values beyond the browser’s native behavior.

## Round 2: Precise Prompt

Round 2 was created on `fe-foundations-round-2` with explicit field, validation, accessibility, styling, dependency, and verification requirements. The Git diff shows the form was reduced to exactly Name, Email, and Message. It added a shared `validate` function, trimmed required-field checks, an email-format check, inline messages, and an early return that prevents the success state when errors exist. The `Field` component makes the repeated Name and Email structure reusable, while Message has equivalent accessible error handling. The current entry point imports `ContactApp.jsx`, which contains this behavior, and `contact.css`, which contains the focused form presentation.

## Key Differences and Review

Correctness improved because Round 2 handles empty values and malformed email addresses before treating the form as sent. Edge cases covered by the implementation include whitespace-only input through `.trim()`, missing values for all three fields, and invalid email formatting. Accessibility also became more explicit: every field has a label, errors use `role="alert"`, invalid controls expose `aria-invalid`, and errors are connected with `aria-describedby`. Native inputs, a textarea, and buttons remain keyboard accessible.

Round 2 required more review because the detailed prompt introduced more behavior and constraints to verify. The AI mistake caught during review was styling: margins and padding, input widths, alignment, and font sizes needed correction after reviewing the generated result. The implementation was then checked with lint, a production build, and browser interactions for empty submission, invalid email, and valid submission.

The main lesson is that a vague prompt can produce a plausible first pass, but it leaves important behavior and review criteria implicit. A precise prompt makes correctness, accessibility, edge cases, styling boundaries, and verification explicit, giving both the AI and the reviewer a clearer definition of done.
