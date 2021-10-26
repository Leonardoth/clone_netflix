import React from 'react';
import './index.scss';

function Footer(props) {
  const { setPage, page } = props;
  return (
    <div className='Footer'>
      <button
        className={page === 'Home' ? 'active' : ''}
        onClick={() => setPage('Home')}
      >
        Home
      </button>
      <button
        className={page === 'Search' ? 'active' : ''}
        onClick={() => setPage('Search')}
      >
        Buscas
      </button>
      <button
        className={page === 'Soon' ? 'active' : ''}
        onClick={() => setPage('Soon')}
      >
        Em Breve
      </button>
      <button
        className={page === 'Downloads' ? 'active' : ''}
        onClick={() => setPage('Downloads')}
      >
        Downloads
      </button>
      <button
        className={page === 'More' ? 'active' : ''}
        onClick={() => setPage('More')}
      >
        Mais
      </button>
    </div>
  );
}

export default Footer;
