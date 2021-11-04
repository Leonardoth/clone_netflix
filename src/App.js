import './App.scss';
import { useState } from 'react';

// Pages
import Main from './pages/Main/Main';
import SearchPage from './pages/SearchPage/SearchPage';
import DownloadPage from './pages/DownloadPage/DownloadPage';
import More from './pages/More/More';
import Soon from './pages/Soon/Soon';

// Components
import Footer from './components/Footer/Footer';

function App() {
  const [page, setPage] = useState('Home');

  function render(page) {
    switch (page) {
      case 'Search':
        return <SearchPage />;
      case 'Soon':
        return <Soon />;
      case 'Downloads':
        return <DownloadPage />;
      case 'More':
        return <More />;
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
