import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import { calculateRewardPoints } from '../utils/pointCalculator';


const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});


const TransactionTable = ({transaction}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Transaction Table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Earned Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map(({id, amount}) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>${amount}</TableCell>
              <TableCell>{calculateRewardPoints(amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;