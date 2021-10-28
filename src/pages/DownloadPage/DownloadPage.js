import React from 'react';
import './index.scss';

// Icons
import DownloadIcon from '../../assets/svgs/download';

function DownloadPage() {
  return (
    <div className='DownloadPage'>
      <div className='DownloadPage__CenterContent'>
        <div className='DownloadPage__DownloadIcon__Background'>
          <DownloadIcon className='DownloadPage__DownloadIcon' />
        </div>
        <p className='DownloadPage__Paragraph'>
          Os filmes e séries baixados ficam aqui.
        </p>
      </div>
      <button className='DownloadPage__Button'>
        Encontre um título para baixar
      </button>
    </div>
  );
}

export default DownloadPage;
