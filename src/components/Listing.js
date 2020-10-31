import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';

const Listing = ({ expenses }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    <ul>
      {expenses.map(expense => <Expense key={expense.id} expenseObject={expense} />)}
    </ul>
  </div>
);

Listing.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default Listing;
