import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import infoRoles from "./Content/InfoContent";

export default function TeamCard() {
  return (
    <>
      {infoRoles.map((info, index) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardMedia
              sx={{ height: 140 }}
              image={info.image}
              title={info.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#1B3358"
              >
                {info.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.role}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
