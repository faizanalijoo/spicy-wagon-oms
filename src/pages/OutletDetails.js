import React from 'react';
import { 
  Typography, 
  Paper, 
  Grid, 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';

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

const InfoItem = ({ label, value }) => (
  <Box mb={2}>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Box>
);

const OutletDetails = () => {
  // This would typically come from an API or props
  const outletData = {
    outletName: 'Deepak Dhaba',
    outletId: '265',
    id: '134',
    companyName: 'Deepak Dhaba',
    deliveredBy: 'Vendor',
    deliveryCost: '₹ 0.00',
    fsaiNumber: '19824567981094',
    fsaiValidUpto: '2024-10-17',
    gstNumber: '09AARCA6144P1ZV',
    minimumOrderAmount: '₹ 140.00',
    status: 'ACTIVE',
    address: 'Vinayak Complex, Station Road',
    city: 'Patna',
    stationCode: 'PNBE',
    email: 'deepakdhaba@gmail.com',
    mobileNumber: '9876467236',
    state: 'Bihar',
    latitude: 'N/A',
    longitude: 'N/A',
    orderTiming: '50',
    openingTime: '07:00:00',
    closingTime: '23:00:00',
    details: 'N/A',
    prepaid: 'N/A',
    featured: 'NO',
    numberOfRatings: '128',
    averageRatings: '4.6',
    vendors: [
      { user: '9846723896', status: 'Active' },
      { user: '8646921690', status: 'Not Active' },
    ],
  };

  return (
    <StyledPaper>
      <Typography variant="h5" gutterBottom>Outlet Details</Typography>

      <Box mb={4}>
        <SectionTitle>
          <DescriptionIcon />
          Basic Information
        </SectionTitle>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <InfoItem label="OUTLET NAME" value={outletData.outletName} />
            <InfoItem label="COMPANY NAME" value={outletData.companyName} />
            <InfoItem label="FSAI NUMBER" value={outletData.fsaiNumber} />
            <InfoItem label="MINIMUM ORDER AMOUNT" value={outletData.minimumOrderAmount} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="OUTLET ID" value={outletData.outletId} />
            <InfoItem label="DELIVERED BY" value={outletData.deliveredBy} />
            <InfoItem label="FSAI VALID UPTO" value={outletData.fsaiValidUpto} />
            <InfoItem label="STATUS" value={outletData.status} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="ID" value={outletData.id} />
            <InfoItem label="DELIVERY COST" value={outletData.deliveryCost} />
            <InfoItem label="GST NUMBER" value={outletData.gstNumber} />
          </Grid>
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
            <InfoItem label="MOBILE NUMBER" value={outletData.mobileNumber} />
            <InfoItem label="LONGITUDE" value={outletData.longitude} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="STATION CODE" value={outletData.stationCode} />
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
            <InfoItem label="ORDER TIMING" value={outletData.orderTiming} />
            <InfoItem label="DETAILS" value={outletData.details} />
            <InfoItem label="NUMBER OF RATINGS" value={outletData.numberOfRatings} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="OPENING TIME" value={outletData.openingTime} />
            <InfoItem label="PREPAID" value={outletData.prepaid} />
            <InfoItem label="AVERAGE RATINGS" value={outletData.averageRatings} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoItem label="CLOSING TIME" value={outletData.closingTime} />
            <InfoItem label="FEATURED" value={outletData.featured} />
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
                <TableCell>User</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {outletData.vendors.map((vendor, index) => (
                <TableRow key={index}>
                  <TableCell>{vendor.user}</TableCell>
                  <TableCell>{vendor.status}</TableCell>
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
