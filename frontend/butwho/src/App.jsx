import './App.css';
import MainPage from './pages/MainPage';
import olderScript from './scripts/OlderScript';
import { PageContext } from './contexts/PageContext';
import usePage from './hooks/usePage';

function App() {
  
  const { pageValue, page } = usePage(olderScript);
  // const [result, setResult] = useState({
  //   e:0,s:0,t:0,p:0 
  // });
  // const createResult = (type) => {
  //   const newResult = {...result};
  //   newResult[type]++;
  //   setResult(newResult);
  // }

  
  return (
    <PageContext.Provider value={ pageValue }>  
      <MainPage script={ olderScript[page] }/>
    </PageContext.Provider>
  );
}

export default App;
