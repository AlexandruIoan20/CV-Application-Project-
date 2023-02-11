import React, { Component } from "react";
import html2canvas from "html2canvas";
import  { jsPDF } from 'jspdf';

const DownloadPage = ( { rootElementId, downloadFileName } ) => { 
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId);
        html2canvas(input).then(canvas => { 
            const imgData = canvas.toDataURL('image/png');  
            const pdf = new jsPDF('p', 'pt', 'a4');
            pdf.addImage(imgData, "JPEG", 10, 50);
            pdf.save(`${downloadFileName}`);    
        })
    }

    return (
        <section>
            <button onClick={downloadFileDocument}>Download PDF</button>
        </section>
    )
}

export default DownloadPage;