import { Stack, Typography } from "@mui/material";
import React from "react";

const STATUS = {
  ORDER_PLACED: { label: "PLACED", bgcolor: "#edf7ef", textColor: "#129929" },
  BEING_PREPARED: {
    label: "Being Prepared",
    bgcolor: "#fff9ea",
    textColor: "#D6AB00",
  },
};

export default function StatusChip({ status }) {
  return (
    <Stack
      bgcolor={STATUS[status]?.bgcolor}
      height={22}
      px={1}
      justifyContent="center"
      borderRadius={1}
    >
      <Typography
        color={STATUS[status]?.textColor}
        fontSize={9}
        fontWeight={500}
      >
        {STATUS[status]?.label}
      </Typography>
    </Stack>
  );
}
