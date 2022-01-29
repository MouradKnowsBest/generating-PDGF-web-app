import "./Contact.css";
import React from "react";
import generatePDF from "./generatePDF";

function Contact() {
  const userInfo = {
    firstName: React.useRef(),
    name: React.useRef(),
    text: React.useRef(),
    role: React.useRef(),
  };

  const handleSubmit = () => {
    // console.log(firstName.current.value, name.current.value);

    generatePDF(userInfo);
  };

  return createContactDiv(
    userInfo,
    handleSubmit
  );
}

const handleSave = ({ myPDF, firstName, name }) => {
  console.log(firstName.current.value, name.current.value);

  myPDF.save(`${firstName}_${name}.pdf`);
};

function createContactDiv(userInfo, handleSubmit) {
  return (
    <div className="contact-div">
      <div className="user-info">
        <h1>PRENOM</h1> <input ref={userInfo.firstName} />
        <h1>NOM</h1> <input ref={userInfo.name} />
        <h1>FONCTION</h1> <input ref={userInfo.role} />
      </div>
      <div className="user-text">
        <h1>TEXT</h1>

        <textarea
          ref={userInfo.text}
          style={{ height: 250 }}
          id="subject"
          name="subject"
          placeholder="Write something.."
        >
          {" "}
        </textarea>
      </div>

      <div className="buttons">
        <button onClick={handleSubmit}>Show PDF</button>

        <button onClick={handleSave}>Save PDF</button>
      </div>
    </div>
  );
}

export default Contact;
