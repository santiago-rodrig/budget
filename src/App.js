import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const addExpenseObject = expenseObject => {
    setRemaining(remaining - expenseObject.expense);

    setExpenses([
      ...expenses,
      expenseObject
    ]);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {showQuestion ? <Question setBudget={setBudget} setRemaining={setRemaining} setShowQuestion={setShowQuestion} /> : null}
        {
          showQuestion ?
          null :
          <div className="row">
            <div className="one-half column">
              <Form addExpenseObject={addExpenseObject} />
            </div>
            <div className="one-half column">
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
