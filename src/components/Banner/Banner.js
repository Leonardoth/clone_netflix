import React from 'react';
import './index.scss';

function Banner() {
  return (
    <div className='Banner'>
      <div className='Banner__Info'>
        <div className='Banner__Tags'>
          <span className='Banner__Tags__Tag'>Escandalosos</span>
          <span>●</span>
          <span className='Banner__Tags__Tag'>Cativante</span>
          <span>●</span>
          <span className='Banner__Tags__Tag'>Provocantes</span>
          <span>●</span>
          <span className='Banner__Tags__Tag'>Competição</span>
        </div>
        <div className='Banner__Buttons'>
          <button className='Banner__Buttons__Button'>+ Minha Lista</button>
          <button className='Banner__Buttons__Button'>> Assistir</button>
          <button className='Banner__Buttons__Button'>i Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
