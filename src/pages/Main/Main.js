import React from 'react';
import './index.scss';

// Components
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import List from '../../components/List/List';

// Data
import { lists, banners } from '../../utilities/data';

function Main() {
  function getBanner() {
    let max = banners.length;
    let index = Math.floor(Math.random() * max);
    return banners[index];
  }

  return (
    <div className='Main'>
      <Header />
      <Banner item={getBanner()} />
      {lists.map(item => {
        return <List title={item.title} items={item.list} />;
      })}
    </div>
  );
}

export default Main;
