import './App.scss';
import { useState } from 'react';

// Pages
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [page, setPage] = useState('Home');

  function render(page) {
    switch (page) {
      case 'Search':
        break;
      case 'Soon':
        break;
      case 'Downloads':
        break;
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
