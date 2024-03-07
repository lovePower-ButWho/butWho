import styled from "styled-components";
import { Narration, Conversation, Choice } from "../scripts/ScriptTexts";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Pages = styled.div`
  width: 500px;
  height: 1000px;
  background-color: #eee;
  border: 1px solid #aaa;
  position: relative;
`;

const gojyoImage = "https://i.namu.wiki/i/ZUrEBCVWrZwEIQ6KjWWNvsfSGvVgntvCWGIpdZmrtZaWjG3pBaF16sesKxsU2LtQfJFqtHaoXyGSoB2Kbj2OFQ.webp";

function DividedIntoThirds(){
  return (
    <FlexContainer>

      <Pages>
        <Narration text="Narration" />
      </Pages>

      <Pages>
        <Conversation name="Name" image={gojyoImage} text="Conversation" />
      </Pages>

      <Pages>
        <Choice text={["Choice1", "Choice2", "Choice3"]} />
      </Pages>

    </FlexContainer>
  );
}

export default DividedIntoThirds;