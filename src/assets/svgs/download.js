import React from 'react';

function DownloadIcon(props) {
  const { className, fill } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='19.575'
      height='18'
      viewBox='0 0 19.575 18'
      className={className}
    >
      <path
        id='Icon_open-data-transfer-download'
        data-name='Icon open-data-transfer-download'
        d='M8.348.8V11.8H4.809l4.978,4.851L14.8,11.8H11.244V.8ZM0,17.491v1.3H19.575v-1.3Z'
        transform='translate(0 -0.796)'
        fill={fill}
      />
    </svg>
  );
}

export default DownloadIcon;
