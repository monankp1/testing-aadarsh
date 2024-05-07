// components/AnnouncementCard.js

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function AnnouncementCard() {
  return (
    <Card sx={{ mb: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Announcements
        </Typography>
        {/* Add announcement content here */}
        આનંદો. આનંદો. આનંદો યુવા- યુવતી શિબિર ૨૦૨૪ પિય યુવાનો, પરસ્પર સંપ
        વધારવાનો અવસર એટલે યુવા શિબિર, ગમ્મત સાથે જ્ઞાન પામવાનો અવસર એટલે યુવા
        શિબિર, સદગુરુ સંતો અને પૂ.મહંત સ્વામીનો રાજીપો પ્રાપ્ત કરવાનો અવસર એટલે
        યુવા શિબિર. હા મિત્રો, આવા અનેક કાર્યો ને સિદ્ધ કરવાનો અમૂલ્ય અવસર એટલે
        બીએપીએસ યુવા-યુવતી શિબિર. આપ સર્વ યુવાનો ને જણાવતા અતિ આનંદ થાય છે કે
        બીએપીએસ યુવા પ્રવૃત્તિ દ્વારા : "Become Adarsh" આ માધ્યમિક વિચાર અંતર્ગત
        પાંચ દિવસીય ભવ્ય અને દિવ્ય યુવા- યુવતી શિબિર ૨૦૨૪ નું આયોજન કરવા આવ્યું
        છે.
      </CardContent>
    </Card>
  );
}

export default AnnouncementCard;
