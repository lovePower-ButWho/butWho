import styled from 'styled-components';
import { Conversation, Choice } from '../components/TextComponents';
import { useState } from 'react';
import backgroundImg from '../assets/images/firstMeet.svg'

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

    const increaseIndex = () => {
        if(index === (script.length)-1) return;
        setIndex(index+1);
    };
    //onClick 함수 새로 정의해서 type=narration일 때는 increaseIndex, choice===null일 때는 아무동작X, choice!=null이 아닐 때는 nextPage
    return (
        <PagesStyle onClick={script[index].type === 'narration' ? increaseIndex : ()=>{}} image={image}>
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