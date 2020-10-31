import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ expenseObject }) => (
  <li className="gastos">
    <p>
      {expenseObject.concept}
      <span className="gasto">${expenseObject.expense}</span>
    </p>
  </li>
);

Expense.propTypes = {
  expenseObject: PropTypes.object.isRequired
};

export default Expense;
