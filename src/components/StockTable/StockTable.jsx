import { Image } from "@chakra-ui/image";
import { Table, Tr, Th, Td, Tbody, Thead } from "@chakra-ui/table";

function StockTable() {
  const stocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Table
      display={{ base: "block", lg: "table" }}
      overflowX="scroll"
      whiteSpace="nowrap"
    >
      <Thead bg="#f4f7fa">
        <Tr>
          <Th>Sumbol</Th>
          <Th>CurrentPrice</Th>
          <Th>Change(%)</Th>
          <Th>Prev. Close</Th>
          <Th>Volume</Th>
        </Tr>
      </Thead>
      <Tbody>
        {stocks.map((stock, index) => (
          <Tr key={index}>
            <Td>Yes Bank</Td>
            <Td>34.60</Td>
            <Td display="flex" color="red">
              <Image src="/img/downarrow.svg" width="10px" marginEnd="4px" />
              -2.20(-5.98%)
            </Td>
            <Td>39.55</Td>
            <Td>3,242,353</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default StockTable;
