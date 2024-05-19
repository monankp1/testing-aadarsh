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

import PlayActivity from "./Pages/playActivity";
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
            path="/shibir-route"
            element={
              <PrivateRoute>
                <ShibirRoute />
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
            path="/score"
            element={
              <PrivateRoute>
                <Score />
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
                <PlayActivity />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
