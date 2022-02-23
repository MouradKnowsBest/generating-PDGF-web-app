import jsPDF from "jspdf";
import { NumberToLetter } from "convertir-nombre-lettre";

export const myPDF = new jsPDF("p", "pt");

function calculateTotal(userInfo) {
  return (
    Number(userInfo.tjm.current.value) *
    Number(userInfo.contractDuration.current.value)
  );
}

function writeToPDF(userInfo) {
  myPDF.text(260, 20, "Nexton");

  myPDF.text(20, 80, "Le Client: ");
  myPDF.text(90, 80, userInfo.client.current.value);

  myPDF.text(20, 130, "Titre du poste: ");
  myPDF.text(130, 130, userInfo.jobTitle.current.value);

  myPDF.text(20, 180, "le TJM: ");
  myPDF.text(75, 180, userInfo.tjm.current.value + " euros");

  myPDF.text(20, 230, "Durée du contrat (en jours): ");
  myPDF.text(220, 230, userInfo.contractDuration.current.value);

  myPDF.text(20, 280, "TOTAL: ");

  myPDF.text(80, 280, String(calculateTotal(userInfo)) + " euros");

  myPDF.text(
    200,
    280,
    " (" + NumberToLetter(calculateTotal(userInfo)) + " euros)"
  );

  myPDF.output("dataurlnewwindow");
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
  return JSON.stringify(data) ;
}

function generatePDF(userInfo) {

  writeToPDF(userInfo);

  const myData = saveDataAsJson(userInfo);

  console.log(myData)


  var json = JSON.parse(myData);
  console.log(json["client"])
  console.log(json["Total"])


  return myData;
}

export default generatePDF;
