import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Stack,
  Card,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import api from "../../services/api";
import { apiEndpoints } from "../../services/apiEndpoints";
import redLogo from "../../images/redLogo.png";
import LabelledInput from "../../components/LabelledInput";
import { AppColors } from "../../utils/AppColors";

const Login = () => {
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
    <Stack
      height="100vh"
      width="100vw"
      sx={{ background: AppColors.GRADIENT_TOP_BOTTOM }}
      alignItems="center"
      justifyContent="center"
    >
      <Card sx={{ width: { xs: "90%", md: 512 }, p: 5, py: 7 }}>
        <Stack width="100%" alignItems="center" justifyContent="center" gap={3}>
          <Stack alignItems="center" justifyContent="center">
            <img
              src={redLogo}
              style={{ height: 24, objectFit: "contain", marginBottom: 18 }}
              alt="logo"
            />
            <Typography textAlign="center" variant="h3" fontSize={24}>
              Restaurant Dashboard
            </Typography>
            <Typography textAlign="center" variant="subtitle2">
              Increase your online orders.
            </Typography>
          </Stack>

          <Stack width="100%" gap={2}>
            <LabelledInput label="Registered Mobile Number">
              <TextField
                placeholder="Enter your 10 digit mobile number"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </LabelledInput>

            <LabelledInput label="Password">
              <TextField
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </LabelledInput>
          </Stack>
          <Button
            onClick={handleSubmit}
            size="large"
            type="submit"
            fullWidth
            variant="contained"
          >
            {loading ? (
              <CircularProgress sx={{ color: AppColors.WHITE }} size={18} />
            ) : (
              "Login"
            )}
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Login;
