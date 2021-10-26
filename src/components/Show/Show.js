import React from 'react';
import './index.scss';

function Show(props) {
  const { season, episode, image } = props;
  return (
    <div className='Show'>
      <div className='Show__Banner'>
        <img className='Show__Image' src={`${image}`} alt='Show image' />
        <button className='Show__PlayButton'>Play</button>
      </div>
      <div className='Show__Info'>
        <span>{`T${season}`}</span>
        <span>:</span>
        <span>{`E${episode}`}</span>
      </div>
    </div>
  );
}

export default Show;
