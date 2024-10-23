import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import CustomTabs from "../components/CustomTabs";
import { AppColors } from "../utils/AppColors";
import { IoSearchOutline } from "react-icons/io5";
import IconContainer from "../components/IconContainer";
import { TbUpload } from "react-icons/tb";
import VegTag from "../components/VegTag";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const StatusChip = ({ status }) => (
  <Typography
    variant="subtitle1"
    fontSize={12}
    color={status === "ACTIVE" ? AppColors.TEXT_GREEN : AppColors.TEXT_RED}
  >
    {status}
  </Typography>
);

const ManageMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const menuItems = [
    {
      id: 3832,
      image: null,
      itemName: "Chicken Tikka Masala Gravy",
      description: "Chicken Tikka Masala Gravy Half...",
      status: "ACTIVE",
      basePrice: 416.0,
      tax: 20.8,
      sellingPrice: 436.8,
      openingTime: "07:00:00",
      closingTime: "23:00:00",
      type: "NON VEG",
      featured: false,
      cuisine: "North Indian",
      foodType: "Mains Gravy Indian",
    },
    // Add more mock data here...
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Stack gap={2}>
      <Stack
        gap={2}
        direction={{ xs: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <CustomTabs tabs={[{ label: "Manage Menu" }]} value={0} />
        <TextField
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoSearchOutline size={18} color="#777678" />
              </InputAdornment>
            ),
          }}
          placeholder="Search here"
          sx={{ bgcolor: AppColors.WHITE, width: 400 }}
          value={searchTerm}
          onChange={handleSearch}
        />
      </Stack>

      <TableContainer sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Item Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Base</TableCell>
              <TableCell>Tax</TableCell>
              <TableCell>Selling Price</TableCell>
              <TableCell>Opening Time</TableCell>
              <TableCell>Closing Time</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Featured</TableCell>
              <TableCell>Cuisine</TableCell>
              <TableCell>Food Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menuItems?.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "& .MuiTableCell-root": { fontSize: 12, color: "#3E3E3E" },
                }}
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <IconContainer size={28} icon={<TbUpload size={14} />} />
                </TableCell>
                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <StatusChip status={item.status} />
                </TableCell>
                <TableCell>{item.basePrice.toFixed(2)}</TableCell>
                <TableCell>{item.tax.toFixed(2)}</TableCell>
                <TableCell>{item.sellingPrice.toFixed(2)}</TableCell>
                <TableCell>{item.openingTime}</TableCell>
                <TableCell>{item.closingTime}</TableCell>
                <TableCell>
                  <VegTag nonVeg />
                </TableCell>
                <TableCell>
                  <Typography
                    variant="subtitle1"
                    fontSize={12}
                    color={
                      item?.featured ? AppColors.TEXT_GREEN : AppColors.TEXT_RED
                    }
                  >
                    {item.featured ? "YES" : "NO"}
                  </Typography>
                </TableCell>
                <TableCell>{item.cuisine}</TableCell>
                <TableCell>{item.foodType}</TableCell>
                <TableCell>
                  <IconButton size="small">
                    <PiDotsThreeOutlineFill
                      color={AppColors.THEME_COLOR}
                      size={18}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ManageMenu;
