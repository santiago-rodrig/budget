import React, { useState } from 'react';

const Form = () => {
  const [expense, setExpense] = useState(0);
  const [concept, setConcept] = useState('');

  const addExpense = e => {
    e.preventDefault();
  }

  return (
    <>
      <h2>Agrega tus gastos</h2>
      <form onSubmit={addExpense}>
        <div className="campo">
          <label htmlFor="expense">Cantidad</label>
          <input type="number" id="expense" className="u-full-width" value={expense} onChance={e => setExpense(parseInt(e.target.value))} />
        </div>
        <div className="campo">
          <label htmlFor="concept">Concepto</label>
          <input type="text" id="concept" className="u-full-width" value={concept} onChance={e => setConcept(e.target.value)} />
        </div>
        <input type="submit" value="Definir Gasto" className="button-primary u-full-width" />
      </form>
    </>
  );
}

export default Form;
