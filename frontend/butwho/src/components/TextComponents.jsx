import styled from "styled-components";
import ImageMatch from "../scripts/ImageMatch";
import { NAMEENUM } from "../enum";
import {React} from 'react';

const BottomContainer = styled.div`
    position: absolute;
    top: 70%;
    width: 100%;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
`;

const Name = styled.div`
    font-family: 'pretendard-regular';
    font-size: 0.9em;
    text-align: right;
    padding: 5px 10px;
    color: #fff;
    background-color: #AFADFF;
    min-height: 1.2em;
    width: 40%;
    z-index: 10;
`

const ScriptBox = styled.div`
    font-family: 'pretendard-regular';
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0em 0.5em;
    gap: 0.5em;
    z-index: 10;
    user-select: none;
    background: linear-gradient(0deg, rgba(255,248,248,0.7) 0%, rgba(255,248,248,0.7) 80%,rgba(255,255,255) 100%);
    min-height: ${({$minheight})=>$minheight}rem;
`

const Image = styled.img`
    position: absolute;
    z-index: 1;
    bottom: 5em; 
    width: 70%;
    ${(props) => (props.$name === NAMEENUM.GIRL) ? 'left: 0;' : 'right: 0;'}
`

const ScriptText = styled.div`
    color: #000;
    font-size: 0.9em;
`

function Script({minheight, name, image, text, onClick}) {
  return (
    <FlexContainer onClick={onClick}>
        {image&&<Image $name={name} src={image} />}
        <Name>{name}</Name>
        <ScriptBox $minheight={minheight}>
            <ScriptText>{text}</ScriptText>
        </ScriptBox>
    </FlexContainer>
  );
}


function Conversation({name, text, onClick}) {
 
    return (
        <BottomContainer onClick={onClick}>
            <Script minheight={5} name={name} image={ImageMatch[name]} text={text} />
        </BottomContainer>
    );
}

function Choice({text:[...choices], choice: setChoiceIndex, plusScore}) {

    const handleChoice = (index) => () => { //함수를 리턴하는 함수를 실행(curring 기법)
        setChoiceIndex(index);  
        plusScore(choices[index].mbti, choices[index].lovePower);
    }

    return (
        <BottomContainer>
            {choices.map((choice,i) => {
                return <Script minheight = {3} key={i+1} name={`#${i+1}`} text={choice.text} onClick={handleChoice(i)}/>
            })}
        </BottomContainer>
    );
}

export { Conversation, Choice };