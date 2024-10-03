import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 150px;
`;

const CardContentWrapper = styled(CardContent)`
  display: flex;
  align-items: center;
  padding: 16px !important;
`;

const IconWrapper = styled.div`
  color: #E4002B;
  background-color: #fce4ec;
  border-radius: 8px;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Count = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #333333;
`;

const OrderLabel = styled(Typography)`
  font-size: 14px;
  color: #757575;
  text-transform: uppercase;
`;

const DashboardCard = ({ icon, count, label }) => {
  return (
    <StyledCard>
      <CardContentWrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <TextWrapper>
          <Count variant="h4" component="div">
            {count}
          </Count>
          <OrderLabel variant="subtitle2">{label}</OrderLabel>
        </TextWrapper>
      </CardContentWrapper>
    </StyledCard>
  );
};

export default DashboardCard;
