import React from "react";
import "./footer.css";
import Social from "./social/social";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <h2 className="mb-3">Contact</h2>
      <div className="contact-gird">
        <div className="contact-gird__column bg-color first-column">
          <a
            className="full-height mail-flex"
            href="mailto:t.a.harry@gmail.com"
          >
            <h3 className="mb-2">Get in touch!</h3>
            <h4>t.a.harry@gmail.com</h4>
          </a>
        </div>

        <div className="contact-gird__column middle-column">
          <div className="bg-color p-16">
            <p className="italic">
              "To improve is to change; to be perfect is to change often."
            </p>
          </div>

          <div className="bg-color p-16">
            <h4 className="mb-3">Now or never.</h4>
            <p className="copyright">© {currentYear} All Rights Reserved.</p>
          </div>
        </div>

        <div className="contact-gird__column bg-color last-column">
          <Social />
        </div>
      </div>
    </div>
  );
}

export default Footer;
