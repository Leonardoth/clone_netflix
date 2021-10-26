import React from 'react';

function HamburgerIcon(props) {
  const { className } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='27'
      height='18'
      viewBox='0 0 27 18'
    >
      <path
        id='Icon_metro-menu'
        data-name='Icon metro-menu'
        d='M6.427,28.283h27v-3h-27v3Zm0-7.5h27v-3h-27v3Zm0-10.5v3h27v-3h-27Z'
        transform='translate(-6.427 -10.283)'
        fill='white'
      />
    </svg>
  );
}

export default HamburgerIcon;
