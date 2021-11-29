const getFilteredStock = (stocks, filter, count) => {
  const filteredArr = [];
  let quantity = 0;
  for (let i = 0; i < stocks.length; i++) {
    if (quantity == count) {
      break;
    } else if (
      stocks[i]?.symbol_name.includes(filter) ||
      stocks[i]?.symbol_name.includes(filter.toLowerCase()) ||
      stocks[i].symbol_name.includes(filter.toUpperCase())
    ) {
      filteredArr.push(stocks[i]);
      quantity += 1;
    }
  }
  return filteredArr;
};

export { getFilteredStock };
