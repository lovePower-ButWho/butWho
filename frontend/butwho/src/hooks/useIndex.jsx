import {useState, useEffect, useContext} from 'react';
import { TYPEENUM } from '../enum';
import { PageContext } from '../contexts/PageContext';
import OlderScript from '../scripts/OlderScript';

const useIndex = () => {
    const [ index, setIndex ] = useState(0);
    const [ choice, setChoice ] = useState(null);

    const {script, nextPage, backgroundImg} = useContext(PageContext);

    //훅 위에 if문 있으면 안 됨 -> 훅은 그 컴포넌트 안에서는 무슨 일이 있어도 실행되어야 함(조건적으로 실행되면 XXXX) -> 초기화되니까
    //혹시나 조건적으로 실행해야 할 일이 있으면 훅 '내부' 함수에서 if문 쓸 것

    const setChoiceIndex = (index) => {
        return setChoice(index);
    } //함수를 리턴하는 함수

    useEffect(() => {
        setIndex(0);
        setChoice(null);
    }, [script]);

    const handleClick = () => {
        if (script[index].type === TYPEENUM.NARR) return setIndex(index+1);
        if (script[index].type === TYPEENUM.CHOICE && choice === null) return;
        nextPage();
    }

    console.log(`index: ${index}`)

    return { script: script[index], backgroundImg, choice, setChoiceIndex, handleClick };
}

export default useIndex;