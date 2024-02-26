import styled from "styled-components";
import React from 'react'
import create from 'zustand';

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
`

const ScriptBox = styled.div`
    font-family: 'pretendard-regular';
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    background: linear-gradient(0deg, rgba(255,248,248,0.7) 0%, rgba(255,248,248,0.7) 80%,rgba(255,255,255) 100%);
    padding: 0.5em;
`

const Image = styled.img`
    width: 30%;
`

const ScriptText = styled.div`
    color: #000;
    font-size: 0.9em;
`

function Script({name, image, text}){
  return (
    <FlexContainer>
        <Name>{name}</Name>
        <ScriptBox>
            {image&&<Image src={image} />}
            <ScriptText>{text}</ScriptText>
        </ScriptBox>
    </FlexContainer>
  );
}

const narrationIndex = create((set)=>({
    index : 0,
    increase(){
        set((state)=> ({index: state.index + 1}))
    },
}))

function Conversation({name, image, text}) {

    const {index, increase} = narrationIndex();

    return (
        <BottomContainer onClick={increase}>
            <Script name={name} image={image} text={text[index]} />
        </BottomContainer>
    );
}

function Choice({text:[...choices]}) {
    return (
        <BottomContainer>
            {choices.map((choice,i) => {
                return <Script name={`#${i+1}`} text={choice} />
            })}
        </BottomContainer>
    );
}

export {Conversation, Choice};