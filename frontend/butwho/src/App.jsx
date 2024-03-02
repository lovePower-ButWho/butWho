import './App.css';
import MainPage from './pages/MainPage';
import { useState } from 'react';  //import할 때 중괄호는 구조분해할당이 아니라 변수(변수이름)로 내보낸 것이다
import olderScript from './scripts/OlderScript';

import { createContext } from 'react';
export const PageContext = createContext(0);   //꼭 파일로 분리할 필요 없이 export만 해주면 된다!(딴 데서 import 해야 하니까)

function App() {
  const [page, setPage] = useState(0);
  console.log(page);
  // const [result, qwer] = useState({
  //   e:0,s:0,t:0,p:0
  // });
  // const setResult = (type) => {
  //   const newResult = {...result};
  //   newResult[type]++;
  //   qwer(newResult);
  // }
  
  return (
    <PageContext.Provider value={ {page, setPage} }>
      <MainPage script={olderScript[page]}/>
    </PageContext.Provider>
  );
}

export default App;
