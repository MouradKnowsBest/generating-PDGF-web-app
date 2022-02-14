import jsPDF from "jspdf";

export const myPDF = new jsPDF("p", "pt");

function inWords (num) {
    var a = ['','un ','deux ','trois ','quatre ', 'cinq ','six ','sept ','huit ','neuf ','dix ','onze ','douze ','treize ','quatorze ','quinze ','seize ','dix-sept ','dix-huit ','dix-neuf '];
  var b = ['', '', 'vingt','trente','quarante','cinquante', 'soixante','soixante-dix','quatre-vingts','quatre-vingts-dix'];
  
    if ((num = num.toString()).length > 9) return 'overflow';
    const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] !== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'millions ' : '' ;
    str += (n[2] !== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'cent mille ' : '';
    str += (n[3] !== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'mille ' : '';
    str += (n[4] !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'cent ' : '';
    str += (n[5] !== 0) ? ((str !== '') ? 'et ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'euros ' : '';
    return str;
  }
  
// var myPDF = new jsPDF('landscape'); // si on veut le doc en format paysage

function generatePDF(userInfo) {

inWords(Number(userInfo.tjm.current.value) * Number(userInfo.contractDuration.current.value) + ' euros')
  
  // console.log(inWords(125479))

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
  myPDF.text(20, 20, "nexton: ");
  myPDF.text(90, 20, userInfo.nexton.current.value);
  // myPDF.setFontSize(22);

  myPDF.text(200, 20, "client: ");
  myPDF.text(250, 20, userInfo.client.current.value);

  myPDF.text(20, 200, "jobTitle: ");
  myPDF.text(90, 200, userInfo.jobTitle.current.value);

  myPDF.text(20, 300, "tjm: ");
  myPDF.text(90, 300, userInfo.tjm.current.value + ' euros');

  myPDF.text(20, 400, "contractDuration: ");
  myPDF.text(150, 400, userInfo.contractDuration.current.value);

  myPDF.text(20, 500, "TOTAL: ");

  myPDF.text(150, 500, String(Number(userInfo.tjm.current.value) * Number(userInfo.contractDuration.current.value)) + ' euros');

  const inEuros = inWords(Number(userInfo.tjm.current.value) * Number(userInfo.contractDuration.current.value) + ' euros');
  console.log(inEuros)
  myPDF.text(300, 500, inEuros);

  // myPDF.addPage();// si y'a besoin de rajouter une page

  // myPDF.text(300, 500, userInfo.text.current.value);

  // const myImg = getimg(myPDF);

  // myPDF.addImage(myImg, 400, 400);


  // Set the font of PDF doc
  myPDF.setFont("courier");

  myPDF.output("dataurlnewwindow");
}


// function getimg(myPDF) {
//   var img = new Image();
//   img.onload = function () {
//     myPDF.addImage(this, 400, 400);
//     // myPDF.save("test.pdf");
//   };

//   img.crossOrigin = ""; // for demo as we are at different origin than image
//   img.src = "../myImg.jpg"; // some random imgur image

//   return img
// }

export default generatePDF;