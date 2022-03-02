import generatePDF from '../Components/generatePDF'


class generatePDFService{
    generateMyPDF(){
          return generatePDF()
    }
}

export default new generatePDFService()