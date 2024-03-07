import './App.css';
import MainPage from './pages/MainPage';
import olderScript from './scripts/OlderScript';
import { PageContext } from './contexts/PageContext';
import usePage from './hooks/usePage';

function App() {
  
  const pageValue = usePage(olderScript);
  
  
  return (
    <PageContext.Provider value={ pageValue }>  
      <MainPage script={ olderScript[pageValue.page] }/>
    </PageContext.Provider>
  );
}

export default App;
