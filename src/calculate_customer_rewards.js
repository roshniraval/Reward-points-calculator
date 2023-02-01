import {calculateRewardPoints} from './calculate_reward_points';

function calculatecustomerRewardPoints(transactions) {
    let customerRewardPoints = {};
  
    transactions.forEach(transaction => {

        const customerId = transaction.customerId;
        const month = transaction.date.getMonth();
        const amount = transaction.amount;

        if (!customerRewardPoints[customerId]) {
            customerRewardPoints[customerId] = {
              customerId,
              january: 0,
              february: 0,
              march: 0,
              total: 0
            };
          } 

          const points = calculateRewardPoints(amount);
          customerRewardPoints[customerId].total += points;

        if (month === 0) {
            customerRewardPoints[customerId].january += points;
          } else if (month === 1) {
            customerRewardPoints[customerId].february += points;
          } else if (month === 2) {
            customerRewardPoints[customerId].march += points;
          }
  
    });
    return Object.values(customerRewardPoints);
  }
    export {calculatecustomerRewardPoints};