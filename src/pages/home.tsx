import { Box, Stack, Typography } from "@pankod/refine-mui";
import { PieChart, PropertyReferrals, TotalRevenue } from "components";

const Home = () => {
  return (
    <Box>
      <Typography
        fontSize={25}
        fontWeight={700}
        color="#808191"
        letterSpacing={2}
      >
        Admin Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          series={[75, 25]}
          colors={["#275be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for cities"
          value={555}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack
        gap={4}
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default Home;
