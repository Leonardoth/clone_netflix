import React from 'react';

function PlusIcon(props) {
  const { className } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <g
        id='Icon_feather-plus'
        data-name='Icon feather-plus'
        transform='translate(-6 -6)'
      >
        <path
          id='Caminho_4'
          data-name='Caminho 4'
          d='M18,7.5v21'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='3'
        />
        <path
          id='Caminho_5'
          data-name='Caminho 5'
          d='M7.5,18h21'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='3'
        />
      </g>
    </svg>
  );
}

export default PlusIcon;
