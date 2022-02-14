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

const handleSave = ({ myPDF}) => {
  // console.log(firstName.current.value, name.current.value);
  myPDF.save(`test.pdf`);

  // myPDF.save(`${firstName}_${name}.pdf`);
};





function createContactDiv(userInfo, handleSubmit) {



  return (
    <div className="contact-div">
      <div className="user-info">
        <h1>nexton</h1>            <input ref={userInfo.nexton} />
        <h1>client</h1>            <input ref={userInfo.client} />
        <h1>jobTitle</h1>          <input ref={userInfo.jobTitle} />
        <h1>tjm</h1>               <input ref={userInfo.tjm} />
        <h1>contractDuration</h1>  <input ref={userInfo.contractDuration} />
      </div>
      {/* <div className="user-text">
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
      </div> */}

      <div className="buttons">
        <button onClick={handleSubmit}>Show PDF</button>

        <button onClick={handleSave}>Save PDF</button>
      </div>
    </div>
  );
}

export default Contact;
