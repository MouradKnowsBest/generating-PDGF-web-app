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

  return myData;
}

function writeToPDF(userInfo) {
  myPDF.setFontSize(26);
  myPDF.text(260, 25, "Nexton");
  myPDF.setFontSize(16);

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 80, "Le Client: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(90, 80, userInfo.client.current.value);

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 130, "Titre du poste: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(130, 130, userInfo.jobTitle.current.value);


  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 180, "le TJM: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(75, 180, userInfo.tjm.current.value + " € H.T.");

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 230, "Durée du contrat (en jours): ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(220, 230, userInfo.contractDuration.current.value + " jours");

  myPDF.setTextColor("#0F9AE5");
  myPDF.text(20, 280, "TOTAL: ");
  myPDF.setTextColor(0, 0, 0);
  myPDF.text(80, 280, String(calculateTotal(userInfo)) + " euros hors taxes");
  
  myPDF.text(
    80,
    305,
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
