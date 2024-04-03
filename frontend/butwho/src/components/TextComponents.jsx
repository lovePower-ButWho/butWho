import ImageMatch from "../scripts/ImageMatch";
import { NAMEENUM } from "../enum";
import { React } from "react";
import {
  BottomContainer,
  FlexContainer,
  Name,
  ScriptBox,
  Image,
  ScriptText,
} from "../Styles/ComponentStyle";

function Script({ minheight, name, image, text, onClick }) {
  return (
    <FlexContainer onClick={onClick}>
      {image && <Image $name={name} src={image} />}
      <Name>{name}</Name>
      <ScriptBox $minheight={minheight}>
        <ScriptText>{text}</ScriptText>
      </ScriptBox>
    </FlexContainer>
  );
}

function Conversation({ name, text, onClick }) {
  return (
    <BottomContainer onClick={onClick}>
      <Script minheight={5} name={name} image={ImageMatch[name]} text={text} />
    </BottomContainer>
  );
}

function Choice({ text: [...choices], choice: setChoiceIndex, plusScore }) {
  const handleChoice = (index) => () => {
    //함수를 리턴하는 함수를 실행(curring 기법)
    setChoiceIndex(index);
    plusScore(choices[index].mbti, choices[index].lovePower);
  };

  return (
    <BottomContainer>
      {choices.map((choice, i) => {
        return (
          <Script
            minheight={3}
            key={i + 1}
            name={`#${i + 1}`}
            text={choice.text}
            onClick={handleChoice(i)}
          />
        );
      })}
    </BottomContainer>
  );
}

export { Conversation, Choice };
