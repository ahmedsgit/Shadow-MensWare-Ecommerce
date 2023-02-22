import { Add } from "@mui/icons-material";
import { Box, Stack } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { CustomButton, Title } from "components";
import React from "react";

const AllProperties = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Title title="All Properties" />
        <CustomButton
          title="Add property"
          handleClick={() => navigate("/properties/create")}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
    </Box>
  );
};

export default AllProperties;
