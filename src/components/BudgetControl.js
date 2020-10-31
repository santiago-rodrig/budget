import React, { Fragment } from 'react';

const BudgetControl = ({ budget, remaining }) => (
  <>
    <div className="alert alert-primary">
      Presupuesto: ${budget}
    </div>
    <div className="alert">
      Restante: ${remaining}
    </div>
  </>
);

export default BudgetControl;
