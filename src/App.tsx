import React from 'react';
import PdfViewerComponent from './components/PdfViewerComponent';

const App: React.FC = () => {


const handleSave = (signedPdf: Blob) => {
  // Example: download the signed PDF
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(signedPdf);
  link.download = "signed-document.pdf";
  link.click();
};


  return (
    <div className="App" style={{ width: "100vw" }}>
      <div className="PDF-viewer">
        <PdfViewerComponent document={"document.pdf"} />
      </div>
    </div>
  );
}

export default App;
