
const firstMeet = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default,  //top level await: async 안에서가 아니더라도 밖에서도 쓸 수 있음!
    script: [
        {
    type:'narration',
    text:'설레는 신학기! 사진 동아리에 새로 가입했다'
}, {
    type: 'narration',
    text: '음... 동아리 첫 모임인데 아무도 말을 하지 않네...'
}, {
    type: 'choice',
    choices: [
        { 
            text: '조금 어색하긴 하지만 내가 먼저 말을 꺼내 볼까?',
            answer: '내가 먼저 말을 꺼내자 한 선배가 잘 대답해 줘서 어색한 분위기가 조금 깨졌다.'
        },
        {
            text: '너무 어색해... 나도 그냥 조용히 있어야겠다.',
            answer: '역시 말을 꺼내길 잘했어!'
        }
    ]
}]
};

const secondMeet = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    script: [
        {
    type:'narration',
    text:'설레는 신학기! 사진 동아리에 새로 가입했다'
}, {
    type: 'narration',
    text: '음... 동아리 첫 모임인데 아무도 말을 하지 않네...'
}, {
    type: 'choice',
    choices: [
        { 
            text: '조금 어색하긴 하지만 내가 먼저 말을 꺼내 볼까?',
            answer: '내가 먼저 말을 꺼내자 한 선배가 잘 대답해 줘서 어색한 분위기가 조금 깨졌다.'
        },
        {
            text: '너무 어색해... 나도 그냥 조용히 있어야겠다.',
            answer: '역시 말을 꺼내길 잘했어!'
        }
    ]
}]
};

export default [firstMeet, secondMeet];