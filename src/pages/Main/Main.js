import React from 'react';
import './index.scss';

// Titles
import lists from '../../utilities/lists';

// Components
import Banner from '../../components/Banner/Banner';
import List from '../../components/List/List';

function Main() {
  return (
    <div>
      <Banner />
      {lists.map(item => {
        return <List title={item.title} items={item.list} />;
      })}
    </div>
  );
}

export default Main;
