import { Dialog, List, ListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { AppColors } from "../../utils/AppColors";
import { menuItems } from "../Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutConfirm from "../LogoutConfirm";

export default function MobileNavDrawer({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <MdClose
        onClick={onClose}
        size={24}
        color={AppColors.TEXT_SECONDARY}
        style={{ margin: 16, marginLeft: "auto" }}
      />
      <List>
        {menuItems?.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => handleNavigate(item?.path)}
            sx={{
              height: 50,
              backgroundColor:
                item.path === location.pathname && AppColors.THEME_COLOR,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color={
                item.path === location.pathname
                  ? AppColors.WHITE
                  : AppColors.TEXT_PRIMARY
              }
              fontSize={14}
              fontWeight={500}
            >
              {item?.text}
            </Typography>
          </ListItem>
        ))}
        <ListItem
          onClick={() => setOpen(true)}
          sx={{
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            color={AppColors.TEXT_PRIMARY}
            fontSize={14}
            fontWeight={500}
          >
            Logout
          </Typography>
        </ListItem>
      </List>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <LogoutConfirm onClose={() => setOpen(false)} />
      </Dialog>
    </>
  );
}
