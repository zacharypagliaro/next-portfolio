import React from 'react';
import Form from "./Forms";
import SocialContact from "../main/SocialContact";

const ContactInfo = () => {

  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="contact" className="secondary-title">Hire me</h2>
        <p className="section-paragraph">Do you need music production services and/or a digital audio specialist? Or maybe you just need somebody to track the guitar part for your next release! Feel free to to contact me any time.</p>

        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <div className="formWrapper">
            <div className="contactForm">
              <Form />
            </div>
          </div>

          <SocialContact />
        </div>
      </section>

    </div>

  )
}

export default ContactInfo;