import styled from 'styled-components';
import {Conversation, Choice} from '../components/ScriptTexts';
import {createContext, useContext, useState} from 'react';
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

const NarrationIndex = createContext(null);

const Page = ({script, image})=> {
    const { index, increaseIndex } = useContext(NarrationIndex);
    const [ choice, setChoice ] = useState(null);

    //onClick 함수 새로 정의해서 type=narration일 때는 increaseIndex, choice===null일 때는 아무동작X, choice!=null이 아닐 때는 nextPage
    return (
        <PagesStyle onClick={script[index].type === 'narration' ? increaseIndex : ()=>{}} image={image}>
            {script[index].type === 'narration' && <Conversation name={'나'} image={gojyoImage} text={script[index].text} />}
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

function FirstMeetPage({script}){
    // const {index, setIndex} = narrationIndex();

    const [index, setIndex] = useState(0);
    const increaseIndex = ()=>{
        if(index === script.script.length-1) return;
        setIndex(index+1)
    };  //useContext 쓰지 말고 위에 Page 컴포넌트에서 useState로 처리

    // const nextPage = ()=>{
    //     if(index === script.script.length-1) {
    //       setPage(page+1)
    //     }
    //   };
    
    return(
        <FlexContainer>
            <NarrationIndex.Provider value={{index, increaseIndex}}>
                <Page script={script.script} image={script.backgroundImg}/>
            </NarrationIndex.Provider>
        </FlexContainer>
    )
}

export default FirstMeetPage;