const calculateRewardPoints = (transactionAmount) => {
    let rewardPoints = 0;
  
    if (transactionAmount > 100) {
      rewardPoints += (transactionAmount - 100) * 2  +  50;
    }

    else if(transactionAmount > 50 && transactionAmount <= 100){
      rewardPoints += (transactionAmount - 50) * 1;
    }
  
    return rewardPoints;
  };
  
  export { calculateRewardPoints };
  