import { Button, ButtonGroup } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
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
import StockTable from "./components/SrockTable/StockTable";
import StockCard from "./components/StockCard/StockCard";
import StockWatchlist from "./components/StockWatchList/StockWatchList";
import StarIcon from "./icons/StarIcon";
import { EmailIcon } from "@chakra-ui/icons";

const alphabates = [
  "0-9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function App() {
  return (
    <>
      <Box width="100%" boxShadow="md" py="3">
        <Flex
          width="70%"
          margin="auto"
          align="center"
          justifyContent="space-between"
        >
          <Flex>
            <Box pr="5" width="40">
              <Image src="/img/header-logo.jpg" />
            </Box>
            <Box width="8" mr="5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
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
            <Box
              borderLeft="2px"
              height="4"
              borderColor="gray.400"
              pr="2"
            ></Box>
            <Center>
              <StarIcon color="blue.500" />
            </Center>
          </HStack>
        </Flex>
      </Box>

      {/* section 2 */}
      <Box width="100%">
        <SimpleGrid columns={3} spacing={10} width="70%" margin="auto" mt="10">
          {/* 1 */}
          <Box
            borderRadius="md"
            boxShadow="-1px 3px 27px 4px rgba(0,0,0,0.15);-webkit-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);-moz-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);"
          >
            <StockCard
            // stockName="SGX Nifty"
            // positive="green"
            // imgSrc="/img/uparrow.png"
            // currentValue="9184.00"
            // lowValue="8912.40"
            // highValue="9112.00"
            />

            <HStack
              borderTop="1px"
              borderColor="gray.100"
              px="5"
              py="1"
              color="#666666"
            >
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
              </Box>
              <Text fontSize="13px">Auto Refresh</Text>
            </HStack>
          </Box>

          {/* 2 */}
          <Box
            borderRadius="md"
            boxShadow="-1px 3px 27px 4px rgba(0,0,0,0.15);-webkit-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);-moz-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);"
          >
            <StockCard
            // stockName="Nifty 50"
            // negative="red"
            // imgSrc="/img/uparrow.png"
            // currentValue="8993.00"
            // lowValue="8912.40"
            // highValue="9112.00"
            />

            <Flex
              justifyContent="space-between"
              borderTop="1px"
              borderColor="gray.100"
              px="5"
              py="2"
              fontWeight="500"
              color="#666666"
              fontSize="13px"
              align="center"
            >
              <Link
                px="2"
                _hover={{
                  bg: "#2196F3",
                  borderRadius: "xl",
                  color: "white",
                }}
              >
                Contributers
              </Link>
              |
              <Link
                px="2"
                _hover={{
                  bg: "#2196F3",
                  borderRadius: "xl",
                  color: "white",
                }}
              >
                Live Analytics
              </Link>
              |
              <Link
                px="2"
                _hover={{
                  bg: "#2196F3",
                  borderRadius: "xl",
                  color: "white",
                }}
              >
                Futures
              </Link>
              |
              <Link
                px="2"
                _hover={{
                  bg: "#2196F3",
                  borderRadius: "xl",
                  color: "white",
                }}
              >
                Options
              </Link>
            </Flex>
          </Box>

          {/* 3 */}
          <Box
            borderRadius="md"
            boxShadow="-1px 3px 27px 4px rgba(0,0,0,0.15);-webkit-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);-moz-box-shadow: -1px 3px 27px 4px rgba(0,0,0,0.15);"
          >
            <StockCard
            // stockName="Nifty Bank"
            // negative="red"
            // imgSrc="/img/downarrow.png"
            // currentValue="19184.00"
            // lowValue="18912.40"
            // highValue="19812.00"
            />

            <Flex
              borderTop="1px"
              borderColor="gray.100"
              px="5"
              py="2"
              fontWeight="500"
              color="#666666"
              fontSize="13px"
              align="center"
            >
              <Link
                px="2"
                mr="2"
                _hover={{
                  bg: "#2196F3",
                  borderRadius: "xl",
                  color: "white",
                }}
              >
                Live Analytics
              </Link>
              |
              <Link
                px="2"
                ml="2"
                _hover={{
                  bg: "#2196F3",
                  borderRadius: "xl",
                  color: "white",
                }}
              >
                Options
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>

      {/* secion 3 */}
      <Box width="70%" margin=" auto" my="20">
        <Center borderBottom="1px" borderColor="#E2E5ED" my="5">
          <HStack spacing="10" fontSize="16px">
            <Box>
              <Text
                borderBottom="2px"
                borderColor="#2196F3"
                py="5"
                color="#2196F3"
              >
                Trending Stocks
              </Text>
            </Box>
            <Box>
              <Text>Most Active</Text>
            </Box>
            <Box>
              <Text>Top Gainers</Text>
            </Box>
            <Box>
              <Text>Top Losers</Text>
            </Box>
          </HStack>
        </Center>
        <StockTable />
        <Center mt="10">
          <Button
            // colorScheme="none"
            bg="white"
            border="1px"
            borderColor="#E2E5ED"
            color="#2196F3"
            fontWeight="500"
            fontSize="14"
            borderRadius="none"
            px="8"
          >
            View more stocks
            <Image src="/img/rightarrow.png" pl="5" />
          </Button>
        </Center>
      </Box>

      {/* section 4 */}
      <Box bg="#f4f7fa" width="100%" py="5">
        <Box width="70%" margin="auto">
          <Text fontSize="25px" fontWeight="700" color="#0F2137">
            Watchlist
          </Text>
          <Box
            display="flex"
            justifyContent="space-evenly"
            flexWrap="wrap"
            position="relative"
          >
            {/* {watchlist.map((item, index) => ( */}
            <StockWatchlist />
            {/* ))} */}
          </Box>
          <Center mt="8">
            <VStack fontSize="14px">
              <Text color="#818992">All your instruments in one place</Text>
              <Button fontSize="14px" colorScheme="blue" fontWeight="400">
                Create Watchlist
              </Button>
            </VStack>
          </Center>
        </Box>
      </Box>

      {/* footer */}
      <Box width="100%" bg="#0B1426">
        <Box width="70%" margin="auto">
          <Center>
            <HStack
              color="#adb5bd"
              py="10"
              margin="auto"
              // borderBottom="1px"
              // borderColor="#E2E5ED"
            >
              {alphabates.map((item) => (
                <Center boxSize="10" border="1px" borderRadius="3px">
                  {item}
                </Center>
              ))}
            </HStack>
          </Center>

          <Flex
            justifyContent="space-between"
            borderTop="1px"
            borderColor="#E2E5ED"
            py="10"
          >
            <Stack width="300px" spacing="5">
              <Box>
                <Image src="/img/footer-logo.png" />
              </Box>
              <Text color="#adb5bd" fontSize="14px">
                The team at NiftyTrader.in is always endeavoring to improve
                education about technical analysis approach to decipher
              </Text>
              <HStack>
                <Center
                  boxSize="8"
                  border="1px"
                  borderRadius="3px"
                  color="#adb5bd"
                >
                  <Image src="/img/fb.png" />
                </Center>
                <Center
                  boxSize="8"
                  border="1px"
                  borderRadius="3px"
                  color="#adb5bd"
                >
                  <Image src="/img/twitter.png" />
                </Center>
                <Center
                  boxSize="8"
                  border="1px"
                  borderRadius="3px"
                  color="#adb5bd"
                >
                  <Image src="/img/linkendin.png" />
                </Center>
                <Center
                  boxSize="8"
                  border="1px"
                  borderRadius="3px"
                  color="#adb5bd"
                >
                  <Image src="/img/insta.png" />
                </Center>
              </HStack>
            </Stack>

            <Stack direction="row" spacing="16" color="#ADB5BD">
              <Stack>
                <Text fontSize="16px" fontWeight="500" pb="2" color="#FEFEFE">
                  Top 5 Brokers
                </Text>
                <Text>Zerodha</Text>
                <Text>5paisa</Text>
                <Text>Angle Broking</Text>
                <Text>ICICI Direct</Text>
                <Text>Upstox</Text>
              </Stack>

              <Stack>
                <Text fontSize="16px" fontWeight="500" pb="2" color="#FEFEFE">
                  Other Links
                </Text>
                <Text>About Us</Text>
                <Text>Terms & Conditions</Text>
                <Text>Privacy Policy</Text>
                <Text>Disclaimers</Text>
                <Text>Limitation Of Liability</Text>
                <Text>Refund & Cancellation Policy</Text>
              </Stack>

              <Stack>
                <Text fontSize="16px" fontWeight="500" pb="2" color="#FEFEFE">
                  Other Links
                </Text>

                <Text>Broker Directory</Text>
                <Text>Opening Price Clues</Text>
                <Text>Stock Screener</Text>
                <Text>Stock Options Chart</Text>
                <Text>Limitation Of Liability</Text>
              </Stack>

              <Stack spacing="5">
                <Text fontSize="16px" fontWeight="500" color="#FEFEFE">
                  Subscribe to Our Newsletter
                </Text>
                <Text>Sign up and receive the latest tips via email.</Text>
                <Text fontSize="13px">
                  Write your Email <span style={{ color: "red" }}>*</span>
                </Text>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email" />
                </InputGroup>
                <Button fontSize="16px" colorScheme="blue">
                  Subscribe
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default App;
