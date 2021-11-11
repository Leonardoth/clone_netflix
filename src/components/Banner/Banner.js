import React from 'react';
import './index.scss';

// Icons
import PlayIcon from '../../assets/svgs/play';
import InfoIcon from '../../assets/svgs/info';
import PlusIcon from '../../assets/svgs/plus';

function Banner(props) {
  const { item } = props;
  const newTags = [];
  return (
    <div className='Banner'>
      <img className='Banner__Mobile' src={item.mobileImage} />
      <img className='Banner__Desktop' src={item.image} />
      <div className='Banner__Info'>
        <div className='Banner__Tags'>
          {item.tags.forEach((tag, index) => {
            if (index !== 0) {
              newTags.push('●');
            }
            newTags.push(tag);
          })}
          {newTags.map(item => {
            return <span className='Banner__Tags__Tag'>{item}</span>;
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
            <span className='Banner__Buttons__Button__MobileSpan'>
              Saiba Mais
            </span>
            <span className='Banner__Buttons__Button__DesktopSpan'>
              Mais Informações
            </span>
          </button>
        </div>
      </div>
      <div className='Banner__Overlay' />
    </div>
  );
}

export default Banner;
