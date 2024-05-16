// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import React from "react";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  // SIDEBAR
  return (
    <Flex
      direction="column"
      height="100%"
      pt="15px"
      px="16px"
      borderRadius="30px"
    >
      <Brand />
      <Stack direction="column" mb="auto" mt="100px">
        <Box ps="10px" pe={{ md: "20px", "1xl": "2px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box mt="40px" mb="20px" borderRadius="30px">
        <SidebarCard />
      </Box>
    </Flex>
  );
}

export default SidebarContent;
