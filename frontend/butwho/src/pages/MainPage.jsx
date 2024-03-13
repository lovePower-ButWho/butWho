import styled from 'styled-components';
import { Conversation, Choice } from '../components/TextComponents';
import { TYPEENUM } from '../enum';
import useIndex from '../hooks/useIndex';
import useResult from '../hooks/useResult';
import { PageContext } from '../contexts/PageContext';

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

const Page = ()=> {

    const { script, backgroundImg, choice, setChoiceIndex, handleClick } = useIndex();

    const plusScore = useResult();

    
//onClick={()=>createResult(script.choices[choice])}
    return (
        <PagesStyle onClick={handleClick} $image={backgroundImg}>
            {script.type === TYPEENUM.NARR && <Conversation name={script.name} text={script.text} />}
            {(choice === null) && script.type === TYPEENUM.CHOICE && 
                <Choice choice={setChoiceIndex} text={script.choices} plusScore={plusScore}/>}
            {(choice !== null) && script.type === TYPEENUM.CHOICE && 
                <Conversation name={script.choices[choice].speaker}
                text={script.choices[choice].answer} />}
        </PagesStyle>
    );
}

function MainPage(){
    
    return(
        <FlexContainer>
            <Page />
        </FlexContainer>
    )
}

export default MainPage;