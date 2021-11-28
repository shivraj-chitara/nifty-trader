import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, HStack, Link } from "@chakra-ui/layout";
import StarIcon from "../../icons/StarIcon";

function Header() {
  // Header
  return (
    <Box width="100%" boxShadow="md" py="3">
      <Flex
        width="70%"
        margin="auto"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center">
          <Box pr="5" width="40">
            <Image src="/img/header-logo.jpg" />
          </Box>
          <Box width="5" mr="5">
            <Image src="/img/9dot.png" />
          </Box>
          <HStack spacing="5" fontWeight="light" fontSize="sm">
            <Link>Options</Link>
            <Link>SGX Nifty</Link>
            <Link>Analytics</Link>
            <Link>Resources</Link>
            <Link>News</Link>
            <Link>Money</Link>
          </HStack>
        </Flex>
        <HStack spacing="8" align="center">
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
      </Flex>
    </Box>
  );
}

export default Header;
