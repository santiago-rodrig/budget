import React from 'react';

const Expense = ({ expenseObject }) => (
  <li className="gastos">
    <p>
      {expenseObject.concept}
      <span className="gasto">${expenseObject.expense}</span>
    </p>
  </li>
);

export default Expense;
