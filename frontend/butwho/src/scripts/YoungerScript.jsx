
const firstMeet = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default,  //top level await: async 안에서가 아니더라도 밖에서도 쓸 수 있음!
    content: [
        {
    type:'narration',
    name:'나',
    text:'설레는 신학기! 사진 동아리에 새로 가입했다'
}, {
    type: 'narration',
    name:'나',
    text: '음... 동아리 첫 모임인데 아무도 말을 하지 않네...'
}, {
    type: 'choice',
    choices: [
        { 
            text: '조금 어색하긴 하지만 내가 먼저 말을 꺼내 볼까?',
            answer: '내가 먼저 말을 꺼내자 한 선배가 잘 대답해 줘서 어색한 분위기가 조금 깨졌다. 역시 말을 꺼내길 잘했어!',
            mbti: 'E',
            lovePower: true,
        },
        {
            text: '너무 어색해... 나도 그냥 조용히 있어야겠다.',
            answer: '침묵의 상태로 인고의 시간이 흐르던 중 누군가가 말을 꺼내기 시작했고,  한 선배가 동조해주기 시작했다.',
            mbti: 'I',
            lovePower: false,
        }
    ]
}]
};

const secondMeet = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'한동안 선배와 즐겁게 대화를 나누다가 선배가 자기가 찍은 사진을 보여주었다.'
}, {
    type: 'narration',
    name:'나',
    text: '사진을 잘 찍었다고 칭찬해 주고 싶은데 어떻게 칭찬해 주는 게 좋을까?'
}, {
    type: 'choice',
    choices: [
        { 
            text: '구도와 색감 구조가 너무 조화로워요!',
            answer: '내가 사진을 보여준 의도는 이게 아닌데...',
            mbti: 'S',
            lovePower: false,
        },
        {
            text: '현대인의 쓸쓸함이 잘 드러난 사진 같아요!',
            answer: '이 의미를 캐치한 사람은 너가 처음이야!',
            mbti: 'N',
            lovePower: true,
        }
    ]
}]
};

const letsgo = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'동아리원들과 같이 이야기를 나누면서, 서로 더 친해지고 분위기도 무르익었다.',
}, {
    type: 'narration',
    name: '선배',
    text: '다음주쯤 같이 출사 나갈까?'
}, {
    type: 'choice',
    choices: [
        { 
            text: '네! 다음 주쯤 시간 한 번 맞춰봐요!',
            answer: '다음 주 언제?',
            mbti: 'P',
            lovePower: false,
        },
        {
            text: '다음 주 어느 요일이 괜찮으세요?',
            answer: '나는 월요일, 수요일 가능해!',
            mbti: 'J',
            lovePower: true,
        }
    ]
}]
};

export default [firstMeet, secondMeet, letsgo];