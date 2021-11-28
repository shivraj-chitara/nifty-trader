import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Center, Flex, HStack, Stack, Text } from "@chakra-ui/layout";
import { EmailIcon } from "@chakra-ui/icons";
import { ALPHABETS } from "../../config/Constants";

function Footer() {
  return (
    <Box width="100%" bg="#0B1426">
      <Box width="70%" margin="auto">
        <Center>
          <HStack color="#adb5bd" py="10" margin="auto">
            {ALPHABETS.map((item, index) => (
              <Center key={index} bg="#172031" boxSize="8" borderRadius="3px">
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
                bg="#242c3c"
                borderRadius="3px"
                color="#adb5bd"
              >
                <Image src="/img/fb.png" />
              </Center>
              <Center
                boxSize="8"
                bg="#242c3c"
                borderRadius="3px"
                color="#adb5bd"
              >
                <Image src="/img/twitter.png" />
              </Center>
              <Center
                boxSize="8"
                bg="#242c3c"
                borderRadius="3px"
                color="#adb5bd"
              >
                <Image src="/img/linkendin.png" />
              </Center>
              <Center
                boxSize="8"
                bg="#242c3c"
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
              <Button fontSize="16px" colorScheme="blue" zIndex="10">
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Box>
      <Center
        bg="#070D19"
        width="100%"
        color="#ADB5BD"
        height="20"
        fontSize="14px"
        zIndex="5"
      >
        <Text>
          <span style={{ color: "#2196f3" }}>Copyright © Niftytrader.</span>
          All rights reserved
        </Text>
      </Center>
    </Box>
  );
}

export default Footer;
