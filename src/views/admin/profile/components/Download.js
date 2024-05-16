import {
  Button,
  Flex,
  Input,
  Link,
  useColorModeValue,
  Box,
  Text,
} from "@chakra-ui/react";
// Assets
import React from "react";
import Resume from "assets/pdfs/Resume.pdf";
import banner from "assets/img/nfts/NftBanner1.jpeg";
import { useDropzone } from "react-dropzone";
import { MdDownhillSkiing, MdDownload, MdUpload } from "react-icons/md";
import { Icon } from "@chakra-ui/react";

function Download(props) {
  const { content, ...rest } = props;
  // const { getRootProps, getInputProps } = useDropzone();
  const bg = useColorModeValue("gray.100", "navy.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  const brandColor = useColorModeValue("brand.500", "white");
  return (
    <Flex
      align="center"
      justify="center"
      bg={bg}
      border="1px dashed"
      borderColor={borderColor}
      borderRadius="16px"
      w="100%"
      h="max-content"
      minH="80%"
      cursor="pointer"
      className="dropzone"
      {...rest}
    >
      <Box>
        <Link href={Resume} target="_blank">
          <Icon as={MdDownload} w="80px" h="80px" color={brandColor} />
        </Link>
        <Flex justify="center" mx="auto" mb="12px">
          <Text fontSize="xl" fontWeight="700" color={brandColor}>
            Download Resume
          </Text>
        </Flex>
      </Box>
      {/* <Box>
              
              
                <Link href={Resume} target="_blank">
                  <Icon as={MdDownload} w="80px" h="80px" color={brandColor} />
                </Link>
                <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Download Resume
                </Text> */}
      <Button variant="no-effects">{content}</Button>
    </Flex>
  );
}

export default Download;
