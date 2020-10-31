import React, { Fragment } from 'react';
import { reviewBudget } from '../helpers';

const BudgetControl = ({ budget, remaining }) => (
  <>
    <div className="alert alert-primary">
      Presupuesto: ${budget}
    </div>
    <div className={reviewBudget(budget, remaining)}>
      Restante: ${remaining}
    </div>
  </>
);

export default BudgetControl;
