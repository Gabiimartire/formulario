import React from 'react';

function Boton({ texto }) {
  return (
    <button type="submit" className="boton">
      {texto}
    </button>
  );
}

export default Boton;
