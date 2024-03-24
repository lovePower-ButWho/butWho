import styled from 'styled-components';
import { Conversation, Choice } from '../components/TextComponents';
import { TYPEENUM } from '../enum';
import useIndex from '../hooks/useIndex';
import useResult from '../hooks/useResult';

const PagesStyle = styled.div`
    width: 360px;
    height: 800px;
    background-image: url(${(props) => props.$image});
    background-size: 100%;
    border: 1px solid #aaa;
    position: relative;
`;

const MainPage = ()=> {

    const { script, backgroundImg, choice, setChoiceIndex, handleClick } = useIndex();
    const { sendResult, plusScore } = useResult();

    return (
        <PagesStyle onClick={handleClick(sendResult)} $image={backgroundImg}>
            {script?.type === TYPEENUM.NARR && <Conversation name={script.name} text={script.text} />}
            {(choice === null) && script?.type === TYPEENUM.CHOICE && 
                <Choice choice={setChoiceIndex} text={script.choices} plusScore={plusScore}/>}
            {(choice !== null) && script?.type === TYPEENUM.CHOICE && 
                <Conversation name={script.choices[choice].speaker}
                text={script.choices[choice].answer} />}
        </PagesStyle>
    );
}

export default MainPage;