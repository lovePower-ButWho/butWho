import './App.css';
import FirstMeetPage from './pages/FirstMeetPage';
import { createContext, useContext, useState } from 'react';  //import할 때 중괄호는 구조분해할당이 아니라 변수(변수이름)로 내보낸 것이다
import script from './scripts/Script';


function App() {
  const [page, setPage] = useState(0);
  const [result, qwer] = useState({
    e:0,s:0,t:0,p:0
  });
  const setResult = (type) => {
    const newResult = {...result};
    newResult[type]++;
    qwer(newResult);
  }
  const ScoreContext = createContext(null);
  
  return (
    <ScoreContext.Provider value={{page, setPage, result, setResult}}>
      <FirstMeetPage script={script[page]}/>
    </ScoreContext.Provider>
  );
}

export default App;
