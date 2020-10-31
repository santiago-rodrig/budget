import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);

  const defineBudget = e => {
    setQuantity(parseInt(e.target.value));
  }

  const submitBudget = e => {
    e.preventDefault();

    if (quantity <= 0 || isNaN(quantity)) {
      setError(true);

      return;
    }

    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
    setShowQuestion(false);
  }

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message="El presupuesto es incorrecto" /> : null}
      <form onSubmit={submitBudget}>
        <input type="number" className="u-full-width" onChange={defineBudget} />
        <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
      </form>
    </>
  );
}

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired
};

export default Question;
