import React from 'react';
import './index.scss';

// Components
import Users from '../../components/Users/Users';

// Data
import { notifications } from '../../utilities/data';
import Notification from '../../components/Notification/Notification';

function More() {
  return (
    <div className='More'>
      <Users />
      <button className='More__Button'>Gerenciar perfis</button>
      <div className='More__Section'>
        <span>Notificações</span>
        {notifications.map(notification => {
          return <Notification notification={notification} />;
        })}
      </div>
      <div className='More__Section'>
        <span>Minha Lista</span>
      </div>
      <div className='More__Section'>
        <button>Configurações do aplicativo</button>
        <button>Conta</button>
        <button>Ajuda</button>
      </div>
    </div>
  );
}

export default More;
