import React from 'react';
import './index.scss';

// Icon
import SearchIcon from '../../assets/svgs/search';

function SearchPage() {
  return (
    <div className='Search'>
      <div className='Search__Bar'>
        <SearchIcon className='Search__Bar__Icon' />
        <input
          className='Search__Bar__Input'
          placeholder='Busque por série, filme, gênero, etc.'
        ></input>
        <SearchIcon className='Search__Bar__Icon' />
      </div>
      <div className='Search__Content'>
        <div className='Search__Content__Filler'>
          <h3>Encontre sua próxima história.</h3>
          <p className='Search__Content__Filler__p'>
            Busque séries para assistirno caminho para o trabalho, filmes para
            descontrair ou gêneros favoritos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
