import { Button } from "@chakra-ui/button";
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
import StarIcon from "./icons/StarIcon";

function App() {
  return (
    <>
      <Flex
        width="70%"
        margin="auto"
        bg="gray.100"
        align="center"
        justifyContent="space-between"
      >
        <Flex>
          <Box pr="5">NeftiTrader</Box>
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
          <Box borderLeft="2px" height="4" borderColor="gray.400" pr="2"></Box>
          <Center>
            <StarIcon color="blue.500" />
          </Center>
        </HStack>
      </Flex>

      {/* section 2 */}
      <Box width="100%" bgGradient="linear(to-b, #ffffff, #fffff)">
        <SimpleGrid columns={3} spacing={10} width="70%" margin="auto" mt="5">
          {/* 1 */}
          <Box borderRadius="md" boxShadow="md">
            <Stack py="3" px="5">
              <HStack>
                <Text fontSize="base" fontWeight="normal">
                  SGX Nifty
                </Text>
                <HStack color="green" fontSize="sm">
                  <Text>+18.00</Text>
                  <Text>(+0.20%)</Text>
                </HStack>
              </HStack>
              <Flex>
                <HStack>
                  <Image src="/img/uparrow.png" />
                  <Text fontSize="2xl" fontWeight="normal">
                    9184.00
                  </Text>
                </HStack>
                <Spacer />
                <HStack fontSize="xs" spacing="10">
                  <Box>
                    <Text>Low</Text>
                    <Text color="red">8912.40</Text>
                  </Box>
                  <Box>
                    <Text>HIgh</Text>
                    <Text color="green">8912.40</Text>
                  </Box>
                </HStack>
              </Flex>
            </Stack>
            <HStack borderTop="1px">
              <Text>auto reload</Text>
            </HStack>
          </Box>

          {/* 2 */}
          <Box borderRadius="md" boxShadow="md">
            <Stack py="3" px="5">
              <HStack>
                <Text fontSize="base" fontWeight="normal">
                  SGX Nifty
                </Text>
                <HStack color="green" fontSize="sm">
                  <Text>+18.00</Text>
                  <Text>(+0.20%)</Text>
                </HStack>
              </HStack>
              <Flex>
                <HStack>
                  <Image src="/img/uparrow.png" />
                  <Text fontSize="2xl" fontWeight="normal">
                    9184.00
                  </Text>
                </HStack>
                <Spacer />
                <HStack fontSize="xs" spacing="10">
                  <Box>
                    <Text>Low</Text>
                    <Text color="red">8912.40</Text>
                  </Box>
                  <Box>
                    <Text>HIgh</Text>
                    <Text color="green">8912.40</Text>
                  </Box>
                </HStack>
              </Flex>
            </Stack>
            <HStack borderTop="1px">
              <Text>auto reload</Text>
            </HStack>
          </Box>

          {/* 3 */}
          <Box borderRadius="md" boxShadow="md">
            <Stack py="3" px="5">
              <HStack>
                <Text fontSize="base" fontWeight="normal">
                  SGX Nifty
                </Text>
                <HStack color="green" fontSize="sm">
                  <Text>+18.00</Text>
                  <Text>(+0.20%)</Text>
                </HStack>
              </HStack>
              <Flex>
                <HStack>
                  <Image src="/img/uparrow.png" />
                  <Text fontSize="2xl" fontWeight="normal">
                    9184.00
                  </Text>
                </HStack>
                <Spacer />
                <HStack fontSize="xs" spacing="10">
                  <Box>
                    <Text>Low</Text>
                    <Text color="red">8912.40</Text>
                  </Box>
                  <Box>
                    <Text>HIgh</Text>
                    <Text color="green">8912.40</Text>
                  </Box>
                </HStack>
              </Flex>
            </Stack>
            <HStack borderTop="1px">
              <Text>auto reload</Text>
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
