import { useState, useCallback, useMemo, useEffect } from "react"; //import할 때 중괄호는 구조분해할당이 아니라 변수(변수이름)로 내보낸 것
import OlderScript from "../scripts/OlderScript";
import PeerScript from "../scripts/PeerScript";
import YoungerScript from "../scripts/YoungerScript";
import useResult from "./useResult";
import { BOYENUM } from "../enum";
import { useNavigate } from "react-router-dom";

const script = {
  [BOYENUM.OLDER]: OlderScript,
  [BOYENUM.PEER]: PeerScript,
  [BOYENUM.YOUNGER]: YoungerScript,
};

const usePage = () => {
  const [page, setPage] = useState(0);
  const [type, setType] = useState(BOYENUM.OLDER);
  const { plusScore, sendResult, myResult, resetLovePower, lovePower } =
    useResult(type);
  const navigate = useNavigate();
  useEffect(() => {
    setPage(0);
    resetLovePower();
  }, [type]);

  const nextPage = useCallback(async () => {
    if (page === script[type].length - 1) {
      await sendResult();
      navigate("/result");
      return page;
    }
    setPage(page + 1);
    //setPage 안에 함수를 넣으면 set함수가 실행되는 시점에서의 state값(현재 페이지)을 첫번째 인자로 넣어줌
    //이렇게 안 해 주면 함수가 정의되는 시점에서의 state값(이전 페이지)가 됨
  }, [page, type, sendResult]); //useCallback은 함수를 기억해주는 애니까 함수를 만들 때 사용해야 함

  const typeValue = useCallback((type) => {
    if (Object.values(BOYENUM).includes(type)) setType(type);
  }, []);

  const pageValue = useMemo(() => {
    return {
      nextPage,
      typeValue,
      script: script[type][page].content,
      backgroundImg: script[type][page].backgroundImg,
      type,
      plusScore,
      myResult,
      lovePower,
    };
  }, [page, nextPage, myResult, type, typeValue, plusScore, lovePower]);

  return pageValue;
};

export default usePage;
