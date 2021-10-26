import React from 'react';
import './index.scss';

// Icons
import HomeIcon from '../../assets/svgs/home';
import SearchIcon from '../../assets/svgs/search';
import SoonIcon from '../../assets/svgs/soon';
import DownloadIcon from '../../assets/svgs/download';
import HamburgerIcon from '../../assets/svgs/hamburgermenu';

function Footer(props) {
  const { setPage, page } = props;
  return (
    <div className='Footer'>
      <button
        className={page === 'Home' ? 'active' : ''}
        onClick={() => setPage('Home')}
      >
        <HomeIcon className='Footer__Icon' />
        Inicio
      </button>
      <button
        className={page === 'Search' ? 'active' : ''}
        onClick={() => setPage('Search')}
      >
        <SearchIcon className='Footer__Icon' />
        Buscas
      </button>
      <button
        className={page === 'Soon' ? 'active' : ''}
        onClick={() => setPage('Soon')}
      >
        <SoonIcon className='Footer__Icon' />
        Em Breve
      </button>
      <button
        className={page === 'Downloads' ? 'active' : ''}
        onClick={() => setPage('Downloads')}
      >
        <DownloadIcon className='Footer__Icon' />
        Downloads
      </button>
      <button
        className={page === 'More' ? 'active' : ''}
        onClick={() => setPage('More')}
      >
        <HamburgerIcon className='Footer__Icon' />
        Mais
      </button>
    </div>
  );
}

export default Footer;
