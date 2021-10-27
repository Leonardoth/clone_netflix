import React from 'react';

function MicrophoneIcon(props) {
  const { className } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='12.375'
      height='18'
      viewBox='0 0 12.375 18'
      className={className}
    >
      <path
        id='Icon_awesome-microphone'
        data-name='Icon awesome-microphone'
        d='M6.188,12.375A3.375,3.375,0,0,0,9.563,9V3.375a3.375,3.375,0,0,0-6.75,0V9A3.375,3.375,0,0,0,6.188,12.375ZM11.813,6.75H11.25a.562.562,0,0,0-.562.563V9a4.505,4.505,0,0,1-4.95,4.478A4.637,4.637,0,0,1,1.688,8.8V7.313a.562.562,0,0,0-.562-.562H.563A.562.562,0,0,0,0,7.313V8.724a6.381,6.381,0,0,0,5.344,6.388v1.2H3.375a.562.562,0,0,0-.562.563v.563A.562.562,0,0,0,3.375,18H9a.562.562,0,0,0,.563-.562v-.562A.562.562,0,0,0,9,16.313H7.031V15.125A6.194,6.194,0,0,0,12.375,9V7.313A.562.562,0,0,0,11.813,6.75Z'
      />
    </svg>
  );
}

export default MicrophoneIcon;
