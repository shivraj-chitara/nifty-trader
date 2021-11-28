import React, { Fragment } from "react";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";

function StockCard({
  name,
  value,
  lowValue,
  highValue,
  isUp,
  valueGain,
  valueGainPercentage,
  options,
  autoRefresh,
}) {
  return (
    <Box
      borderRadius="md"
      boxShadow="-1px 3px 27px 4px rgba(0,0,0,0.15);-webkit-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);-moz-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);"
    >
      <Stack py="3" px="5" width="100%">
        <HStack>
          <Text fontSize="15px" fontWeight="500" color="#343434">
            {name}
          </Text>
          <HStack color={isUp ? `#26BD73` : "red"} fontSize="14px">
            <Text>{valueGain}</Text>
            <Text>({valueGainPercentage})</Text>
          </HStack>
        </HStack>
        <Flex flexWrap="wrap">
          <HStack>
            <Image src={isUp ? `/img/uparrow.png` : `img/downarrow.png`} />
            <Text fontSize="25px" fontWeight="500" color="#343434">
              {value}
            </Text>
          </HStack>
          <Spacer />
          <HStack fontSize="13px" spacing="10">
            <Box>
              <Text color="#343434">Low</Text>
              <Text color="red">{lowValue}</Text>
            </Box>
            <Box>
              <Text color="#343434">High</Text>
              <Text color="green">{highValue}</Text>
            </Box>
          </HStack>
        </Flex>
      </Stack>
      {/* card footer  */}
      <Flex
        // justifyContent={options.length > 3 && "space-between"}
        borderTop="1px"
        borderColor="gray.100"
        px="5"
        py="2"
        fontWeight="500"
        color="#666666"
        fontSize="13px"
        align="center"
        flexWrap="wrap"
      >
        {autoRefresh && (
          <Box display="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
            <Link
              px="2"
              _hover={{
                bg: "#2196F3",
                borderRadius: "xl",
                color: "white",
              }}
            >
              Auto Refresh
            </Link>
          </Box>
        )}
        {options.map((option, index) => (
          <Fragment key={index}>
            <Link
              mx="1"
              px="2"
              py="0.5"
              borderRadius="xl"
              _hover={{
                bg: "#2196F3",
                color: "white",
              }}
            >
              {option}
            </Link>
            {options[index + 1] && "|"}
          </Fragment>
        ))}
      </Flex>
    </Box>
  );
}

export default StockCard;
