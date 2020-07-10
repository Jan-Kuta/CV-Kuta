import React from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ToPdfButton = () => {
    const getPDF = () => {
        const input = document.getElementById('myCV');
        
        html2canvas(input, {scale: 0.56})
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png', 0.5);

                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('jan_kuta_CV.pdf');
            });
    }

    return <button onClick={getPDF}>Download as PDF</button>
}

export default ToPdfButton;