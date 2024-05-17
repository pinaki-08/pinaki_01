// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdDownhillSkiing, MdDownload, MdUpload } from "react-icons/md";
import Download from "views/admin/profile/components/Download";

export default function Upload(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card {...rest} mb="20px" align="center" p="20px">
      <Flex h="100%" direction={{ base: "column", "2xl": "row" }}>
        <Download
          w={{ base: "100%", "2xl": "268px" }}
          me="36px"
          maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          minH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          // content={
          //   <Box>
          //     <Icon as={MdDownload} w="80px" h="80px" color={brandColor} />
          //     <Flex justify="center" mx="auto" mb="12px">
          //       <Text fontSize="xl" fontWeight="700" color={brandColor}>
          //         Download Resume
          //       </Text>
          //     </Flex>
          //   </Box>
          // }
        />
        <Flex direction="column" pe="44px">
          <Text
            color={textColorPrimary}
            fontWeight="bold"
            textAlign="start"
            fontSize="2xl"
            mt={{ base: "20px", "2xl": "50px" }}
          >
            Complete my profile
          </Text>
          <Text
            color={textColorSecondary}
            fontSize="md"
            my={{ base: "auto", "2xl": "10px" }}
            mx="auto"
            ml="5px"
            textAlign="initial"
          >
            Keep skills up to date!
          </Text>
          <Flex w="100%">
            <Button
              me="100%"
              mb="50px"
              w="140px"
              minW="140px"
              mt={{ base: "20px", "2xl": "auto" }}
              variant="brand"
              fontWeight="500"
            >
              Edit now
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
