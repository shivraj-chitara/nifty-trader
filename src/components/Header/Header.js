import React, { useEffect, useRef, useState } from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Flex,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import StarIcon from "../../icons/StarIcon";
import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { getAllStocks } from "../../lib/api/stockApi";
import { getFilteredStock } from "../../lib/utils";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleMenuOpen = () => setIsOpen(true);
  const handleMenuClose = () => setIsOpen(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const boxRef = useRef(null);
  const [stocks, setStocks] = useState();
  const [filteredStocks, setFilteredStocks] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    const filtered = getFilteredStock(stocks, e.target.value, 4);
    setFilteredStocks(filtered);
  };

  const handleSearchClose = (event) => {
    if (boxRef && !boxRef?.current?.contains(event?.target)) {
      setIsSearchOpen(false);
      setSearchValue("");
    }
  };

  useEffect(async () => {
    const { data, error } = await getAllStocks();
    if (!error) {
      setStocks(data?.resultData);
      const filtered = getFilteredStock(data?.resultData, "", 4);
      setFilteredStocks(filtered);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleSearchClose, true);
    return () => {
      document.removeEventListener("click", handleSearchClose, true);
    };
  }, []);

  return (
    <Box width="100%" boxShadow="md" py="3">
      <Flex
        width={{ base: "90%", lg: "70%" }}
        margin="auto"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center">
          <Box pr={{ lg: "5" }} width="40">
            <Image src="/img/header-logo.jpg" />
          </Box>
          <Box width="5" mr="5" display={{ base: "none", lg: "block" }}>
            <Image src="/img/9dot.png" />
          </Box>
          <HStack
            spacing="5"
            fontWeight="light"
            fontSize="sm"
            display={{ base: "none", lg: "block" }}
          >
            <Link>Options</Link>
            <Link>SGX Nifty</Link>
            <Link>Analytics</Link>
            <Link>Resources</Link>
            <Link>News</Link>
          </HStack>
          <Box
            mx="3"
            position="relative"
            width="60"
            boxShadow="md"
            display={{ base: "none", lg: "block" }}
            borderRadius="md"
            ref={boxRef}
          >
            <InputGroup overflow="hidden">
              <Input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchChange}
                onClick={() => setIsSearchOpen(true)}
              />
              <InputRightElement
                pointerEvents="cursor"
                children={<Search2Icon color="gray.300" />}
              />
            </InputGroup>
            {isSearchOpen && (
              <Box
                position="absolute"
                top="10"
                bg="white"
                width="full"
                boxShadow="md"
                borderBottomRadius="md"
                overflow="hidden"
              >
                {filteredStocks.length > 0 &&
                  filteredStocks.map((stock, index) => {
                    return (
                      <Text
                        _hover={{ bg: "blue.50" }}
                        lineHeight="8"
                        px="3"
                        key={index}
                      >
                        {stock.symbol_name}
                      </Text>
                    );
                  })}
              </Box>
            )}
          </Box>
        </Flex>
        <HStack
          spacing="8"
          align="center"
          display={{ base: "none", lg: "flex" }}
        >
          <HStack spacing="5" fontSize="sm">
            <Link color="blue.500" fontWeight="light" colorScheme="none">
              Login
            </Link>
            <Button
              colorScheme="blue"
              fontWeight="normal"
              size="sm"
              fontSize="sm"
              borderRadius="base"
            >
              Sign Up
            </Button>
          </HStack>
          <Box borderLeft="2px" height="4" borderColor="gray.400" pr="2"></Box>
          <Center>
            <StarIcon color="blue.500" />
          </Center>
        </HStack>

        {/* for mobile */}
        <Box display={{ lg: "none", base: "block" }} onClick={handleMenuOpen}>
          <HamburgerIcon boxSize={6} />
        </Box>

        {isOpen && (
          <VStack
            display={{ lg: "none", base: "flex" }}
            direction="column"
            position="fixed"
            top="0"
            right="0"
            bg="white"
            width="70%"
            height="100vh"
            // justifyContent="space-evenly"
            zIndex="20"
            spacing="10"
            pt="8"
          >
            <CloseIcon onClick={handleMenuClose} />
            <Link>Options</Link>
            <Link>SGX Nifty</Link>
            <Link>Analytics</Link>
            <Link>Resources</Link>
            <Link>News</Link>
            <Link>Money</Link>
            <Link color="blue.500" fontWeight="light" colorScheme="none">
              Login
            </Link>
            <Button
              colorScheme="blue"
              fontWeight="normal"
              size="sm"
              fontSize="sm"
              borderRadius="base"
            >
              Sign Up
            </Button>
          </VStack>
        )}
      </Flex>
    </Box>
  );
}

export default Header;
