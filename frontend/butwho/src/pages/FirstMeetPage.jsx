import styled from 'styled-components';
import {Conversation, Choice} from '../components/ScriptTexts';
import backgroundImg from '../assets/images/firstMeet.svg';
import {create} from 'zustand';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Pages = styled.div`
    width: 360px;
    height: 800px;
    background-image: url(${(props) => props.image});
    background-size: 100%;
    border: 1px solid #aaa;
    position: relative;
`;

const firstMeet = [{
    type:'narration',
    text:'설레는 신학기! 사진 동아리에 새로 가입했다'
}, {
    type: 'narration',
    text: '음... 동아리 첫 모임인데 아무도 말을 하지 않네...'
}, {
    type: 'choice',
    text: ['조용히 기다린다', '누군가에게 말을 건넨다']
}];

const gojyoImage = "https://i.namu.wiki/i/ZUrEBCVWrZwEIQ6KjWWNvsfSGvVgntvCWGIpdZmrtZaWjG3pBaF16sesKxsU2LtQfJFqtHaoXyGSoB2Kbj2OFQ.webp";

const narrationIndex = create((set)=>({
    index : 0,
    setIndex(){
        set((state)=> {
            if(state.index === firstMeet.length-1) {
                return state;
            }
            return {index: state.index + 1};
    });
  },
}));

function FirstMeetPage(){
    const {index, setIndex} = narrationIndex();

    return(
        <FlexContainer>
            <Pages onClick={setIndex} image={backgroundImg}>
                {firstMeet[index].type === 'narration' && <Conversation name='나' image={gojyoImage} text={firstMeet[index].text} />}
                {firstMeet[index].type === 'choice' && <Choice text={firstMeet[index].text} />}
            </Pages>
        </FlexContainer>
    )
}

export default FirstMeetPage;