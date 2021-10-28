import './App.scss';
import { useState } from 'react';

// Pages
import Main from './pages/Main/Main';
import SearchPage from './pages/SearchPage/SearchPage';
import DownloadPage from './pages/DownloadPage/DownloadPage';

// Components
import Footer from './components/Footer/Footer';

function App() {
  const [page, setPage] = useState('Home');

  function render(page) {
    switch (page) {
      case 'Search':
        return <SearchPage />;
      case 'Soon':
        break;
      case 'Downloads':
        return <DownloadPage />;
      case 'More':
        break;
      default:
        return <Main />;
    }
  }
  return (
    <div className='App'>
      {render(page)}
      <Footer setPage={setPage} page={page} />
    </div>
  );
}

export default App;
