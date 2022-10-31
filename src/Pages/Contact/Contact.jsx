import React, { useEffect, useState } from "react";
import "./Contact.css";

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const ContactPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isErrorActive, setIsErrorActive] = useState(false);
  const [isFormErrorActive, setIsFormErrorActive] = useState(false);

  useEffect(() => {
    if (email.length > 3 && validateEmail(email)) {
      setIsErrorActive(false);
    } else if (email.length > 3 && !validateEmail(email)) {
      setIsErrorActive(true);
    }
  }, [email]);

  const submitHandler = (event) => {
    if ((!email || !name || !message) && isErrorActive === false) {
      setIsFormErrorActive(true);
    } else {
      event.preventDefault();
      setIsModalActive(true);
      setIsFormErrorActive(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div class="contact-container">
      <div>
        <form>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your name.."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label for="country">E-mail</label>
          <input
            type="email"
            placeholder="Your e-mail.."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isErrorActive && (
            <p className="error-message">
              Please type in a valid e-mail address
            </p>
          )}

          <label for="subject">Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="button-modal">
            {isFormErrorActive && (
              <p className="error-message">Please fill out the form.</p>
            )}
            <button onClick={submitHandler}>SUBMIT</button>
          </div>
        </form>
        {isModalActive && (
          <div className="submit-modal" onClick={() => setIsModalActive(false)}>
            <div className="submit-div">
              <p>
                Thank you for your message! We will get back to you shortly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
