import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import CustomTabs from "../components/CustomTabs";
import SearchField from "../components/SearchField";
import CustomCard from "../components/CustomCard";
import CardTitle from "../components/CardTitle";
import {
  MdAdd,
  MdOutlineFileDownload,
  MdOutlineFileUpload,
  MdRefresh,
} from "react-icons/md";
import TableItem from "../components/TableItem";

const VendorsRollingDepositScheme = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const depositData = [
    {
      date: "08-07-2024",
      time: "13:24",
      orderId: "#1286890452",
      transactionId: "1278067894",
      vendor: "Rangoli Wagon",
      outletId: "127",
      outlet: "Hotel Ramakrishna (Pure...)",
      amount: "₹320.00",
      paymentMode: "CASH",
      baseAmount: "596.00",
      marginAmount: "89.40",
      openingBalance: "87,774.00",
      // amount: "119.20",
      closingAmount: "87,655.06",
      remarks: "N/A",
      updatedBy: "N/A",
    },
    // Add more mock data here...
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddDeposit = () => {
    // Implement add deposit functionality
    console.log("Add deposit clicked");
  };

  const handleUploadTransactions = () => {
    // Implement upload transactions functionality
    console.log("Upload transactions clicked");
  };

  const handleDownloadReport = () => {
    // Implement download report functionality
    console.log("Download report clicked");
  };

  return (
    <Stack gap={2}>
      <Stack
        gap={2}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <CustomTabs
          tabs={[{ label: "Vendors Rolling Deposit Scheme" }]}
          value={0}
        />

        <Stack direction="row" alignItems="center" gap={2}>
          <SearchField
            width={300}
            search={searchTerm}
            onChange={handleSearch}
          />
          <Button
            variant="contained"
            color="success"
            endIcon={<MdAdd />}
            onClick={handleAddDeposit}
          >
            Add Deposit
          </Button>
        </Stack>
      </Stack>

      <CustomCard sx={{ p: 2, gap: 2 }}>
        <Stack
          gap={2}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
        >
          <CardTitle icon={<MdRefresh />} title="RDS for Rangoli Wagon" />
          <Stack direction="row" alignItems="center" gap={2}>
            <Button
              endIcon={<MdOutlineFileUpload />}
              size="small"
              color="info"
              variant="outlined"
              onClick={handleUploadTransactions}
            >
              Upload Transactions
            </Button>
            <Button
              endIcon={<MdOutlineFileDownload />}
              size="small"
              color="info"
              variant="outlined"
              onClick={handleDownloadReport}
            >
              Download Report
            </Button>
          </Stack>
        </Stack>
        <Divider />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={130}>Date & Time</TableCell>
                <TableCell>Order Details</TableCell>
                <TableCell width={200}>Outlet & Vendor</TableCell>
                <TableCell>Base Amount</TableCell>
                <TableCell>Margin Amount</TableCell>
                <TableCell>Opening Balance</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Closing Amount</TableCell>
                <TableCell>Remarks</TableCell>
                <TableCell>Updated By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {depositData.map((row, index) => (
                <TableRow sx={{ bgcolor: "#FAFAFA" }} key={index}>
                  <TableCell>
                    <Stack gap={1}>
                      <TableItem label="date" value={row?.date} />
                      <Divider />
                      <TableItem label="time" value={row?.time} />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack gap={1}>
                      <Stack direction="row" gap={2}>
                        <TableItem label="order id" value={row?.orderId} />
                        <TableItem
                          label="transaction id"
                          value={row?.transactionId}
                        />
                      </Stack>
                      <Divider />
                      <Stack direction="row" gap={2}>
                        <TableItem label="amount" />
                        <TableItem label="payment" />
                      </Stack>
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack gap={1}>
                      <Stack direction="row" gap={2}>
                        <TableItem label="vendor" value={row?.vendor} />
                        <TableItem label="outlet id" value={row?.outletId} />
                      </Stack>
                      <Divider />
                      <Stack direction="row" gap={2}>
                        <TableItem label="outlet" value={row.outlet} />
                      </Stack>
                    </Stack>
                  </TableCell>

                  <TableCell>{row.baseAmount}</TableCell>
                  <TableCell>{row.marginAmount}</TableCell>
                  <TableCell>{row.openingBalance}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.closingAmount}</TableCell>
                  <TableCell>{row.remarks}</TableCell>
                  <TableCell>{row.updatedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CustomCard>
    </Stack>
  );
};

export default VendorsRollingDepositScheme;
