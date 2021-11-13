import React from 'react';
import './index.scss';

// Components
import Users from '../../components/Users/Users';

// Data
import { notifications } from '../../utilities/data';
import Notification from '../../components/Notification/Notification';

// Icons
import EditIcon from '../../assets/svgs/edit';
import NotificationIcon from '../../assets/svgs/notification';
import CheckIcon from '../../assets/svgs/checkmark';

function More() {
  return (
    <div className='More'>
      <Users />
      <button className='More__Button'>
        <span className='More__Section__Header'>
          <EditIcon className='More__Icon EditIcon' />
          <span>Gerenciar perfis</span>
        </span>
      </button>
      <div className='More__Section'>
        <span className='More__Section__Title'>
          <NotificationIcon className='More__Icon NotificationIcon' />
          <span>Notificações</span>
        </span>
        {notifications.map(notification => {
          return <Notification notification={notification} />;
        })}
      </div>
      <div className='More__Section'>
        <span className='More__Section__Title'>
          <CheckIcon className='More__Icon CheckIcon' />
          <span>Minha Lista</span>
        </span>
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
