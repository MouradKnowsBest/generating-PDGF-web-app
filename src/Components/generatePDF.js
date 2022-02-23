import jsPDF from "jspdf";
import { NumberToLetter } from "convertir-nombre-lettre";

export const myPDF = new jsPDF("p", "pt");

function generatePDF(userInfo) {
  writeToPDF(userInfo);

  const myData = saveDataAsJson(userInfo);

  console.log(myData);

  var json = JSON.parse(myData);
  console.log(json["client"]);
  console.log(json["Total"]);
  console.log(json["manager"]);

  return myData;
}

function writeToPDF(userInfo) {
  myPDF.setFontSize(26);
  myPDF.text(260, 25, "Nexton");
  myPDF.setFontSize(16);

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 80, "Le Manager: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(115, 80, userInfo.manager.current.value);

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(250, 80, "Le Consultant: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(360, 80, userInfo.consultant.current.value);

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 130, "Le Client: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(90, 130, userInfo.client.current.value);
  
  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 180, "Titre du poste: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(130, 180, userInfo.jobTitle.current.value);


  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 230, "le TJM: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(75, 230, userInfo.tjm.current.value + " € H.T.");

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 280, "Durée du contrat (en jours): ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(220, 280, userInfo.contractDuration.current.value + " jours");

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 330, "TOTAL: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(80, 330, String(calculateTotal(userInfo)) + " euros hors taxes");
  
  myPDF.text(
    80,
    350,
    " (" + NumberToLetter(calculateTotal(userInfo)) + " euros hors taxes)"
  );

  myPDF.output("dataurlnewwindow");
}

function calculateTotal(userInfo) {
  return (
    Number(userInfo.tjm.current.value) *
    Number(userInfo.contractDuration.current.value)
  );
}

function saveDataAsJson(userInfo) {
  const data = {
    manager: userInfo.manager.current.value,
    consultant: userInfo.consultant.current.value,
    client: userInfo.client.current.value,
    jobTitle: userInfo.jobTitle.current.value,
    TJM: userInfo.tjm.current.value,
    contractDuration: userInfo.contractDuration.current.value,
    Total: String(calculateTotal(userInfo)),
    totalInLetters: NumberToLetter(String(calculateTotal(userInfo))),
  };
  return JSON.stringify(data);
}

export default generatePDF;
