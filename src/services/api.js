import transactionsData from "../data/transactionsData";

const fetchTransactions = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(transactionsData);
      }, 1000);
    });
  };
  
  export { fetchTransactions };
  