// import React, { useState } from "react";
// import QrScanner from "react-qr-scanner";

// const QRScanner = ({ handleScan }) => {
//   const [error, setError] = useState(null);

//   const handleError = (err) => {
//     setError(err);
//   };

//   return (
//     <div>
//       <QrScanner
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: "100%" }}
//       />
//       {error && <p>{error.message}</p>}
//     </div>
//   );
// };

// export default QRScanner;
import React from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = ({ handleScan }) => {
  const handleError = (error) => {
    console.error("QR Scan Error:", error);
  };

  const handleResult = (result, error) => {
    if (result) {
      handleScan(result.text);
    }
    if (error) {
      handleError(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
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
