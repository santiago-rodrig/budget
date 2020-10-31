import React, { useState } from 'react';

const Form = () => {
  return (
    <>
      <h2>Agrega tus gastos</h2>
      <form>
        <div className="campo">
          <label htmlFor="expense">Cantidad</label>
          <input type="number" id="expense" className="u-full-width" />
        </div>
        <div className="campo">
          <label htmlFor="concept">Concepto</label>
          <input type="text" id="concept" className="u-full-width" />
        </div>
      </form>
    </>
  );
}

export default Form;
