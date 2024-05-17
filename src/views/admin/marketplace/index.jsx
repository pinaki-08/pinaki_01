
import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";


// Custom components
import Banner from "views/admin/marketplace/components/Banner";
// import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";
import createGlobe from 'cobe'


// Assets
import Nft1 from "assets/img/nfts/Nft1.avif";
import Nft2 from "assets/img/nfts/Nft2.avif";
import Nft3 from "assets/img/nfts/Nft3.jpg";
import Nft4 from "assets/img/nfts/Nft4.jpg";
// import Nft5 from "assets/img/nfts/Nft5.png";
// import Nft6 from "assets/img/nfts/Nft6.png";
// import Avatar1 from "assets/img/avatars/avatar1.png";
// import Avatar2 from "assets/img/avatars/avatar2.png";
// import Avatar3 from "assets/img/avatars/avatar3.png";
// import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import { FaHeart } from "react-icons/fa";
import { MdAccessibilityNew } from "react-icons/md";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "4/ 4 / 4 / 4", "2xl": "2 / 2 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
               You Matter!
              </Text>
              <Flex
                align='center'
                me='20px'
                ms={{ base: "24px", md: "0px" }}
                mt={{ base: "20px", md: "0px" }}>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#Heart' >
                    
                  Heart
                  {/* <Icon
                      as={FaHeart}
                      me="12px"
                      h="15px"
                      w="16px"
                      color="red"
                      ml="1px"
                    /> */}
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='# Body Measurments'>
                  Body Measurments
                  
                    
                </Link>
                <Link
                  color={textColorBrand}
                  fontWeight='500'
                  me={{ base: "34px", md: "44px" }}
                  to='#Medications'>
                  Medications
                </Link>
                <Link color={textColorBrand} fontWeight='500' to='#sports'>
                  Sports
                </Link>
              </Flex>
            </Flex>
            <SimpleGrid columns={{ base: 4, md: 4}} gap='20px'>
               <NFT
                name='Exercise is Medicine'
                author='By Azusa'
                
                // bidders={[
                //   Avatar1,
                //   Avatar2,
                //   Avatar3,
                //   Avatar4,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                // ]}
                image={Nft1}
               
                download='#/article/article/Exercise'
              /> 
            
              <NFT
                name='Sleep is Medicine'
                author='By Azusa'
                // bidders={[
                //   Avatar1,
                //   Avatar2,
                //   Avatar3,
                //   Avatar4,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                // ]}
                image={Nft2}
         
                download='#/article/article/Sleep'
              /> 

              
              <NFT
                name='Love is Medicine '
                author='By Azusa'
                // bidders={[
                //   Avatar1,
                //   Avatar2,
                //   Avatar3,
                //   Avatar4,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                // ]}
                image={Nft3}
               
                download='#/article/article/Love'
              />

              <NFT

              // columns={{ base: 1, md: 3 }}
              // gap='20px'
              // mb={{ base: "20px", xl: "0px" }}>

                name='Food is Medicine'
                author='By Azusa'
                // bidders={[
                //   Avatar1,
                //   Avatar2,
                //   Avatar3,
                //   Avatar4,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                // ]}
                image={Nft4}
              
                download='#/article/article/Food'
              />

              
            </SimpleGrid>
            
            {/* <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              <NFT
                name='Food is Medicine'
                author='By Azusa'
                // bidders={[
                //   Avatar1,
                //   Avatar2,
                //   Avatar3,
                //   Avatar4,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                //   Avatar1,
                // ]}
                image={Nft4}
                currentbid='0.91 ETH'
                download='#'
              /> */}
              {/* <NFT
                name='Colorful Heaven'
                author='By Mark Benjamin'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft5}
                currentbid='0.91 ETH'
                download='#'
              /> */}
              {/* <NFT
                name='3D Cubes Art'
                author='By Manny Gates'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft6}
                currentbid='0.91 ETH'
                download='#'
              /> */}
            {/* </SimpleGrid>*/}
          </Flex>
        </Flex> 
        {/* <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>  */}
          {/* <Card p='0px'> 
             <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'> 
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                History
              </Text>
              <Button variant='action'>See all</Button> 
            </Flex>  */}

            {/* <HistoryItem
              name='Colorful Heaven'
              author='By Mark Benjamin'
              date='30s ago'
              image={Nft5}
              price='0.91 ETH'
            /> */}
            {/* <HistoryItem
              name='Abstract Colors'
              author='By Esthera Jackson'
              date='58s ago'
              image={Nft1}
              price='0.91 ETH'
            />
            <HistoryItem
              name='ETH AI Brain'
              author='By Nick Wilson'
              date='1m ago'
              image={Nft2}
              price='0.91 ETH'
            />
            <HistoryItem
              name='Swipe Circles'
              author='By Peter Will'
              date='1m ago'
              image={Nft4}
              price='0.91 ETH'
            />
            <HistoryItem
              name='Mesh Gradients '
              author='By Will Smith'
              date='2m ago'
              image={Nft3}
              price='0.91 ETH'
            /> */}
            {/* <HistoryItem
              name='3D Cubes Art'
              author='By Manny Gates'
              date='3m ago'
              image={Nft6}
              price='0.91 ETH'
            />  */}
           {/* </Card>  */}
        {/* </Flex> */}
      </Grid> 
      {/* Delete Product */}
    </Box>
  );
} // Add closing parenthesis here
