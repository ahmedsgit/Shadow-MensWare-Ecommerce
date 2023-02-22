import { Box, Stack } from "@pankod/refine-mui";
import { PieChart, PropertyReferrals, Title, TotalRevenue } from "components";

const Home = () => {
  return (
    <Box>
      <Title title="Admin Dashboard" />
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
