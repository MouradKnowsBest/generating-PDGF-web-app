import "./Contact.css";
import React from "react";
import generatePDF from "./generatePDF";

function Contact() {
  const userInfo = {
    nexton: React.useRef(),
    client: React.useRef(),
    jobTitle: React.useRef(),
    tjm: React.useRef(),
    contractDuration: React.useRef(),
  };

  const handleSubmit = () => {
    // console.log(firstName.current.value, name.current.value);

    generatePDF(userInfo);
  };

  return createContactDiv(userInfo, handleSubmit);
}

const handleSave = ({ myPDF }) => {
  // console.log(firstName.current.value, name.current.value);
  myPDF.save(`test.pdf`);

  // myPDF.save(`${firstName}_${name}.pdf`);
};

function createContactDiv(userInfo, handleSubmit) {
  return (
    <div className="container">
      <div className="form">
        <div className="image">
          <img src="building.jpeg" alt="" />
        </div>

        <div className="user-info">
        <form>
          <h1>Entrez les informations ... </h1>
          <label>
            <h2>nextone</h2>
          </label>
          <input ref={userInfo.nexton} />
          <h2>Client</h2> <input ref={userInfo.client} />
          <h2>Titre</h2> <input ref={userInfo.jobTitle} />
          <h2>TJM</h2> <input ref={userInfo.tjm} />
          <h2>Durée du contrat</h2> <input ref={userInfo.contractDuration} />
        </form>
        </div>


      </div>

      <div className="buttons">
        <button onClick={handleSubmit}>Show PDF</button>

        <button onClick={handleSave}>Save PDF</button>
      </div>
    </div>
  );
}

export default Contact;
