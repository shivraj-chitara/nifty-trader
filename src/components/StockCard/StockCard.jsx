import React from "react";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";

function StockCard(props) {
  return (
    <Stack py="3" px="5">
      <HStack>
        <Text fontSize="15px" fontWeight="500" color="#343434">
          SGX Nifty
        </Text>
        <HStack color="#26BD73" fontSize="14px">
          <Text>+18.00</Text>
          <Text>(+0.20%)</Text>
        </HStack>
      </HStack>
      <Flex>
        <HStack>
          <Image src="/img/uparrow.png" />
          <Text fontSize="25px" fontWeight="500" color="#343434">
            9184.00
          </Text>
        </HStack>
        <Spacer />
        <HStack fontSize="13px" spacing="10">
          <Box>
            <Text color="#343434">Low</Text>
            <Text color="red">8912.40</Text>
          </Box>
          <Box>
            <Text color="#343434">HIgh</Text>
            <Text color="green">8912.40</Text>
          </Box>
        </HStack>
      </Flex>
    </Stack>
  );
}

export default StockCard;
