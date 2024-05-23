// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./App.css"; // Make sure your stylesheet is correctly imported
import SadgunLekhan from "./Pages/SadgunLekhan";
import ShibirRoute from "./Pages/ShibirRoutes";
import UserProfile from "./Pages/UserProfile";
// import ImageDetails from "./components/ImageDetails";
import { AuthProvider } from "./contexts/AuthProvider";
import { PrivateRoute } from "./contexts/PrivateRoute";
import Navsari from "./Pages/routeDetails/Navsari";
import Bharuch from "./Pages/routeDetails/Bharuch";
import Nashik from "./Pages/routeDetails/Nashik";
import Pune from "./Pages/routeDetails/Pune";
import Tithal from "./Pages/routeDetails/Tithal";
import Imagicaa from "./Pages/routeDetails/Imagicaa";
import Notifications from "./Pages/Notifications";
import AddSadgun from "./Pages/AddSadgun";
import Score from "./Pages/Score";
import LostAndFound from "./Pages/LostAndFound";
import AddFoundItem from "./Pages/AddFoundItem";

// import PlayActivity from "./Pages/playActivity";
import PlayQuiz from "./Pages/playActivity";
import Dhule from "./Pages/routeDetails/Dhule";
import Ellora from "./Pages/routeDetails/Ellora";
import BusDetails from "./Pages/detailview/BusDetails";
import MandalDetails from "./Pages/detailview/MandalDetails";
import AdminDetails from "./Pages/detailview/AdminDetails";
import ActivityPage from "./Pages/ActivityPage";
import ShibirRoutess from "./Pages/ShibirRoutess";


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/sadgun-lekhan"
            element={
              <PrivateRoute>
                <SadgunLekhan />
              </PrivateRoute>
            }
          />
          <Route
            path="/shibir-routes"
            element={
              <PrivateRoute>
                <ShibirRoutess />
              </PrivateRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <Notifications />
              </PrivateRoute>
            }
          />
          <Route
            path="/activity-page"
            element={
              <PrivateRoute>
                <ActivityPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/Bharuch-details"
            element={
              <PrivateRoute>
                <Bharuch />
              </PrivateRoute>
            }
          />
          <Route
            path="/Dhule-details"
            element={
              <PrivateRoute>
                <Dhule />
              </PrivateRoute>
            }
          />
          <Route
            path="/Ellora-details"
            element={
              <PrivateRoute>
                <Ellora />
              </PrivateRoute>
            }
          />

          <Route
            path="/Navsari-details"
            element={
              <PrivateRoute>
                <Navsari />
              </PrivateRoute>
            }
          />
          <Route
            path="/Nashik-details"
            element={
              <PrivateRoute>
                <Nashik />
              </PrivateRoute>
            }
          />

          <Route
            path="/Pune-details"
            element={
              <PrivateRoute>
                <Pune />
              </PrivateRoute>
            }
          />

          <Route
            path="/Tithal-details"
            element={
              <PrivateRoute>
                <Tithal />
              </PrivateRoute>
            }
          />

          <Route
            path="/Imagicaa-details"
            element={
              <PrivateRoute>
                <Imagicaa />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-sadgun"
            element={
              <PrivateRoute>
                <AddSadgun />
              </PrivateRoute>
            }
          />

          <Route
            path="/lostandfound"
            element={
              <PrivateRoute>
                <LostAndFound />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-foundItem"
            element={
              <PrivateRoute>
                <AddFoundItem />
              </PrivateRoute>
            }
          />

          <Route
            path="/play-activity"
            element={
              <PrivateRoute>
                <PlayQuiz />
              </PrivateRoute>
            }
          />

          <Route
            path="/bus-details"
            element={
              <PrivateRoute>
                <BusDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/mandal-details"
            element={
              <PrivateRoute>
                <MandalDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-details"
            element={
              <PrivateRoute>
                <AdminDetails />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
