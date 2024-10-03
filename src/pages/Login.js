import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  CircularProgress,
  InputAdornment, 
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  Stack
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import { apiEndpoints } from "../services/apiEndpoints";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const Logo = styled(Typography)`
  color: #e91e63;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LoginButton = styled(Button)`
  && {
    background-color: #e91e63;
    color: white;
    &:hover {
      background-color: #c2185b;
    }
  }
`;

const Login = () => {

  // const [loginMethod, setLoginMethod] = useState('password');
  // const [showPassword, setShowPassword] = useState(false);
  // const [mobileNumber, setMobileNumber] = useState('');
  // const [password, setPassword] = useState('');

  // const handleLoginMethodChange = (event, newMethod) => {
  //   if (newMethod !== null) {
  //     setLoginMethod(newMethod);
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle login logic here
  // };


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post(apiEndpoints.getToken, {
        username,
        password,
      });
      api.defaults.headers.common[
        "Authorization"
      ] = `Token ${response.data.token}`;
      await login(response.data.token);
      navigate("/");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        SpicyWagon Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Mobile Number"
          name="username"
          autoComplete="tel"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Sign In"}
        </Button>
      </Box>
    </StyledContainer>

    // <StyledContainer>
    // <PageContainer
    //   direction="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   spacing={2}
    // >
    //   <Logo variant="h4">SpicyWagon</Logo>
    //   <Typography variant="h5">Restaurant Dashboard</Typography>
    //   <Typography variant="subtitle1">Increase your online orders.</Typography>
      
    //   <StyledForm onSubmit={handleSubmit}>
    //     <Stack spacing={2}>
    //       <ToggleButtonGroup
    //         value={loginMethod}
    //         exclusive
    //         onChange={handleLoginMethodChange}
    //         aria-label="login method"
    //         fullWidth
    //       >
    //         <ToggleButton value="password" aria-label="password login">
    //           Password Login
    //         </ToggleButton>
    //         <ToggleButton value="otp" aria-label="otp login">
    //           Login using OTP
    //         </ToggleButton>
    //       </ToggleButtonGroup>

    //       <TextField
    //         label="Registered Mobile Number"
    //         placeholder="Enter your 10 digit mobile number"
    //         fullWidth
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />

    //       {loginMethod === 'password' && (
    //         <TextField
    //           label="Password"
    //           type={showPassword ? 'text' : 'password'}
    //           fullWidth
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           InputProps={{
    //             endAdornment: (
    //               <InputAdornment position="end">
    //                 <IconButton
    //                   aria-label="toggle password visibility"
    //                   onClick={() => setShowPassword(!showPassword)}
    //                   edge="end"
    //                 >
    //                   {showPassword ? <VisibilityOff /> : <Visibility />}
    //                 </IconButton>
    //               </InputAdornment>
    //             ),
    //           }}
    //         />
    //       )}

    //       <LoginButton variant="contained" fullWidth type="submit">
    //         Login
    //       </LoginButton>
    //     </Stack>
    //   </StyledForm>

    //   <Typography variant="body2">
    //     New to the Platform?{' '}
    //     <Typography
    //       component="a"
    //       href="#register"
    //       color="error.main"
    //       sx={{ textDecoration: 'none' }}
    //     >
    //       Register as a Vendor
    //     </Typography>
    //   </Typography>
    // </PageContainer>
    // </StyledContainer>
  );
};

export default Login;
