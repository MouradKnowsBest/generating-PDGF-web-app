import "./Form.css";
import React from "react";
import generatePDF from "./generatePDF";

function Form() {
  const userInfo = {
    manager: React.useRef(),
    consultant: React.useRef(),
    nexton: React.useRef(),
    client: React.useRef(),
    jobTitle: React.useRef(),
    tjm: React.useRef(),
    contractDuration: React.useRef(),
  };

  const handleSubmit = () => {
    generatePDF(userInfo);
  };

  return createFormDiv(userInfo, handleSubmit);
}

function createFormDiv(userInfo, handleSubmit) {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="user-info">
            <form>
              <div className="yo">
                <label>Manager</label>
                <input
                  type="text"
                  placeholder="Nom et prénom du manager"
                  ref={userInfo.manager}
                />
              </div>
              <div className="yo">
                <label>Consultant</label>
                <input
                  type="text"
                  placeholder="Nom et prénom du consultant"
                  ref={userInfo.consultant}
                />
              </div>
              <div className="yo">
                <label>Client</label>
                <input
                  type="text"
                  placeholder="Le nom du client"
                  ref={userInfo.client}
                />
              </div>
              <div className="yo">
                <label>Titre du poste</label>
                <input
                  type="text"
                  placeholder="Titre du poste"
                  ref={userInfo.jobTitle}
                />
              </div>

              <div className="yo">
                <label>TJM</label>
                <input
                  type="text"
                  placeholder="Le taux journalier moyen"
                  ref={userInfo.tjm}
                />
              </div>
              <div className="yo">
                <label>Durée du contrat (en jours)</label>
                <input
                  type="text"
                  placeholder="Durée du contrat en jours"
                  ref={userInfo.contractDuration}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleSubmit}>Générer votre PDF</button>
        </div>
      </div>
    </>
  );
}

export default Form;
