import React from 'react';
import { makeStyles } from '@mui/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { calculateTotalRewardPoints, calculateMonthlyRewardPoints } from '../utils/pointCalculator';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});

const TransactionTable = ({ transaction }) => {
  const classes = useStyles();

  const renderMonthlyRewardPoints = (item) => {
    return (
      <>
        {item.join(', ')} : <b>{calculateMonthlyRewardPoints(item)}</b>
      </>
    );
  };

  const renderTransactionRows = () => {
    return transaction.map((elm, i) => (
      <TableRow key={i}>
        <TableCell>{i + 1}</TableCell>
        {Object.values(elm).map(item => (
          <TableCell key={item}>{renderMonthlyRewardPoints(item)}</TableCell>
        ))}
        <TableCell>{calculateTotalRewardPoints(elm)}</TableCell>
      </TableRow>
    ));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Transaction Table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Month 1</TableCell>
            <TableCell>Month 2</TableCell>
            <TableCell>Month 3</TableCell>
            <TableCell>Earned Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTransactionRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
