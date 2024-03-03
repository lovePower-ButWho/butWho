import './App.css';
import MainPage from './pages/MainPage';
import { useCallback, useState, useMemo } from 'react';  //import할 때 중괄호는 구조분해할당이 아니라 변수(변수이름)로 내보낸 것이다
import olderScript from './scripts/OlderScript';
import { PageContext } from './contexts/PageContext';

function App() {
  const [page, setPage] = useState(0);

  const nextPage = useCallback(() => {
      if (page === olderScript.length-1) return page;
      setPage(page+1);
     //setPage 안에 함수를 넣으면 set함수가 실행되는 시점에서의 state값(현재 페이지)을 첫번째 인자로 넣어줌
    //이렇게 안 해 주면 함수가 정의되는 시점에서의 state값(이전 페이지)가 됨
  }, [page]);   //useCallback은 함수를 기억해주는 애니까 함수를 만들 때 사용해야 함

  // const [result, setResult] = useState({
  //   e:0,s:0,t:0,p:0 
  // });
  // const createResult = (type) => {
  //   const newResult = {...result};
  //   newResult[type]++;
  //   setResult(newResult);
  // }

  const pageValue = useMemo(() => {
    return {page, nextPage};
  }, [page, nextPage]);
  
  return (
    <PageContext.Provider value={ pageValue }>  
      <MainPage script={ olderScript[page] }/>
    </PageContext.Provider>
  );
}

export default App;
