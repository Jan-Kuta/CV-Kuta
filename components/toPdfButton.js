import React from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ToPdfButton = () => {
    const getPDF = () => {
        const input = document.getElementById('myCV');
        
        html2canvas(input, {scale: 0.54})
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png', 0.5);

                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('jan_kuta_CV.pdf');
            });
    }

    return <i title="Download as PDF" className="no-print fa fa-cloud-download fa-3x" aria-hidden="true" width={50} onClick={getPDF}></i>
}

export default ToPdfButton;