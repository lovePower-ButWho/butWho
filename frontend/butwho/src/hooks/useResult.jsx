import {useState, useEffect} from 'react';

const useResult = () => {
    const [result, setResult] = useState({
        'E': 0,
        'I': 0,
        'S': 0,
        'N': 0,
        'T': 0,
        'F': 0,
        'J': 0,
        'P': 0,
    });

    const [lovePower, setLovePower] = useState(0);

    const plusScore = (mbti, isLove) => {
        const newResult = {...result};
        newResult[mbti]++;
        setResult(newResult);
        if(isLove === true) { 
            setLovePower(lovePower+10); 
        };
    };

    useEffect(() => {
        console.log(result)
        console.log(lovePower)
    }, [result, lovePower]);

    return plusScore;
}

export default useResult;