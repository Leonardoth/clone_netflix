import React from 'react';
import './index.scss';

// Data
import { soon } from '../../utilities/data';

// Icons
import NotificationIcon from '../../assets/svgs/notification';

function SoonItem(props) {
  const newTags = [];
  const { preview, dateDescription, title, description, tags } = props.item;
  return (
    <div className='Soon__Item'>
      <img
        className='Soon__Preview'
        src={preview}
        alt={`Video preview for the show ${title}`}
      />
      <span className='Soon__Date'>{dateDescription}</span>
      <button className='Soon__Button'>
        <NotificationIcon className='Soon__NotificationIcon' />
        <span>Quero receber um aviso</span>
      </button>
      <span className='Soon__Item__Title'>{title}</span>
      <p className='Soon__Item__Description'>{description} </p>
      <div className='Soon__Item__Tags'>
        {tags.forEach((tag, index) => {
          if (index !== 0) {
            newTags.push('●');
          }
          newTags.push(tag);
        })}
        {newTags.map(item => {
          return <span className='Soon__Item__Tags__Span'>{item}</span>;
        })}
      </div>
    </div>
  );
}

function Soon() {
  return (
    <div className='Soon'>
      {soon.map(item => {
        return <SoonItem item={item} />;
      })}
    </div>
  );
}

export default Soon;
