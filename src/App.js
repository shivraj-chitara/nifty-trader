import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import StockTable from "./components/StockTable/StockTable";
import StockCard from "./components/StockCard/StockCard";
import StockWatchlist from "./components/StockWatchList/StockWatchList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { STOCK_DATA, STOCK_WATCHLIST } from "./config/Constants";

function App() {
  return (
    <>
      {/* Header  */}
      <Header />

      {/* Stock data */}
      <Box width="100%">
        <SimpleGrid
          columns={{ sm: 1, lg: 3 }}
          spacing={10}
          width="70%"
          margin="auto"
          mt="10"
        >
          {STOCK_DATA.map((stock, index) => (
            <StockCard
              name={stock.name}
              value={stock.value}
              lowValue={stock.lowValue}
              highValue={stock.highValue}
              isUp={stock.isUp}
              valueGain={stock.valueGain}
              valueGainPercentage={stock.valueGainPercentage}
              autoRefresh={stock.autoRefresh}
              options={stock.options}
              key={index}
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* Stock table */}
      <Box width="100%">
        <Box width="70%" margin=" auto" mt="20">
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
        </Box>

        <Box width={{ base: "100%", lg: "70%" }} margin=" auto" mb="20">
          <StockTable />

          <Center mt="10">
            <Button
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
      </Box>

      {/* Watchlist */}
      <Box bg="#f4f7fa" width="100%" py="10">
        <Box width="70%" margin="auto">
          <Text fontSize="25px" fontWeight="700" color="#0F2137">
            Watchlist
          </Text>
          <Box
            display="flex"
            justifyContent="space-evenly"
            flexWrap="wrap"
            my="10"
          >
            {STOCK_WATCHLIST.map((stock, index) => (
              <StockWatchlist
                key={index}
                name={stock.name}
                volume={stock.volume}
                value={stock.value}
                isUp={stock.isUp}
                valueGain={stock.valueGain}
                valueGainPercentage={stock.valueGainPercentage}
              />
            ))}
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
      <Footer />
    </>
  );
}

export default App;
