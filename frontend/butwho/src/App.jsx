import './App.css';
import MainPage from './pages/MainPage';
import { useState } from 'react';  //import할 때 중괄호는 구조분해할당이 아니라 변수(변수이름)로 내보낸 것이다
import olderScript from './scripts/OlderScript';

import { createContext } from 'react';
export const PageContext = createContext(0);   //꼭 파일로 분리할 필요 없이 export만 해주면 된다!(딴 데서 import 해야 하니까)

function App() {
  const [page, setPage] = useState(0);

  const nextPage = () => {
      if (page === olderScript.length-1) return page;
      setPage(page+1);
     //setPage 안에 함수를 넣으면 set함수가 실행되는 시점에서의 state값(현재 페이지)을 첫번째 인자로 넣어줌
    //이렇게 안 해 주면 함수가 정의되는 시점에서의 state값(이전 페이지)가 됨
  };

  

  // const [result, qwer] = useState({
  //   e:0,s:0,t:0,p:0
  // });
  // const setResult = (type) => {
  //   const newResult = {...result};
  //   newResult[type]++;
  //   qwer(newResult);
  // }
  
  return (
    <PageContext.Provider value={ nextPage }>  
      <MainPage script={olderScript[page]}/>
    </PageContext.Provider>
  );
}

export default App;
