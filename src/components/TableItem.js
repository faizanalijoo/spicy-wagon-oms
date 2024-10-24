import { Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function TableItem(props) {
  const { label, value, color, size, Icon, iconColor, sx, onClick } = props;
  return (
    <Stack sx={{ ...sx }}>
      <Stack direction="row" alignItems="center" gap={0.5}>
        {Icon && (
          <Icon
            style={{ marginBottom: 2 }}
            color={iconColor || "7A7A7A"}
            size={10}
          />
        )}
        <Typography
          sx={{
            "& .MuiTypography-root": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          }}
          variant="subtitle2"
          fontSize={9}
          color="#7A7A7A"
          fontWeight={300}
          textTransform="uppercase"
        >
          {label || "--"}
        </Typography>
      </Stack>
      {typeof onClick == "function" ? (
        <Link
          width="fit-content"
          onClick={onClick}
          color={color || "#3E3E3E"}
          fontSize={size == "large" ? 15 : 13}
        >
          {value || "--"}
        </Link>
      ) : (
        <Typography
          sx={{
            "& .MuiTypography-root": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          }}
          variant="subtitle2"
          fontSize={size == "large" ? 15 : 13}
          fontWeight={500}
          color={color || "#3E3E3E"}
        >
          {value || "--"}
        </Typography>
      )}
    </Stack>
  );
}
