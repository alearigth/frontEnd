import React from 'react';

export default function Card(props) {
  // acá va tu código
  const {max, min, name, img, onClose  } = props
  return <div>
    <button onClick={onClose}>X</button>
      <h3 className="title">
        {name}
      </h3>
      <div className="tem-img">
        <div>
          <p>Min</p>
          <span>{min}</span>
        </div>
        <div>
          <p>Max</p>
          <span>{max}</span>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`clima-${img}`} />
      </div>
  </div>
};