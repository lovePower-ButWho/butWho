import { useState, useContext } from 'react';
import axios from 'axios';
import { PageContext } from '../contexts/PageContext';
import { getBoyEnumId } from '../enum';

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

    // useEffect(() => {
    //     console.log(result)
    //     console.log(lovePower)
    // }, [result, lovePower]);

    const send = {...result, lovePower};
    const {type} = useContext(PageContext);
   

    const sendResult = async() => {

        axios.post('/result/' + getBoyEnumId(type), 
        send, 
        { 
            headers: {
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdHkiOjEsInN1YiI6ImFhYWFAbmF2ZXIuY29tIiwiaWF0IjoxNzExMjExOTUyLCJleHAiOjE3MjI0NDc5NTJ9.a7Vi_XQy6YYdfb25iV72NHF_tVmXUAzPFyZRslPNaos' 
            }
        }

        ).then(function (response) {
            console.log(response);
        }).catch(function (error){
            console.log(error);
        });
    }

    return { sendResult, plusScore };
}

export default useResult;