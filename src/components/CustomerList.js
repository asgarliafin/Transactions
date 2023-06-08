import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../services/api';
import TransactionTable from './TableWr';

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
      <h1 className="title">Customer List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TransactionTable transaction={transactions} />
      )}
    </div>
  );
};

export default CustomerList;
