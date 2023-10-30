import React, { useState } from "react";
import { NAMEID, EMAILID, MESSAGEID, GOOGLEFORMLINK } from './FormConstants';

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    [`entry.${NAMEID}`]: "",
    [`entry.${EMAILID}`]: "",
    [`entry.${MESSAGEID}`]: ""
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

    let url = `${GOOGLEFORMLINK}entry.${NAMEID}=${formData[`entry.${NAMEID}`]}&entry.${EMAILID}=${formData[`entry.${EMAILID}`]}&entry.${MESSAGEID}=${formData[`entry.${MESSAGEID}`]}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });

      console.log("Response status:", res.status);

      if (res.ok) {
        // Log a success message for debugging
        console.log("Form submitted successfully!");
        // Handle success (e.g., form submission successful)
      } else {
        // Log an error message for debugging
        console.error("Form submission failed with status:", res.status);
        // Handle any other response status (e.g., server error)
      }


    } catch (error) {
      // Log the error for debugging
      console.error("Error submitting the form:", error);
      // Handle the error gracefully (e.g., show a message to the user)
    }


  }
  return (
    <div className="contactFormWrapper">
      <div className="formheader"></div>
      <div className="formcontact">
        <div className="space-y-12">
          {submit ? (
            <div className="afterForm">Thanks, I will get back to you soon</div>
          ) : (
            <form onSubmit={handleSubmit} target="_self">
              <fieldset>
                <label className="text-white block mb-6 text-xl font-bold" htmlFor={`entry.${NAMEID}`}>Name:</label>
                <input
                  className="w-full border border-input-border bg-input px-4 py-4 pb-4"
                  required
                  type="text"
                  name={`entry.${NAMEID}`}
                  onChange={handleInputData(`entry.${NAMEID}`)}
                  value={formData[`entry.${NAMEID}`]}
                  autoComplete={"false"}
                />
              </fieldset>

              <fieldset>
                <label className="text-white block mb-6 mt-6 text-xl font-bold" htmlFor={`entry.${EMAILID}`}>E-mail:</label>
                <input
                  className="w-full border border-input-border bg-input px-4 py-4 pb-4"
                  required
                  type="email"
                  name={`entry.${EMAILID}`}
                  onChange={handleInputData(`entry.${EMAILID}`)}
                  value={formData[`entry.${EMAILID}`]}
                  autoComplete={"false"}
                />
              </fieldset>

              <fieldset>
                <label className="text-white block mb-6 mt-6 text-xl font-bold" htmlFor={`entry.${MESSAGEID}`}>Message:</label>
                <textarea
                  required
                  className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                  name={`entry.${MESSAGEID}`}
                  rows="4"
                  cols="10"
                  onChange={handleInputData(`entry.${MESSAGEID}`)}
                  value={formData[`entry.${MESSAGEID}`]}
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
