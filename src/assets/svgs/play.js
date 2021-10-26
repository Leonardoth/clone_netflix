import React from 'react';

function PlayIcon(props) {
  const { className } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 30'
      className={className}
    >
      <path
        id='Icon_feather-play'
        data-name='Icon feather-play'
        d='M7.5,4.5,28.5,18,7.5,31.5Z'
        transform='translate(-6 -3)'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='3'
      />
    </svg>
  );
}

export default PlayIcon;
