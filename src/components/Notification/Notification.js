import React from 'react';
import './index.scss';

function Notification(props) {
  const { title, date, image } = props.notification;
  return (
    <div className='Notification'>
      <span className='Notification__News'>Novidade</span>
      <img className='Notification__Image' src={image} />
      <span className='Notification__Title'>{title}</span>
      <span className='Notification__Date'>{date}</span>
    </div>
  );
}

export default Notification;
