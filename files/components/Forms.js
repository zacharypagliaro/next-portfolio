import React, { useState } from "react";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.2005620554": "",
    "entry.172534650": "",
    "entry.1065046570": ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5PwmkB3uLVVP06E3Y6mOO_3b54Jf-6CI9_IWmst9cGmENOA/formResponse?entry.2005620554=${formData["entry.2005620554"]}&entry.172534650=${formData["entry.172534650"]}&entry.1065046570=${formData["entry.1065046570"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        <div className="space-y-12">
          {submit ? (
            <div className="afterForm">Thanks, will get back to you soon</div>
          ) : (
            <form onSubmit={handleSubmit} target="_self">
              <fieldset>
                <label className="text-white block mb-6 text-xl font-bold" htmlFor="entry.2005620554">Name:</label>
                <input
                  className="w-full border border-input-border bg-input px-4 py-4 pb-4"
                  required
                  type="text"
                  name="entry.2005620554"
                  onChange={handleInputData("entry.2005620554")}
                  value={formData["entry.2005620554"]}
                  autoComplete={"false"}
                />
              </fieldset>

              <fieldset>
                <label className="text-white block mb-6 mt-6 text-xl font-bold" htmlFor="entry.172534650">E-mail:</label>
                <input
                  className="w-full border border-input-border bg-input px-4 py-4 pb-4"
                  required
                  type="email"
                  name="entry.172534650"
                  onChange={handleInputData("entry.172534650")}
                  value={formData["entry.172534650"]}
                  autoComplete={"false"}
                />
              </fieldset>

              <fieldset>
                <label className="text-white block mb-6 mt-6 text-xl font-bold" htmlFor="entry.1065046570">Message:</label>
                <textarea
                  required
                  className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                  name="entry.1065046570"
                  rows="4"
                  cols="10"
                  onChange={handleInputData("entry.1065046570")}
                  value={formData["entry.1065046570"]}
                  autoComplete={"false"}
                ></textarea>
              </fieldset>

              <button className="px-6 py-2 bg-theme text-white font-bold" type="submit">Send it!</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
