import React, { useState } from "react";

const LetTalk = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(false);

  const options = [
    "Optimize my LinkedIn Profile",
    "Photography &amp; Videography",
    "Logo Design and Branding",
    "Create my podcast",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({name, email, phoneNumber, message, select}).toString(),
    })
      .then((con) => {
        console.log(con)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section class="section-contact" id="section-contact">
      <div class="container wrapper">
        <div class="contact-container">
          <div class="contact-left">
            <h1 class="heading-main">Let's Talk</h1>
            <p>
              We’d love to hear from you. Leave us a message using the contact
              form, or drop us a line.
            </p>

            <ul class="contact-details">
              <li class="contact-item">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <h3>Call us</h3>
                  <p>+233 24 465 1930</p>
                </div>
              </li>
              <li class="contact-item">
                <i class="fa-regular fa-envelope"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@segulaglobal.com</p>
                </div>
              </li>
              <li class="contact-item">
                <i class="fa-solid fa-location-dot"></i>
                <div>
                  <h3>Find us</h3>
                  <p>17 Boundary Road, East Legon, down Kaiser Kitchen jnt.</p>
                </div>
              </li>
            </ul>
          </div>

          <form
            class="contact-form"
            name="Contact-Form"
            method="POST"
            data-netlify="true"
            action="/form-success/"
            onSubmit={handleSubmit}
          >
            <h2 class="heading-secondary">Send a message</h2>
            <div class="input-field">
              <label for="fname">Full Name</label>
              <input type="text" name="fname" id="fname" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="input-field">
              <label for="email">Email Address</label>
              <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="input-field">
              <label for="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div class="input-field">
              <select
                value={select}
                name="Service"
                id="lang"
                onChange={(e) => setSelect(e.target.value)}
                required
              >
                <option>I want Segula Global to help me with</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {/* <select name="Service" id="lang" required>
                        <option value="No-choice">I want Segula Global to help me with</option>
                        <option value="Optimize LinkedIn Profile">Optimize my Linkedin profile</option>
                        <option value="Photography and videography">Photography &amp; Videography</option>
                        <option value="Logo Design and Branding">Logo Design and Branding</option>
                        <option value="Podcast">Create my podcast</option>
                        <option value="Other">Other</option>
                    </select> */}
            </div>
            <div class="input-field">
              <label for="message">Add a message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input type="submit" value={loading? "Sending..." : "Send"} class="btn btn-primary" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetTalk;
