// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Progress,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
// import Menu from "components/menu/MainMenu";
import React from "react";
// Assets
// import { MdOutlineCloudDone } from "react-icons/md";

// export default function Banner(props) {
//   const { used, total } = props;
//   // Chakra Color Mode
//   const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
//   const brandColor = useColorModeValue("brand.500", "white");
//   const textColorSecondary = "gray.400";
//   const box = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
// import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components

import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import { VSeparator } from "components/separator/Separator";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import CheckTable from "views/admin/default/components/CheckTable";

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", lg: "10px" }} align="center">
      {/* <Flex w="100%" h="100%" flexDirection="column" mt="50px"> */}
      <PieChart
        h="100%"
        w="100%"
        chartData={pieChartData}
        chartOptions={pieChartOptions}
      />
      {/* <Flex> */}
      <Text
        color={textColor}
        fontSize="xl"
        fontWeight="600"
        mt="-10px"
        align="center"
        ml="15px"
        mb="10px"
      >
        My Skills
      </Text>
      {/* </Flex>
      </Flex> */}
      <div>
        <Text
          color={"white"}
          fontSize="lg"
          fontWeight="600"
          ml="10px"
          align="center"
          width="200px"
          backgroundColor={"#47898f"}
        >
          JavaScript
        </Text>
        <Text
          color={"white"}
          fontSize="lg"
          fontWeight="600"
          ml="10px"
          align="center"
          width="200px"
          backgroundColor={"#b76196"}
        >
          HTML
        </Text>
        <Text
          color={"white"}
          fontSize="lg"
          fontWeight="600"
          ml="10px"
          align="center"
          width="200px"
          backgroundColor={"#79505b"}
        >
          C
        </Text>
        <Text
          color={"white"}
          fontSize="lg"
          fontWeight="600"
          ml="10px"
          align="center"
          width="200px"
          backgroundColor={"#8f92c9"}
        >
          Python
        </Text>
        <Text
          color={"white"}
          fontSize="lg"
          fontWeight="600"
          ml="10px"
          width="200px"
          // padding="20px 0px"
          align="center"
          backgroundColor="rgb(222, 123, 153)"
        >
          React
        </Text>
      </div>

      {/* <Flex w="100%"></Flex> */}

      {/* <Menu ms='auto' />
      </Flex>
      <IconBox
        mx='auto'
        h='100px'
        w='100px'
        icon={
          <Icon as={MdOutlineCloudDone} color={brandColor} h='46px' w='46px' />
        }
        bg={box}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px'>
        Your storage
      </Text>
      <Text
        color={textColorSecondary}
        fontSize='md'
        maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
        mx='auto'>
        Supervise your drive space in the easiest way
      </Text>
      <Box w='100%' mt='auto'>
        <Flex w='100%' justify='space-between' mb='10px'>
          <Text color={textColorSecondary} fontSize='sm' maxW='40%'>
            {used} GB
          </Text>
          <Text color={textColorSecondary} fontSize='sm' maxW='40%'>
            {total} GB
          </Text>
        </Flex>
        <Progress
          align='start'
          colorScheme='brandScheme'
          value={(used / total) * 100}
          w='100%'
        />
      </Box> */}
    </Card>
  );
}
