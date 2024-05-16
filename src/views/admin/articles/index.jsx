import React from "react";
import { useLocation } from "react-router-dom";
import { articleData } from "./variables/data";
import { Text,Card, useColorModeValue, Flex } from "@chakra-ui/react";

export default function (props) {
  var location = useLocation()
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "brand.500";
  const textColor = useColorModeValue("secondaryGray.900", "white");
  console.log(location.pathname.split('/'));
  var current = location.pathname.split('/')[3]
  var page = articleData.filter((val) => val.title == current)

  return (
    <div>
      <Text
      color={textColorPrimary}
      fontWeight="bold"
      fontSize="50px"
      mt="10px"
      mb="50px"> 
      
      {page[0].head}
      
      
      </Text>
      <Card direction="column" width="100%" px="0px" color={textColorSecondary}  mr="-100">
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="20px"
          fontWeight="500"
          lineHeight="100%"
          mt="50"
          mb="30"
          mr="50"
          ml="50"
        >
         {page[0].body}
         </Text>
         </Flex>
         </Card>
    
    </div>
  );
}
