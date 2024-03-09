import styled from 'styled-components';
import { Conversation, Choice } from '../components/TextComponents';
import { TYPEENUM } from '../enum';
import useIndex from '../hooks/useIndex';
import useResult from '../hooks/useResult';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const PagesStyle = styled.div`
    width: 360px;
    height: 800px;
    background-image: url(${(props) => props.$image});
    background-size: 100%;
    border: 1px solid #aaa;
    position: relative;
`;

const Page = ({script, image})=> {

    const { index, choice, setChoiceIndex, handleClick } = useIndex(script);

    const plusScore = useResult();
    
//onClick={()=>createResult(script[index].choices[choice])}
    return (
        <PagesStyle onClick={handleClick} $image={image}>
            {script[index].type === TYPEENUM.NARR && <Conversation name={script[index].name} text={script[index].text} />}
            {(choice === null) && script[index].type === TYPEENUM.CHOICE && 
                <Choice choice={setChoiceIndex} text={script[index].choices} plusScore={plusScore}/>}
            {(choice !== null) && script[index].type === TYPEENUM.CHOICE && 
                <Conversation name={script[index].choices[choice].speaker}
                text={script[index].choices[choice].answer} />}
        </PagesStyle>
    );
}

//const gojyoImage = "https://i.namu.wiki/i/ZUrEBCVWrZwEIQ6KjWWNvsfSGvVgntvCWGIpdZmrtZaWjG3pBaF16sesKxsU2LtQfJFqtHaoXyGSoB2Kbj2OFQ.webp";

function MainPage({script}){
    
    return(
        <FlexContainer>
            <Page script={script.content} image={script.backgroundImg}/>
        </FlexContainer>
    )
}

export default MainPage;