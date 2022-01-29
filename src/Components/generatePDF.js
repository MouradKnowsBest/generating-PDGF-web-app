import jsPDF from "jspdf";

export const myPDF = new jsPDF("p", "pt");

// var myPDF = new jsPDF('landscape'); // si on veut le doc en format paysage

function generatePDF(userInfo) {
  // Optional - set properties on the document
  //   myPDF.setProperties({
  // 	title: 'Title',
  // 	subject: 'This is the subject',
  // 	author: 'James Hall',
  // 	keywords: 'generated, javascript, web 2.0, ajax',
  // 	creator: 'MEEE'
  // });

  // Add some text to PDF
  // doc.setTextColor(255,0,0); to make text color red
  myPDF.text(20, 20, "Prénom: ");
  myPDF.text(90, 20, userInfo.firstName.current.value);
  // myPDF.setFontSize(22);

  myPDF.text(200, 20, "Nom: ");
  myPDF.text(250, 20, userInfo.name.current.value);

  myPDF.text(350, 20, "Fonction: ");
  myPDF.text(430, 20, userInfo.role.current.value);

  // myPDF.addPage();// si y'a besoin de rajouter une page

  myPDF.text(20, 150, userInfo.text.current.value);

  const myImg = getimg(myPDF);

  myPDF.addImage(myImg, 400, 400);


  // Set the font of PDF doc
  myPDF.setFont("courier");

  myPDF.output("dataurlnewwindow");
}


function getimg(myPDF) {
  var img = new Image();
  img.onload = function () {
    myPDF.addImage(this, 400, 400);
    // myPDF.save("test.pdf");
  };

  img.crossOrigin = ""; // for demo as we are at different origin than image
  img.src = "../myImg.jpg"; // some random imgur image

  return img
}

export default generatePDF;