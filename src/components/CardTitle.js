import { Stack, Typography } from "@mui/material";
import React from "react";
import IconContainer from "./IconContainer";

export default function CardTitle({ title, icon }) {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <IconContainer size={34} icon={icon} />
      <Typography variant="h3" fontSize={16}>{title}</Typography>
    </Stack>
  );
}
