// components/TodayActivityCard.js

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function TodayActivityCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Today's Activity
        </Typography>
        {/* Add today's activity content here */}
        શિબીરના અંતિમ ચરણમાં જ્ઞાન સાથે ગમતું પ્રાપ્ત થાય તે હેતુસર ભારતના સૌથી
        મોટા થીમ પાર્ક "Imagica Adventure park" નો પણ લાભ પ્રાપ્ત થવાનો છે
      </CardContent>
    </Card>
  );
}

export default TodayActivityCard;
