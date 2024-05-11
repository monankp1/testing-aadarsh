import React from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = ({ handleScan, handleError, handleClose }) => {
  const handleResult = (result, error) => {
    if (result) {
      handleScan(result);
    }
    if (error) {
      handleError(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <button onClick={handleClose} style={{ marginBottom: "10px" }}>
        Close Scanner
      </button>
      <QrReader
        delay={300}
        constraints={{ facingMode: "environment" }}
        onResult={handleResult}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default QRScanner;
