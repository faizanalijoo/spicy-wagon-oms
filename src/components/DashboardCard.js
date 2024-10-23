import React from "react";
import { Stack, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import IconContainer from "./IconContainer";

const DashboardCard = (props) => {
  const { count, label } = props;
  return (
    <CustomCard sx={{ p: 1.5 }}>
      <Stack direction="row" alignItems="center" gap={1}>
        <IconContainer size={42} icon={<props.icon size={22} />} />
        <Stack>
          <Typography variant="h3">{count}</Typography>
          <Typography variant="subtitle2" fontSize={10}>
            {label}
          </Typography>
        </Stack>
      </Stack>
    </CustomCard>
  );
};

export default DashboardCard;
