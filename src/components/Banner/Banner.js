import React from 'react';
import './index.scss';

// Icons
import PlayIcon from '../../assets/svgs/play';
import InfoIcon from '../../assets/svgs/info';
import PlusIcon from '../../assets/svgs/plus';

function Banner(props) {
  const { item } = props;
  return (
    <div className='Banner'>
      <img className='Banner__Mobile' src={item.mobileImage} />
      <img className='Banner__Desktop' src={item.image} />
      <div className='Banner__Info'>
        <div className='Banner__Tags'>
          {item.tags.map(tag => {
            return <span className='Banner__Tags__Tag'>{tag}</span>;
          })}
        </div>
        <div className='Banner__Buttons'>
          <button className='Banner__Buttons__Button'>
            <PlusIcon className='Banner__Buttons__Button__PlusIcon' /> Minha
            Lista
          </button>
          <button className='Banner__Buttons__Button'>
            <PlayIcon className='Banner__Buttons__Button__PlayIcon' /> Assistir
          </button>
          <button className='Banner__Buttons__Button'>
            <InfoIcon className='Banner__Buttons__Button__InfoIcon' />
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;