import { React } from "react";
import {
  Image,
  Stack,
  Text,
  CardBody,
  Divider,
  Heading,
  ButtonGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Card,
  CardFooter,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Carousel from "./Caraousel";

export default function BasicUsage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md"> {props.data.title}</Heading>
          <Text>{props.data.body}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={onOpen}></Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>test</ModalBody>

              <ModalFooter>
                <Carousel images={props.data.imageList}></Carousel>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
