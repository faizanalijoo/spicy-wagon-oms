import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Chip,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
  width: "100%",
  boxSizing: "border-box",
}));

const StyledTableContainer = styled(TableContainer)({
  maxHeight: 440,
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
  padding: "12px 16px",
}));

const ImagePlaceholder = styled(Box)({
  width: 40,
  height: 40,
  backgroundColor: "#ffcccb",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
});

const StatusChip = styled(Chip)(({ theme, status }) => ({
  backgroundColor:
    status === "ACTIVE"
      ? theme.palette.success.light
      : theme.palette.error.light,
  color:
    status === "ACTIVE" ? theme.palette.success.dark : theme.palette.error.dark,
}));

const ManageMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for the table
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
      featured: "N",
    },
    // Add more mock data here...
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledPaper>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5">Manage Menu</Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Here"
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <StyledTableContainer component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Base Price</StyledTableCell>
              <StyledTableCell>Tax</StyledTableCell>
              <StyledTableCell>Selling Price</StyledTableCell>
              <StyledTableCell>Opening Time</StyledTableCell>
              <StyledTableCell>Closing Time</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Featured</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menuItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <ImagePlaceholder>
                    <IconButton size="small">
                      <ImageIcon fontSize="small" />
                    </IconButton>
                  </ImagePlaceholder>
                </TableCell>
                <TableCell>{item.itemName}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <StatusChip
                    label={item.status}
                    status={item.status}
                    size="small"
                  />
                </TableCell>
                <TableCell>{item.basePrice.toFixed(2)}</TableCell>
                <TableCell>{item.tax.toFixed(2)}</TableCell>
                <TableCell>{item.sellingPrice.toFixed(2)}</TableCell>
                <TableCell>{item.openingTime}</TableCell>
                <TableCell>{item.closingTime}</TableCell>
                <TableCell>
                  <Chip label={item.type} color="secondary" size="small" />
                </TableCell>
                <TableCell>{item.featured}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledPaper>
  );
};

export default ManageMenu;
