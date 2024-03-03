import styled from 'styled-components';
import { Conversation, Choice } from '../components/TextComponents';
import { useState, useContext, useEffect } from 'react';
import { PageContext } from '../App';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const PagesStyle = styled.div`
    width: 360px;
    height: 800px;
    background-image: url(${(props) => props.image});
    background-size: 100%;
    border: 1px solid #aaa;
    position: relative;
`;

const Page = ({script, image})=> {
    const [ index, setIndex ] = useState(0);
    const [ choice, setChoice ] = useState(null);

    const {page, nextPage} = useContext(PageContext);

    //훅 위에 if문 있으면 안 됨 -> 훅은 그 컴포넌트 안에서는 무슨 일이 있어도 실행되어야 함(조건적으로 실행되면 XXXX) -> 초기화되니까
    //혹시나 조건적으로 실행해야 할 일이 있으면 훅 '내부' 함수에서 if문 쓸 것

    useEffect(() => {
        setIndex(0);
        setChoice(null);
    }, [page]);

    const handleClick = () => {
        if (script[index].type === 'narration') return setIndex(index+1);
        if (script[index].type === 'choice' && choice === null) return;
        nextPage();
    }

    //페이지 다음 꺼 스크립트 없을 때 예외처리하기

    return (
        <PagesStyle onClick={handleClick} image={image}>
            {script[index].type === 'narration' && <Conversation name={script[index].name} image={gojyoImage} text={script[index].text} />}
            {(choice === null) && script[index].type === 'choice' && <Choice choice={setChoice} text={script[index].choices}/>}
            {(choice !== null) && script[index].type === 'choice' && <Conversation name='나' image={gojyoImage} text={choice} />}
        </PagesStyle>
    );
}

const gojyoImage = "https://i.namu.wiki/i/ZUrEBCVWrZwEIQ6KjWWNvsfSGvVgntvCWGIpdZmrtZaWjG3pBaF16sesKxsU2LtQfJFqtHaoXyGSoB2Kbj2OFQ.webp";

// const narrationIndex = create((set)=>({
//     index : 0,
//     setIndex(){
//         set((state)=> {
//             if(state.index === firstMeet.length-1) {
//                 return state;
//             }
//             return {index: state.index + 1};
//     });
//   },
// }));

function MainPage({script}){
    
    return(
        <FlexContainer>
            <Page script={script.content} image={script.backgroundImg}/>
        </FlexContainer>
    )
}

export default MainPage;