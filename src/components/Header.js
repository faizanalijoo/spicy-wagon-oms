import React, { useState } from "react";
import { Menu, MenuItem, Typography, Stack } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { SIDEBAR_WIDTH } from "../utils/constants";
import { AppColors } from "../utils/AppColors";
import { IoIosArrowDown } from "react-icons/io";
import CustomCard from "./CustomCard";
import { MdClose, MdOutlineRestaurant } from "react-icons/md";

const Header = () => {
  const { vendors, setVendorId } = useAuth();
  const [selectedOutlet, setSelectedOutlet] = useState(vendors[0].outlet.name);

  const OutletDropdown = () => {
    const [anchorElOutlet, setAnchorElOutlet] = React.useState(null);
    const handleOutletClick = (event) => {
      setAnchorElOutlet(event.currentTarget);
    };
    const handleOutletClose = () => {
      setAnchorElOutlet(null);
    };
    const handleOutletChange = (outlet, outletId) => {
      setVendorId(outletId);
      setSelectedOutlet(outlet);
      handleOutletClose();
    };

    return (
      <>
        <Stack
          sx={{ cursor: "pointer" }}
          direction="row"
          alignItems="center"
          gap={1}
        >
          <Typography
            fontWeight={200}
            variant="subtitle2"
            color={AppColors.WHITE}
            onClick={handleOutletClick}
          >
            Change Outlet
          </Typography>
          <IoIosArrowDown color={AppColors.WHITE} />
        </Stack>

        <Menu
          PaperProps={{ sx: { bgcolor: "#3C3C3D" } }}
          anchorEl={anchorElOutlet}
          open={Boolean(anchorElOutlet)}
          onClose={handleOutletClose}
        >
          {vendors.map((v) => (
            <MenuItem
              sx={{
                fontSize: 12,
                color: "#FFF",
                fontWeight: 500,
                gap: 1,
                ":not(:last-child)": { borderBottom: "1px solid #535255" },
              }}
              onClick={() =>
                handleOutletChange(v.outlet.name, v.outlet.outlet_id)
              }
            >
              <MdOutlineRestaurant size={16}  />
              {v.outlet.companyName}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  };

  return (
    <Stack
      height="100%"
      alignItems="center"
      justifyContent="flex-end"
      direction="row"
      borderBottom="1px solid #404142"
      ml={`${SIDEBAR_WIDTH}px`}
      px={5}
    >
      {vendors.length > 1 && (
        <CustomCard
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            borderColor: "rgba(255,255,255,0.2)",
          }}
        >
          <Stack direction="row" alignItems="center" gap={4}>
            <Stack direction="row" alignItems="center" gap={1}>
              <MdOutlineRestaurant size={16} color={AppColors.WHITE} />
              <Typography
                fontWeight={300}
                variant="subtitle2"
                color={AppColors.WHITE}
              >
                {selectedOutlet}
              </Typography>
            </Stack>

            <Typography fontWeight={200} color={AppColors.WHITE}>
              |
            </Typography>
            <OutletDropdown />
          </Stack>
        </CustomCard>
      )}
    </Stack>
  );
};

export default Header;
