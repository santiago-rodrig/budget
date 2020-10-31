import React from 'react';
import Expense from './Expense';

const Listing = ({ expenses }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    <ul>
      {expenses.map(expense => <Expense key={expense.id} expenseObject={expense} />)}
    </ul>
  </div>
)

export default Listing;
