import React from "react";
import {
  AppBar,
  CssBaseline,
  Box,
  // useTheme,
  // useMediaQuery,
} from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";

import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { AppTopBar } from "../components/AppTopBar";
import ShibirRoute from "../components/ShibirRoute";
// import AnnouncementCard from "../components/Announcement";
import Notification from "../components/Notification";
import MemoriesSection from "../components/Memories";
import QuizStarter from "../components/QuizStarter";
import ScheduleCard from "./karyakram/ScheduleCard";
// import QRScanner from "../components/QRScanner";

const Home = () => {
  // const [result, setResult] = useState("");
  // const [scanError, setScanError] = useState(null);
  // const [showScanner, setShowScanner] = useState(false);
  // const userName = "Bhavesh patel"; // Replace with actual username

  // const handleScan = (data) => {
  //   if (data) {
  //     console.log(data.text, "<<<<-data.text");
  //     setResult(data.text);
  //   }
  // };
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const handleError = (err) => {
  //   setScanError(err);
  // };

  // const handleScanIconClick = () => {
  //   setShowScanner(true);
  // };

  // const handleCloseScanner = () => {
  //   setShowScanner(false);
  // };

  return (
    <div className="appBackground">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          marginTop: "95px",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AppBar position="fixed" sx={{ backgroundColor: "#0c1225" }}>
          <AppTopBar />
        </AppBar>
        <Notification />
        {/* Main Content */}
        <ShibirRoute />
        <MemoriesSection />
        {/* ... your QR scanner code here */}
        <br />
        <ScheduleCard />

        <BottomNavigation
          sx={{
            backgroundColor: "#0c1225",
            marginTop: "100px",
            position: "fixed",
            bottom: "0px",
            width: "100%", // Make sure BottomNavigation spans the full width
          }}
        >

          <BottomNavigationBar />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Home;
