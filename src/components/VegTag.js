import { Stack } from "@mui/material";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { AppColors } from "../utils/AppColors";

export default function VegTag(props) {
  const { nonVeg } = props;
  return (
    <Stack
      height={16}
      width={16}
      border="1px solid"
      borderColor={nonVeg ? "#9f2828" : AppColors.TEXT_GREEN}
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <GoDotFill
        size={18}
        color={nonVeg ? "#9f2828" : AppColors.TEXT_GREEN}
        style={{ flexShrink: 0 }}
      />
    </Stack>
  );
}
