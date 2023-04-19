import React from 'react';
import { Button } from 'react-admin';
import { saveAs } from 'file-saver';
import { Document, Page, Text } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';

const PdfButton = ({ id }: { id: string }) => {
    const handleShowResume = async () => {
      try {
        const response = await fetch(`https://se-diva-docs.herokuapp.com/applicants/downloadresume/${id}.pdf`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Button label="Download PDF" onClick={handleShowResume} />
    );
  };
  
  export default PdfButton;
  