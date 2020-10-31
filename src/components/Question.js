import React, { Fragment } from 'react'

const Question = () => {
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      <form>
        <input type="number" className="u-full-width" />
        <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto" />
      </form>
    </>
  );
}

export default Question;
