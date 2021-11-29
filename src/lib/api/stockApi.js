const getAllStocks = async () => {
  try {
    const response = await fetch(
      "https://api.niftytrader.in/webapi/Index/activeStockList"
    );
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.log(error);
    return { data: null, error };
  }
};

export { getAllStocks };
