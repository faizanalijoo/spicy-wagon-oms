import { Card } from "@mui/material";
import React from "react";

export default function CustomCard(props) {
  const { children, borderColor, bgcolor } = props;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: borderColor || "#E0E0E0",
        bgColor: bgcolor || "#fff",
        ...props.sx,
      }}
    >
      {children}
    </Card>
  );
}
