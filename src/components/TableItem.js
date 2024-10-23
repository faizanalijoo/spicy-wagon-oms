import { Stack, Typography } from "@mui/material";
import React from "react";

export default function TableItem({ label, value, color, size }) {
  return (
    <Stack>
      <Typography
        sx={{
          "& .MuiTypography-root": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
        variant="subtitle2"
        fontSize={9}
        color="#7A7A7A"
        fontWeight={300}
        textTransform="uppercase"
      >
        {label || "--"}
      </Typography>
      <Typography
        sx={{
          "& .MuiTypography-root": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
        variant="subtitle2"
        fontSize={size == "large" ? 15 : 13}
        fontWeight={500}
        color={color || "#3E3E3E"}
      >
        {value || "--"}
      </Typography>
    </Stack>
  );
}
