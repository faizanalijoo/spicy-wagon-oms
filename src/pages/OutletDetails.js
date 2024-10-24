import React, { useCallback, useState, useEffect } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoIcon from "@mui/icons-material/Info";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import { useAuth } from "../contexts/AuthContext";
import CenteredCircularProgress from "../components/CenteredCircularProgress";
import CustomTabs from "../components/CustomTabs";
import CustomCard from "../components/CustomCard";
import CardTitle from "../components/CardTitle";
import TableItem from "../components/TableItem";
import { FaTruck } from "react-icons/fa";
import { TbLocationFilled } from "react-icons/tb";

const OutletDetails = () => {
  const [loading, setLoading] = useState(true);
  const [outletData, setOutletData] = useState({});
  const [error, setError] = useState(null);
  const { vendorId } = useAuth();

  const fetchOutletDetail = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(apiEndpoints.getOutletDetails(vendorId));

      setOutletData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch orders. Please try again later.");
      setLoading(false);
    }
  }, [vendorId]);

  useEffect(() => {
    fetchOutletDetail();
  }, [fetchOutletDetail]);

  if (loading) {
    return <CenteredCircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Stack gap={2}>
      <CustomTabs tabs={[{ label: "Outlet Details" }]} value={0} />

      <CustomCard sx={{ p: 2, gap: 2 }}>
        <CardTitle title="Basic Information" icon={<DescriptionIcon />} />
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="OUTLET NAME"
              value={outletData.name}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="OUTLET ID"
              value={outletData.outlet_id}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem size="large" label="ID" value={outletData.id} />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="COMPANY NAME"
              value={outletData.companyName}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="DELIVERED BY"
              value={outletData.delivered_by}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="DELIVERY COST"
              value={outletData.deliveryCost}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="FSAI NUMBER"
              value={outletData.fssaiNo}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="FSAI VALID UPTO"
              value={outletData.fssaiValidUpto}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="GST NUMBER"
              value={outletData.gstNo}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="MINIMUM ORDER AMOUNT"
              value={outletData.minOrderAmount}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem size="large" label="STATUS" value={outletData.status} />
          </Grid>
        </Grid>

        <CardTitle
          icon={<TbLocationFilled />}
          title="Location & Contact Details"
        />
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="ADDRESS"
              value={outletData.address}
            />
          </Grid>

          <Grid item xs={6} md={4}>
            <TableItem size="large" label="CITY" value={outletData.city} />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="STATION CODE"
              value={outletData.station_code}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem size="large" label="EMAIL" value={outletData.email} />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="MOBILE NUMBER"
              value={outletData.mobile}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem size="large" label="STATE" value={outletData.state} />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="LATITUDE"
              value={outletData.latitude}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="LONGITUDE"
              value={outletData.longitude}
            />
          </Grid>
        </Grid>

        <CardTitle icon={<InfoIcon />} title="Additional Details" />
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="ORDER TIMING"
              value={outletData.order_timing}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="OPENING TIME"
              value={outletData.openingTime}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="CLOSING TIME"
              value={outletData.closingTime}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="DETAILS"
              value={outletData.details}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="PREPAID"
              value={outletData.prepaid ? "Yes" : "No"}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="FEATURED"
              value={outletData.featured ? "Yes" : "No"}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="NUMBER OF RATINGS"
              value={outletData.n_ratings}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <TableItem
              size="large"
              label="AVERAGE RATINGS"
              value={outletData.average_rating}
            />
          </Grid>
        </Grid>

        <CardTitle icon={<FaTruck />} title=" Vendors Associated" />
        <Divider />

        <TableContainer sx={{ width: { xs: "100%", md: "50%" } }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {outletData?.vendors?.map((vendor, index) => (
                <TableRow sx={{ bgcolor: "#FAFAFA" }} key={index}>
                  <TableCell>{vendor.user}</TableCell>
                  <TableCell>
                    {vendor.is_active ? "Active" : "Not Active"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CustomCard>
    </Stack>
  );
};

export default OutletDetails;
