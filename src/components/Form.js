import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

const Form = ({ addExpenseObject }) => {
  const [expense, setExpense] = useState(0);
  const [concept, setConcept] = useState('');
  const [error, setError] = useState(false);

  const addExpense = e => {
    e.preventDefault();

    if (expense <= 0 || isNaN(expense) || concept.trim() === '') {
      setError(true);

      return;
    }

    setError(false);

    const virtualExpense = {
      concept,
      expense,
      id: shortid.generate()
    };

    addExpenseObject(virtualExpense);
  }

  return (
    <>
      <h2>Agrega tus gastos</h2>
      {error ? <Error message="Todos los campos son obligatorios o el gasto se pasa del presupuesto" /> : null}
      <form onSubmit={addExpense}>
        <div className="campo">
          <label htmlFor="expense">Cantidad</label>
          <input type="number" id="expense" className="u-full-width" value={expense} onChange={e => setExpense(parseInt(e.target.value).toString())} />
        </div>
        <div className="campo">
          <label htmlFor="concept">Concepto</label>
          <input type="text" id="concept" className="u-full-width" value={concept} onChange={e => setConcept(e.target.value)} />
        </div>
        <input type="submit" value="Definir Gasto" className="button-primary u-full-width" />
      </form>
    </>
  );
}

export default Form;
