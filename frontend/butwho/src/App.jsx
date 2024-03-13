import './App.css';
import MainPage from './pages/MainPage';
import { PageContext } from './contexts/PageContext';
import usePage from './hooks/usePage';

function App() {
  
  const pageValue = usePage();
  
  return (
    <PageContext.Provider value={ pageValue }>  
      <MainPage />
    </PageContext.Provider>
  );
}

export default App;
