

import React from "react";

 import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Icon,
 } from "@chakra-ui/react";
import Travel from "views/admin/Travel/compnents/Travel";
import Pop from "views/admin/Travel/compnents/Pop";


import Card from "components/card/Card.js";
import BasicUsage from "./compnents/Pop";
import Carousel from "./compnents/Caraousel";
import { travelData } from "./variables/data";


 export default function Explore() {

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  
  
return (
<Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
  {/* <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
             Let's Explore!
           </Text> */}
        <Grid
          mb="50px"
          gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
          gap={{ base: "20px", xl: "20px" }}
          display={{ base: "block", xl: "grid" }}
         
       >
         <Flex
           mt="45px"
           mb="20px"
           ml="80px"
           mr="-350px"
           justifyContent="center"
           width="100%"
           direction={{ base: "row", md: "row" }}
           align={{ base: "start", md: "center" }}
         >
          <SimpleGrid columns={{ base: 2, md: 2 }} gap="100px" width="1200px">
           { travelData.map((value,index)=>{
            return(
              <Pop data={value} key={index}></Pop>
            )
           })
           }

           
            
           {/* <Travel name="jsmm" />
           <BasicUsage/> */}
         </SimpleGrid>
           
           
         </Flex>
         
         
       </Grid>
     </Box>
   );
 } 



