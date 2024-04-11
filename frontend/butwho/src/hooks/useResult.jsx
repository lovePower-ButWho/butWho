import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContext";
import { getBoyEnumId } from "../enum";

const useResult = (type) => {
  const { accessToken } = useContext(LoginContext);
  const [result, setResult] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  const [lovePower, setLovePower] = useState(0);
  const [myResult, setMyResult] = useState({});

  const plusScore = (mbti, isLove) => {
    const newResult = { ...result };
    newResult[mbti]++;
    setResult(newResult);
    if (isLove === true) {
      setLovePower(lovePower + 10);
    }
  };

  useEffect(() => console.log(lovePower), [lovePower]);

  const sendResult = async () => {
    const sendData = { ...result, lovePower };
    console.log(accessToken);
    try {
      const response = await axios.post(
        "/api/result/" + getBoyEnumId(type),
        sendData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setMyResult(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const resetLovePower = () => setLovePower(0);
  return { plusScore, myResult, lovePower, resetLovePower, sendResult };
};

export default useResult;
