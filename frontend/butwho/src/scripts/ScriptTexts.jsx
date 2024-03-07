import styled from "styled-components";

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
    font-weight: bold;
    font-size: 1.2em;
    color: #fff;
    background-color: #A374DB;
    min-height: 1.2em;
    width: 50%;
`

const ScriptBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(100,9,121,0.8) 80%,rgba(100,9,121,0.5) 100%);
    padding: 0.5em;
`

const Image = styled.img`
    width: 30%;
`

const ScriptText = styled.div`
color: #fff;
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


function Narration({text}) {
    return (
        <BottomContainer>
            <Script text={text} />
        </BottomContainer>
    );
}

function Conversation({name, image, text}) {
    return (
        <BottomContainer>
            <Script name={name} image={image} text={text} />
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

export {Narration, Conversation, Choice};