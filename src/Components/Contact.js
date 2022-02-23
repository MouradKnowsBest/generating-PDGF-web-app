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
    generatePDF(userInfo);
  };

  return createContactDiv(userInfo, handleSubmit);
}

const handleSave = ({ myPDF }) => {
  myPDF.save(`test.pdf`);
};

function createContactDiv(userInfo, handleSubmit) {
  return (
    <>
      <div className="banner">
        <img src="logo-nexton.svg" alt="" />
        <h1> NEXTON CONULTING </h1>
      </div>

      <div className="container">
        <div className="form-container">
          <div className="image">
            <img src="building.jpeg" alt="" />
          </div>

          <div className="user-info">
            <form>
              <h1>Entrez les informations ... </h1>
              {/* <h2>nextone</h2>
            <input ref={userInfo.nexton} /> */}
              <div className="first-row">
                <h2>
                  Client <input ref={userInfo.client} />
                </h2>
                <h2>
                  Titre
                  <input ref={userInfo.jobTitle} />
                </h2>
              </div>

              <div className="second-row">
                <h2>
                  TJM
                  <input ref={userInfo.tjm} />
                </h2>
                <h2>
                  Durée du contrat (en jours)
                  <input ref={userInfo.contractDuration} />
                </h2>{" "}
              </div>
            </form>
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleSubmit}>Générer le fichier PDF</button>
          <button onClick={handleSave}>Save PDF</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
