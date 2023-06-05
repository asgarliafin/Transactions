import React from 'react';
import { calculateRewardPoints } from '../utils/pointCalculator';

const RewardPoints = ({ transaction }) => {
  const rewardPoints = calculateRewardPoints(transaction.amount);

  return (
    <div>
      <h2>Reward Points</h2>
      <p>Earned points for this transaction: {rewardPoints}</p>
    </div>
  );
};

export default RewardPoints;
