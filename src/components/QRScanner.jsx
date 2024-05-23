import React, { useState } from "react";
import QrScanner from "react-qr-scanner";
import axios from "axios";
import { useAuth } from "../contexts/AuthProvider"; // Assuming you have an AuthProvider
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QRScan = ({ handleError }) => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false); // Added state to track if processing
  const { user: authUser } = useAuth(); // Assuming the authUser contains the current user's info

  const handleResult = async (result, error) => {
    if (result && !isProcessing) {
      setIsProcessing(true); // Set processing to true to prevent multiple alerts

      const yuvak_id = result?.text;

      try {
        const response = await axios.post(
          "https://bharuchbaps.in/bharuchbaps.in/index.php/attendance/post_attendance",
          {
            shibir_id: authUser?.id, // Current user ID
            yuvak_id: yuvak_id, // Scanned code
          }
        );

        if (response.data.status === true) {
          toast.success("Attendance marked successfully!");
        } else {
          toast.warn(response.data.message || "Failed to mark attendance!");
        }
        handleCloseScanner();
      } catch (err) {
        console.error("Error posting attendance:", err);
        // toast.error("Error posting attendance!");
        handleCloseScanner(); // Close scanner if there is an error
      } finally {
        setIsProcessing(false); // Reset processing state
      }
    }
    if (error) {
      handleError(error);
    }
  };

  const handleOpenScanner = () => {
    setIsScannerOpen(true);
  };

  const handleCloseScanner = () => {
    setIsScannerOpen(false);
    setIsProcessing(false); // Reset processing state when closing scanner
  };

  return (
    <div style={{ width: "100%" }}>
      {isScannerOpen ? (
        <div>
          <button onClick={handleCloseScanner}
            style={{
              marginBottom: "10px", borderRadius: "8px",
              border: "0.5px solid rgba(29, 15, 42, 0.50)",
              background: "linear-gradient(180deg, #270025 0%, #1D0F2A 100%)",
              color: "white",
              padding: "10px 20px",
            }}>
            Close Scanner
          </button>
          <QrScanner
            delay={300}
            constraints={{ facingMode: "environment" }}
            onResult={handleResult}
            style={{ width: "100%" }}
          />
        </div>
      ) : (
        <button onClick={handleOpenScanner}
          style={{
            marginBottom: "10px", borderRadius: "8px",
            border: "0.5px solid rgba(29, 15, 42, 0.50)",
            background: "linear-gradient(180deg, #270025 0%, #1D0F2A 100%)",
            color: "white",
            padding: "10px 20px",
          }}>
          Open Scanner
        </button>
      )}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default QRScan;
