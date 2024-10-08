import React, { useCallback, useState, useEffect } from 'react';
import { 
  Typography, 
  Paper, 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";
import { useAuth } from "../contexts/AuthContext";
import CenteredCircularProgress from '../components/CenteredCircularProgress';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

const Value = styled(Typography)({
  fontWeight: 500,
});

const InfoItemDiv = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const InfoItem = ({ label, value }) => (
  <InfoItemDiv>
  <Label variant="subtitle2">{label}</Label>
  <Value>{value}</Value>
</InfoItemDiv>
);

const OutletDetails = () => {
  const [loading, setLoading] = useState(true);
  const [outletData, setOutletData] = useState({})
  const [error, setError] = useState(null);

  const { vendorId } = useAuth();

  const fetchOutletDetail = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get(
        apiEndpoints.getOutletDetails(
          vendorId
        )
      );

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

  console.log('outletdata', outletData)

  return (
    <StyledPaper>
      <Typography variant="h5" gutterBottom>Outlet Details</Typography>

     
      <Box mb={4}>
        <SectionTitle>
          <DescriptionIcon />
          Basic Information
        </SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <InfoItem label="OUTLET NAME" value={outletData.name} />
            <InfoItem label="COMPANY NAME" value={outletData.companyName} />
            <InfoItem label="FSAI NUMBER" value={outletData.fssaiNo} />
            <InfoItem label="MINIMUM ORDER AMOUNT" value={outletData.minOrderAmount} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InfoItem label="OUTLET ID" value={outletData.outlet_id} />
            <InfoItem label="DELIVERED BY" value={outletData.delivered_by} />
            <InfoItem label="FSAI VALID UPTO" value={outletData.fssaiValidUpto} />
            <InfoItem label="STATUS" value={outletData.status} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InfoItem label="ID" value={outletData.id} />
            <InfoItem label="DELIVERY COST" value={outletData.deliveryCost} />
            <InfoItem label="GST NUMBER" value={outletData.gstNo} />
          </Grid>
          <img
            src={`${outletData.logoImage}`}
            alt={outletData.name}
            loading="lazy"
            style={{ height: '200px', width: '200px', margin: '30px'}}
          />
        </Grid>
      </Box>

      <Box mb={4}>
        <SectionTitle>
          <LocationOnIcon />
          Location & Contact Details
        </SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <InfoItem label="ADDRESS" value={outletData.address} />
            <InfoItem label="EMAIL" value={outletData.email} />
            <InfoItem label="LATITUDE" value={outletData.latitude} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="CITY" value={outletData.city} />
            <InfoItem label="MOBILE NUMBER" value={outletData.mobile} />
            <InfoItem label="LONGITUDE" value={outletData.longitude} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="STATION CODE" value={outletData.station_code} />
            <InfoItem label="STATE" value={outletData.state} />
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <SectionTitle>
          <InfoIcon />
          Additional Details
        </SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <InfoItem label="ORDER TIMING" value={outletData.order_timing} />
            <InfoItem label="DETAILS" value={outletData.details} />
            <InfoItem label="NUMBER OF RATINGS" value={outletData.n_ratings} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="OPENING TIME" value={outletData.openingTime} />
            <InfoItem label="PREPAID" value={outletData.prepaid ? 'Yes' : 'No'} />
            <InfoItem label="AVERAGE RATINGS" value={outletData.average_rating} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="CLOSING TIME" value={outletData.closingTime} />
            <InfoItem label="FEATURED" value={outletData.featured ? 'Yes' : 'No'} />
          </Grid>
        </Grid>
      </Box>

      <Box>
        <SectionTitle>
          <GroupIcon />
          Vendors Associated
        </SectionTitle>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {outletData?.vendors?.map((vendor, index) => (
                <TableRow key={index}>
                  <TableCell>{vendor.id}</TableCell>
                  <TableCell>{vendor.user}</TableCell>
                  <TableCell>{vendor.is_active ? 'Active' : 'Not Active'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </StyledPaper>
  );
};

export default OutletDetails;
