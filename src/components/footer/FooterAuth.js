/*eslint-disable*/
import React from "react";
import {
  Flex,
  Icon,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  let textColor = useColorModeValue("gray.400", "white");
  let linkColor = useColorModeValue({ base: "gray.400", lg: "white" }, "white");
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "0px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", lg: "0px" }}
      >
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text as="span" fontWeight="500" ms="4px">
          Made with love
          <Icon
            as={FaHeart}
            me="12px"
            h="15px"
            w="16px"
            color="red"
            ml="10px"
          />
          {/* <Link
            mx='3px'
            color={textColor}
            '
            target='_blank'
            fontWeight='700'>
            Simmmple!
          </Link> */}
        </Text>
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          {/* <Link
            fontWeight="500"
            color={linkColor}
            href="mailto:hello@simmmple.com?ref=horizon-chakra-free"
          >
            Support
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://www.simmmple.com/licenses?ref=horizon-chakra-free"
          >
            License
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://simmmple.com/terms-of-service?ref=horizon-chakra-free"
          >
            Terms of Use
          </Link>
        </ListItem>
        <ListItem>
          <Link
            fontWeight="500"
            color={linkColor}
            href="https://www.blog.simmmple.com/?ref=horizon-chakra-free"
          >
            Blog
          </Link> */}
        </ListItem>
      </List>
    </Flex>
  );
}
