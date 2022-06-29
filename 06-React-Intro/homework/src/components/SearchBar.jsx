import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  const buscar = () => {
    const inputt = document.querySelector('#inputt')
    onSearch(inputt.value)
  }

  return <div>
    <input id="inputt" type="text" />
    <button onClick={buscar}>Agregar</button>
  </div>
};