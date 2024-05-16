import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

// Custom components
import Card from "components/card/Card.js";
import Menu from "components/menu/MainMenu";
import IconBox from "components/icons/IconBox";

// Assets
import { MdCheckBox, MdDragIndicator } from "react-icons/md";
import { SearchBar } from "components/navbar/searchBar/SearchBar";
export default function Todo(props) {
  const { ...rest } = props;
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  return (
    <div>
      <Card p="30px" align="center" direction="column" w="100%" {...rest}>
        <Flex alignItems="center" w="100%" mb="30px">
          <IconBox
            me="12px"
            w="38px"
            h="38px"
            bg={boxBg}
            icon={<Icon as={MdCheckBox} color={brandColor} w="24px" h="24px" />}
          />

          <Text color={textColor} fontSize="lg" fontWeight="700">
            {props.pinkaiType}
          </Text>
          <Menu ms="auto" />
        </Flex>
        <Box px="20px">
          <Flex mb="20px">
            {/* <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo"
            /> */}
            <Input
              className="pinaki"
              me="10px"
              borderRadius="30px"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Button ml="10px" textColor="white" bg="#8d6fae" onClick={addTodo}>
              Add
            </Button>
          </Flex>
          {todos.map((todo, index) => {
            return (
              <Flex mb="20px" key={index}>
                <Checkbox me="16px" colorScheme="brandScheme" />
                <Text
                  fontWeight="bold"
                  color={textColor}
                  fontSize="md"
                  textAlign="start"
                >
                  {todo}
                  <Button
                    ml="10px"
                    textColor="white"
                    bg="#9a89ac"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </Button>
                </Text>
              </Flex>
            );
          })}
          {/* <Icon
              ms="auto"
              as={MdDragIndicator}
              color="secondaryGray.600"
              w="24px"
              h="24px"
            /> */}
        </Box>
      </Card>
    </div>
  );
}
