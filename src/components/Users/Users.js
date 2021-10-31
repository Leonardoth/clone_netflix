import React from 'react';
import './index.scss';
import { users } from '../../utilities/data';

function User(props) {
  const { user } = props;
  return (
    <div className={`User ${user.active ? 'active' : ''}`}>
      <img className='User__Image' src={user.avatar} />
      <span className='User__Name'>{user.name}</span>
    </div>
  );
}

function Users() {
  return (
    <div className='Users'>
      {users.map(user => {
        return <User user={user} />;
      })}
    </div>
  );
}

export default Users;
