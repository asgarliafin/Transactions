import transactionsData from "../data/transactionsData";

const fetchTransactions = () => {
    // Simulating an asynchronous API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(transactionsData); // Replace `transactionsData` with your actual data
      }, 1000);
    });
  };
  
  export { fetchTransactions };
  