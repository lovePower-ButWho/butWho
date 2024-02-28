import styled from 'styled-components';
import {Conversation, Choice} from '../components/ScriptTexts';
import backgroundImg from '../assets/images/firstMeet.svg';
import {createContext, useContext, useState} from 'react';
import firstMeet from '../scripts/Script';

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

const Page = ()=> {
    const { index, increaseIndex } = useContext(NarrationIndex);

    return (
        <PagesStyle onClick={increaseIndex} image={backgroundImg}>
            {firstMeet[index].type === 'narration' && <Conversation name='나' image={gojyoImage} text={firstMeet[index].text} />}
            {firstMeet[index].type === 'choice' && <Choice text={firstMeet[index].text} />}
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

function FirstMeetPage(){
    // const {index, setIndex} = narrationIndex();

    const [index, setIndex] = useState(0);
    const increaseIndex = ()=>{
        if(index === firstMeet.length-1) return;
        setIndex(index+1)
    };

    return(
        <FlexContainer>
            <NarrationIndex.Provider value={{index, increaseIndex}}>
                <Page/>
            </NarrationIndex.Provider>
        </FlexContainer>
    )
}

export default FirstMeetPage;