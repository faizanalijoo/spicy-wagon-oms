import { Stack } from "@mui/material";
import React from "react";
import { AppColors } from "../utils/AppColors";

export default function IconContainer(props) {
  const { icon, bordered = false, rounded, size, bgcolor } = props;
  return (
    <Stack
      sx={{ svg: { color: AppColors.THEME_COLOR, fontSize: 20 } }}
      border={bordered ? "1px solid #E0DDDC" : "none"}
      borderRadius={rounded ? 50 : "8px"}
      bgcolor={
        bgcolor ||
        (rounded ? AppColors.THEME_COLOR : bordered ? "#F9F5F4" : "#FAE6E9")
      }
      height={size || 44}
      width={size || 44}
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      {...props}
    >
      {icon}
    </Stack>
  );
}
