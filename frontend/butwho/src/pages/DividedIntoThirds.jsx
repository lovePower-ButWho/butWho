import styled from "styled-components";
import backgroundImg from '../assets/images/firstMeet.svg';
import { Conversation, Choice } from "../components/ScriptTexts";
import firstMeet from '../scripts/Script';
import { create } from 'zustand';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Pages = styled.div`
  width: 360px;
  height: 800px;
  background-image: url(${(props) => props.image});
  background-size: 100%;
  border: 1px solid #aaa;
  position: relative;
`;

const gojyoImage = "https://i.namu.wiki/i/ZUrEBCVWrZwEIQ6KjWWNvsfSGvVgntvCWGIpdZmrtZaWjG3pBaF16sesKxsU2LtQfJFqtHaoXyGSoB2Kbj2OFQ.webp";

const narrationIndex = create((set)=>({
  index : 0,
  increase(){
      set((state)=> ({index: state.index + 1}))
  },
}))


function DividedIntoThirds(){

  const {index, increase} = narrationIndex();

  return (
    <FlexContainer>
      <Pages image={backgroundImg}>
        <Conversation name="나" image={gojyoImage} text={firstMeet[index]} />
        {/* {firstMeet[index].type === 'choice' && <Choice name="나" text={firstMeet[index].text} />}       */}
        <button onClick={increase}>다음</button>
      </Pages>
      {/* <Pages>
        <Choice text={["Choice1", "Choice2", "Choice3"]} />
      </Pages> */}
    </FlexContainer>
  );
}

export default DividedIntoThirds;