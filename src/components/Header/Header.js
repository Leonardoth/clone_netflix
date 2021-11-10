import React, { useState } from 'react';
import './index.scss';

// Icons
import SearchIcon from '../../assets/svgs/search';
import NotificationItem from '../../assets/svgs/notification';

// Data
import { users } from '../../utilities/data';

function Header(props) {
  const [user, setUser] = useState(users.filter(user => user.active)[0]);

  return (
    <div className='Header'>
      <div className='Header__Left'>
        <img
          className='Header__Logo'
          src='https://picsum.photos/id/63/500/100'
          alt="Site's Logo"
        />
        <button className='Header__Button active'>Inicio</button>
        <button className='Header__Button'>Séries</button>
        <button className='Header__Button'>Filmes</button>
        <button className='Header__Button'>Bombando</button>
        <button className='Header__Button'>Minha lista</button>
        <button className='Header__Button'>Assista de novo</button>
      </div>
      <div className='Header__Right'>
        <SearchIcon className='Header__SearchIcon' />
        <button className='Header__Button active'>infantil</button>
        <button className='Header__NotificationButton'>
          <NotificationItem className='Header__NotificationItem' />
          <span className='Header__NotificationSpan'>9+</span>
        </button>
        <button className='Header__User'>
          <img
            className='Header__UserAvatar'
            src={user.avatar}
            alt={`${user.name}'s avatar`}
          />
        </button>
        <details className='Header__MoreOptions'>
          <summary></summary>
          <div className='Header__MoreOptions__Div'>
            {users.map(user =>
              !user.active ? (
                <button className='Header__MoreOptions__Div__Button'>
                  <img
                    className='Header__MoreOptions__Div__Button__Avatar'
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                  />
                  {user.name}
                </button>
              ) : (
                ''
              )
            )}
            <button className='Header__MoreOptions__Div__Button'>
              Gerenciar perfis
            </button>
            <button className='Header__MoreOptions__Div__Button'>Conta</button>
            <button className='Header__MoreOptions__Div__Button'>
              Centro de ajuda
            </button>
            <button className='Header__MoreOptions__Div__Button'>
              <a href='https://www.github.com/leonardoth'>Sair da Netflix</a>
            </button>
          </div>
        </details>
      </div>
    </div>
  );
}

export default Header;
