"use client";
import { createTheme } from "@mui/material";
import { AppColors } from "./utils/AppColors";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E4002B",
      light: "#cc0429",
      dark: "#ed113a",
    },
    secondary: {
      main: "#E4002B",
      light: "#ffedee",
      dark: "#ffedee",
    },
    grey: {
      100: "#DEE1E6",
      200: "#707683",
      300: "#90A0B7",
      400: "#b2b2b2",
    },
    info: {
      main: "#1C1C1F",
    },
    black: {
      100: "#323C47",
      200: "#192A3E",
      700: "#000000",
    },
    blue: {
      50: "#EBF2FC",
      100: "#C2CFE099",
      125: "#DEEAFA",
      150: "#F4F4F6",
      700: "#1890FF",
      900: "#109CF1", // accent blue
    },
    brown: {
      100: "#4A4347",
      200: "#403b3e",
      500: "#45383c",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { color: "secondary" },
          style: {
            color: "#E4002B",
            backgroundColor: "#fcf1f2",
            ":hover": { backgroundColor: "#ffedee" },
          },
        },
        {
          props: { color: "secondary", variant: "outlined" },
          style: {
            color: "#E4002B",
            backgroundColor: "#fcf1f2",
            borderColor: "#E4002B",
          },
        },
        {
          props: { variant: "white" },
          style: {
            color: "#362E32",
            fontSize: 15,
            backgroundColor: "#fff",
            ":hover": { backgroundColor: "#f2f2f2" },
          },
        },
        {
          props: { variant: "brown" },
          style: {
            color: "#fff",
            backgroundColor: "#4A4347",
            ":hover": { backgroundColor: "#403b3e" },
          },
        },
        {
          props: { color: "info", variant: "outlined" },
          style: { backgroundColor: "#FAFAFA", borderColor: "#EBEBEB" },
        },
        {
          props: { size: "small" },
          style: { height: 38 },
        },
        {
          props: { size: "medium" },
          style: { height: 40 },
        },
        {
          props: { size: "large" },
          style: { height: 48 },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontFamily: "DM Sans",
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 500,
          flexShrink: 0,
          fontSize:
            ownerState.size == "small"
              ? 13
              : ownerState?.size == "medium"
              ? 14
              : 15,
          paddingLeft: 24,
          paddingRight: 24,
          boxShadow: "none",
        }),
      },
      defaultProps: {
        disableRipple: false,
        size: "medium",
      },
    },
    MuiLink: {
      defaultProps: {
        color: AppColors.WHITE,
        underline: "hover",
        fontSize: 14,
        fontWeight: 500,
      },
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
          borderRadius: 8,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "DM Sans",
          lineHeight: 1.5,
        },

        subtitle1: {
          fontSize: 14,
          color: AppColors.TEXT_PRIMARY,
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: 14,
          color: AppColors.TEXT_SECONDARY,
          fontWeight: 400,
        },
        caption: {
          fontSize: 16,
          color: AppColors.TEXT_PRIMARY,
          fontWeight: 500,
        },
        h1: {
          fontSize: 38,
          color: AppColors.TEXT_PRIMARY,
          fontWeight: 600,
        },
        h2: {
          fontSize: 30,
          color: AppColors.TEXT_PRIMARY,
          fontWeight: 600,
        },
        h3: {
          fontSize: 18,
          color: AppColors.TEXT_PRIMARY,
          fontWeight: 600,
        },
        h4: {
          fontSize: 14,
          color: AppColors.TEXT_PRIMARY,
          fontWeight: 500,
        },
      },
    },

    MuiDivider: {
      variants: [{ props: { orientation: "vertical" }, style: { width: 1 } }],
      styleOverrides: {
        root: {
          borderColor: "#F2F2F2",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "8px",
          borderRadius: "18px",
          border: "1px solid #F2F2F2",
          flexShrink: 0,
          boxShadow: "none",
        },
      },
    },

    MuiChip: {
      variants: [
        {
          props: { color: "success" },
          style: { backgroundColor: "#ebf4ea", color: "#008001" },
        },
        {
          props: { color: "warning" },
          style: { backgroundColor: "#fbf4eb", color: "#A27701" },
        },
        {
          props: { variant: "brown" },
          style: {
            color: "#fff",
            backgroundColor: "#45383c",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#676062",
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },

    MuiBreadcrumbs: {
      defaultProps: {
        separator: <MdOutlineChevronRight size={18} color="#888888" />,
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
          borderRadius: 12,
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          zIndex: 999,
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          // fontSize: 16,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "fit-content",
          backgroundColor: "#fff",
          borderRadius: 12,
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          padding: 16,
          zIndex: 99999,
        },
      },
    },
    MuiDrawer: {
      defaultProps: {
        // anchor: 'right',
      },
    },

    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <IoIosArrowDown size={14} color="#888888" />,
        clearIcon: null,
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "8px",
          border: "1px solid",
          borderColor: AppColors.BORDER_PRIMARY,
        },
        input: {
          fontSize: 16,
          internal: {
            autofill: {
              selected: {
                backgroundColor: "white",
              },
            },
          },
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          cursor: "pointer",
          backgroundColor: "#1C1C1F",
          color: AppColors.WHITE,
          "& .MuiTableCell-root": {
            color: AppColors.WHITE,
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: 12,
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          borderRadius: 8,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderRight: "1px solid #E0E0E0",
          ":last-child": { borderRight: "none" },
        },
      },
    },
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  shadowsReverse: [
    "none",
    "0px -1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px -1px 2px rgba(100, 116, 139, 0.12)",
    "0px -1px 4px rgba(100, 116, 139, 0.12)",
    "0px -1px 5px rgba(100, 116, 139, 0.12)",
    "0px -1px 6px rgba(100, 116, 139, 0.12)",
    "0px -2px 6px rgba(100, 116, 139, 0.12)",
    "0px -3px 6px rgba(100, 116, 139, 0.12)",
    "0px -2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px -5px 12px rgba(100, 116, 139, 0.12)",
    "0px -5px 14px rgba(100, 116, 139, 0.12)",
    "0px -5px 15px rgba(100, 116, 139, 0.12)",
    "0px -6px 15px rgba(100, 116, 139, 0.12)",
    "0px -7px 15px rgba(100, 116, 139, 0.12)",
    "0px -8px 15px rgba(100, 116, 139, 0.12)",
    "0px -9px 15px rgba(100, 116, 139, 0.12)",
    "0px -10px 15px rgba(100, 116, 139, 0.12)",
    "0px -12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px -13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px -14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px -10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
    "0px -25px 50px rgba(100, 116, 139, 0.25)",
  ],
});
