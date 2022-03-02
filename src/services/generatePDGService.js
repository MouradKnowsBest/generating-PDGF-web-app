import generatePDF from "../Components/generatePDF";


class generatePDFService{

    getPdfData(){
        return generatePDF()
    }
}

export default new generatePDFService()