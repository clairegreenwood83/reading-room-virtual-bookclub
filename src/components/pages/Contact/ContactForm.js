import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mlekpdoo");
  if (state.succeeded) {
    return <p className="thanks-return">Thanks for contacting us!</p>;
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="rowcf">
        <h4>We'd love to hear from you!</h4>
      </div>
      <div className="rowcf input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <label htmlFor="email"></label>
            <input
              placeholder="Your email.."
              id="email"
              type="email"
              name="email"
            />
          </div>
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea
              placeholder="Your thoughts.."
              id="message"
              name="message"
            />
          </div>
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn-sml submit-btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
