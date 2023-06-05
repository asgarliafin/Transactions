import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/api';
import TransactionList from './TransactionList';
import RewardPoints from './RewardPoints';
const CustomerList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        transactions.map((transaction) => (
          <div key={transaction.id}>
            <TransactionList transactions={[transaction]} />
            <RewardPoints transaction={transaction} />
          </div>
        ))
      )}
    </div>
  );
};

export default CustomerList;
