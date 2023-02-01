
import React  from 'react';
import './App.css';
import { transactions } from './transactions';
import {calculatecustomerRewardPoints} from './calculate_customer_rewards';

//A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
//Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

function App() {

  const rewards = calculatecustomerRewardPoints(transactions);
  console.log(rewards);
  return (
    <>

    <h1>Transaction points calculator</h1>
      <table 
      width="800" 
      border="1" 
      cellpadding="0" 
      cellspacing="0">
        {
      rewards.length && rewards.map((item,index) => (
  // table form for better visibility of data
          <tr>
            <td>CustomerId: {item.customerId}</td>
            <td>January: {item.january}</td>
            <td>Ferbruary: {item.february}</td>
            <td>March: {item.march}</td>
            <td>Total: {item.total}</td>
          </tr>
       
      ))
}
      </table>

    </>
  );
}

export default App;
  