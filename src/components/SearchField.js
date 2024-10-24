import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { AppColors } from "../utils/AppColors";

export default function SearchField({
  search,
  onChange,
  width,
  placeholder = "Search here",
}) {
  return (
    <Stack width={width || 400}>
      <TextField
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IoSearchOutline size={18} color="#777678" />
            </InputAdornment>
          ),
        }}
        placeholder={placeholder}
        sx={{ bgcolor: AppColors.WHITE }}
        value={search}
        onChange={onChange}
      />
    </Stack>
  );
}
