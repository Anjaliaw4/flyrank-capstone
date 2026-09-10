import { useState } from "react";
import "./App.css";

function App() {
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSent(true);
  }

  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Nia Okafor home">
          NO<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="#contact">
          <span className="status-dot" aria-hidden="true" />
          Available for work
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent designer & developer / 2024—now</p>
          <h1>
            Digital work
            <br />
            <em>with a pulse.</em>
          </h1>
          <p className="hero-intro">
            I build expressive identities and thoughtful digital products for
            people making the world more interesting.
          </p>
          <a className="text-link" href="#contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <span className="mark-ring ring-one" />
          <span className="mark-ring ring-two" />
          <span className="mark-core">N</span>
          <span className="mark-caption">Ideas in motion</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">A few things I make</p>
          <span className="section-number">01 / 03</span>
        </div>
        <div className="project-grid">
          <article className="project project-coral">
            <div className="project-art art-coral">
              <span>
                slow
                <br />
                made
              </span>
            </div>
            <div className="project-meta">
              <h2>Slow Made</h2>
              <p>Brand identity · E-commerce</p>
              <span>2024</span>
            </div>
          </article>
          <article className="project project-green">
            <div className="project-art art-green">
              <span>
                field
                <br />
                notes
              </span>
            </div>
            <div className="project-meta">
              <h2>Field Notes</h2>
              <p>Editorial platform · Strategy</p>
              <span>2023</span>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro">
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
          <a className="email-link" href="mailto:hello@niaokafor.com">
            hello@niaokafor.com
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {isSent ? (
            <div className="success-message" role="status">
              <span className="success-icon" aria-hidden="true">
                ✓
              </span>
              <h3>Message received.</h3>
              <p>Thanks for reaching out. I&apos;ll be in touch soon.</p>
              <button
                type="button"
                className="reset-button"
                onClick={() => setIsSent(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="field-row">
                <label htmlFor="name">
                  Your name <span>*</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Jane Smith"
                  />
                </label>
                <label htmlFor="email">
                  Email address <span>*</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="jane@example.com"
                  />
                </label>
              </div>
              <label htmlFor="project">
                What are we making? <span>*</span>
                <input
                  id="project"
                  name="project"
                  type="text"
                  required
                  placeholder="A new brand, website, or something else"
                />
              </label>
              <label htmlFor="message">
                A few more details <span>*</span>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about the idea, the timeline, and what good looks like..."
                ></textarea>
              </label>
              <button className="submit-button" type="submit">
                Send enquiry <span aria-hidden="true">↗</span>
              </button>
            </>
          )}
        </form>
      </section>

      <footer>
        <span>© 2024 Nia Okafor</span>
        <span>New York · Working everywhere</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
