import { IconButton, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import { AppColors } from "../utils/AppColors";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function CustomTabs({ tabs, value, handleChange, onBackClick }) {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {typeof onBackClick == "function" && (
        <IconButton onClick={onBackClick} size="small">
          <MdOutlineArrowBackIos size={18} color={AppColors.TEXT_PRIMARY} />
        </IconButton>
      )}
      <Tabs
        variant="scrollable"
        sx={{
          ".MuiButtonBase-root": {
            borderRadius: "8px 8px 0 0",
            maxWidth: "fit-content",
            padding: "0px 18px",
            maxHeight: 42,
            minHeight: 42,
          },
          "& .MuiTabs-root": {
            minHeight: 42,
          },
          "&.MuiTabs-root": {
            minHeight: 42,
            maxHeight: 42,
          },
          "&.MuiTab-iconWrapper-root": {
            m: 0,
          },
        }}
        value={value}
        onChange={handleChange}
      >
        {tabs.map((i, index) => (
          <Tab
            icon={i.icon ? <i.icon /> : null}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              textTransform: "none",
              fontSize: 14,
              fontWeight: 500,
              color:
                index == value ? AppColors.TEXT_PRIMARY : AppColors.TEXT_GREY,
            }}
            sx={{
              borderBottom: "2px solid #E2E2E2",
              "& .MuiTab-iconWrapper": {
                margin: 0,
              },
            }}
            label={i.label}
          />
        ))}
      </Tabs>
      {tabs.map(
        (i, index) =>
          index == value &&
          i.Component && (
            <Stack py={2} value={value} index={index}>
              <i.Component />
            </Stack>
          )
      )}
    </Stack>
  );
}
