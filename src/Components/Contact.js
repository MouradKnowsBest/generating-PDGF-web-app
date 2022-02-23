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

// const handleSave = ({ myPDF }) => {
//   myPDF.save(`test.pdf`);
// };

function createContactDiv(userInfo, handleSubmit) {
  return (
    <>
      <h1>Entrez les informations ... </h1>

      <div className="container">
        <div className="form-container">
          <div className="image">
            <img src="building.jpeg" alt="" />
          </div>

          <div className="user-info">
            <form>
                <div  className="yo">
                  <label>Client</label>
                  <input type="text" ref={userInfo.client} />
                </div>
                <div className="yo"> 
                  <label>Titre du poste</label>
                  <input type="text" ref={userInfo.jobTitle} />
                </div>

                <div  className="yo">
                  <label>TJM</label>
                  <input type="text" ref={userInfo.tjm} />
                </div>
                <div  className="yo">
                  <label>Durée du contrat (en jours)</label>
                  <input type="text" ref={userInfo.contractDuration} />
                </div>

                {/* <h2>
                  Titre du poste
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
                </h2>{" "} */}
            </form>
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleSubmit}>Générer votre PDF</button>
          {/* <button onClick={handleSave}>Save PDF</button> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
