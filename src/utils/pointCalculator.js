const calculateTransactionRewardPoints = (transactionAmount) => {
  let rewardPoints = 0;

  if (transactionAmount > 100) {
    rewardPoints += (transactionAmount - 100) * 2 + 50;
  } else if (transactionAmount > 50) {
    rewardPoints += (transactionAmount - 50);
  }

  return rewardPoints;
};

const calculateMonthlyRewardPoints = (monthlyTransactions) => {
  let totalPoints = 0;

  for (const transactionAmount of monthlyTransactions) {
    const transactionRewardPoints = calculateTransactionRewardPoints(transactionAmount);
    totalPoints += transactionRewardPoints;
  }

  return totalPoints;
};

const calculateTotalRewardPoints = (transactions) => {
  let totalPoints = 0;

  const monthlyTransactions = Object.values(transactions);

  for (const monthlyTransaction of monthlyTransactions) {
    const monthlyRewardPoints = calculateMonthlyRewardPoints(monthlyTransaction);
    totalPoints += monthlyRewardPoints;
  }

  return totalPoints;
};

export { calculateTotalRewardPoints, calculateMonthlyRewardPoints };
