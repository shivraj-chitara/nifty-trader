import { Image } from "@chakra-ui/image";
import { Box, Center, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import StarIcon from "../../icons/StarIcon";

function StockWatchlist({
  name,
  volume,
  value,
  isUp,
  valueGain,
  valueGainPercentage,
}) {
  return (
    <Box
      borderRadius="3xl"
      boxShadow="-1px 3px 27px 4px rgba(0,0,0,0.15);-webkit-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);-moz-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);"
      width="220px"
      overflow="hidden"
      pos="relative"
      my="5"
    >
      <Flex flexDirection="column" justifyContent="center" p="5" bg="white">
        <Flex fontSize="base" fontWeight="600" align="center">
          <Text>{name}</Text>
          <Spacer />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Flex>
        <Text fontSize="sm" fontWeight="400" color="gray">
          24th Vol. {volume}
        </Text>
        <Text fontSize="26px" fontWeight="700">
          {value}
        </Text>
        <HStack
          backgroundColor={
            isUp ? "rgba(0, 255, 0, 0.25)" : "rgba(255, 0,0,0.25)"
          }
          width="150px"
          p="2"
          fontSize="13px"
          fontWeight="700"
          color={isUp ? "green" : "red"}
        >
          <Image
            src={isUp ? "/img/uptriangle.svg" : "/img/downtriangle.png"}
            width="10px"
            marginRight="4px"
          />
          <Text>
            {valueGain} ({valueGainPercentage})
          </Text>
        </HStack>
      </Flex>
      <Center>
        <Image src="/img/graphimg.svg" boxSize="full" zIndex="1" />
        <HStack
          zIndex="10"
          backgroundColor="#fff"
          color="#2196f3"
          fontSize="13px"
          fontWeight="400"
          px="2"
          py="1"
          position="absolute"
          bottom="5"
          border="1px"
          borderColor="#e2e5ed"
          cursor="pointer"
          _hover={{ bg: "#2196F3", color: "white" }}
        >
          <StarIcon />
          <Text>Add to Watchlist</Text>
        </HStack>
      </Center>
    </Box>
  );
}
export default StockWatchlist;
