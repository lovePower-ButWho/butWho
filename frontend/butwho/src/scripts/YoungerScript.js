import { NAMEENUM, TYPEENUM } from '../enum';


const volunteerMeeting = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default,  //top level await: async 안에서가 아니더라도 밖에서도 쓸 수 있음!
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'동아리 오티날! 옆자리에 누군가 앉아 나에게 먼저 반갑게 인사했다.'
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '오 되게 활발한 성격이네. 잘 맞을 것 같은데 친하게 지내야지!',
            answer: '안녕하세요! 이름이 어떻게 되시나요?',
            speaker: NAMEENUM.GIRL,
            mbti: 'E',
            lovePower: true,
        },
        {
            text: '어색할까 걱정했는데 말 걸어줘서 너무 고맙다..! 그런데 무슨 말을 이어나가야 하지?',
            answer: '엇 안녕하세요...!!',
            speaker: NAMEENUM.GIRL,
            mbti: 'I',
            lovePower: false,
        }
    ]
},{
    type:TYPEENUM.NARR,
    name:'',
    text:'이렇게 새로운 남자 후배를 알게 되었다.'
}]
};

const afterParty = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'동아리 OT가 끝나고 뒤풀이 회식에 왔다.'
},{
    type:TYPEENUM.NARR,
    name:'',
    text:'그런데 아까 그 후배, 나한테만 자꾸 한 번씩 건배를 더 한다.'
},{
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '뭐지 플러팅인가?',
            answer: '',
            speaker: NAMEENUM.GIRL,
            mbti: 'S',
            lovePower: false,
        },
        {
            text: '뭐야 나한테 관심있나? 얘랑 사귀면 어떠려나... 사귀다 헤어지면 동아리 나가야 하나?',
            answer: '',
            speaker: NAMEENUM.GIRL,
            mbti: 'N',
            lovePower: false,
        }
    ]
}]
};

const advice = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'점점 무르익는 회식 분위기. 갑자기 후배가 속상한 표정으로 고민상담을 했다.',
}, {
    type:TYPEENUM.NARR,
    name:NAMEENUM.YOUNGER,
    text:'입학하고 처음 쪽지시험을 쳤는데요.. 너무 망한 것 같아요 저 이 과목 재수강해야 하는 거 아니에요??',
},{
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '쪽지시험 성적 반영비율이 몇 퍼센트야? 쪽지시험은 한 학기에 몇 번 치는데?',
            answer: '비율은 10%고 한 학기에 4번 정도 친대요...',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'T',
            lovePower: false,
        },
        {
            text: '너무 속상하겠다...그 교수님 시험 어렵다고 소문났더라. 다른 사람들도 다 못 봤을거야~',
            answer: '정말요?? 그럼 진짜 다행이다~~',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'F',
            lovePower: true,
        }
    ]
}]
};

const studyTogether = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.YOUNGER,
    text:'누나 그러면 다음 시험은 같이 준비할래요? ',
},   {
    type:TYPEENUM.NARR,
    name:NAMEENUM.YOUNGER,
    text:'누나 공부할 거 있으면 가져와서 같이 해요!',
},  {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '오 완전 좋아! 다음주 중에 아무때나 연락 줘~',
            answer: '네 알겠어요!',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'P',
            lovePower: false,
        },
        {
            text: '난 화요일 목요일 공강이어서 이때 시간 돼!',
            answer: '그럼 화, 목 둘 다 같이해요!!',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'J',
            lovePower: true,
        }
    ]
}]
};


const cafeStudy = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'오늘은 동아리 후배와 카페에서 같이 공부하기로 한 날이다.',
},  {
    type:TYPEENUM.NARR,
    name:'행인',
    text:'카페는 어디로 갈까요?',
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '넌 어디가 좋아?',
            answer: '음.. 저기 보이는 저 카페 사람 별로 없는 것 같은데 저기 갈까요?',
            speaker: NAMEENUM.GIRL,
            mbti: 'P',
            lovePower: false,
        },
        {
            text: '며칠 전에 카톡으로 보내준 거기 가자. 내가 길 알아 왔어.',
            answer: '오 저도 거기 마음에 들었어요! 거기로 갑시다.',
            speaker: NAMEENUM.GIRL,
            mbti: 'J',
            lovePower: true,
        }
    ]
}]
};

const interrupt = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'열심히 공부 중인데 후배는 지루한 건지 계속 나에게 말을 걸었다',
},  {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '얘도 나만큼 활발하네! 텐션 맞으니까 재밌다~',
            answer: '(하던 공부를 멈추고 대화에 집중한다) 그래서 어떻게 됐는데?',
            speaker: NAMEENUM.GIRL,
            mbti: 'E',
            lovePower: true,
        },
        {
            text: '재밌긴 한데 기빨린다... 공부하고 싶어',
            answer: '미안한데... 지금은 공부하러 왔으니 얘기는 이따 밥 먹으면서 할까?',
            speaker: NAMEENUM.GIRL,
            mbti: 'I',
            lovePower: false,
        }
    ]
}]
};

const toilet = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.YOUNGER,
    text:'저 잠시 화장실 좀 다녀올게요!'
},{
    type:TYPEENUM.NARR,
    name:'',
    text:'(와장창)'
}, {
    type:TYPEENUM.NARR,
    name:'',
    text:'후배가 화장실을 가려고 일어나다가 음료가 담긴 머그컵을 깼다.'
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '(가방을 치우며) 같이 치우자. 내가 빗자루 가져올게.',
            answer: '죄송해요... 선배 화난 건 아니죠??',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'T',
            lovePower: false,
        },
        {
            text: '괜찮아? 안 다쳤어?',
            answer: '저는 진짜 괜찮아요ㅜㅜ 선배는 어디 다친 곳 없어요?',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'F',
            lovePower: true,
        }
    ]
}]
};
//여기 어떻게 구현해야하지?
const wayHomeConfession = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    
    content: [
        {
    type:TYPEENUM.NARR, 
    name:'',
    text:'공부를 끝내고 집에 돌아가는 길. 데려다 주겠다고 해서 같이 가는 중이다.'
}, {
    type:TYPEENUM.NARR, 
    name:NAMEENUM.YOUNGER,
    text:'선배 사실... 저 선배 좋아해요. 우리 사귈래요?'
},  {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '오... 언제부터 좋아했지?',
            answer: '사실 나도 좋아해!',
            speaker:NAMEENUM.YOUNGER,
            mbti: 'N',
            lovePower: false,
        },
        {
            text: '얘랑 있으면 즐겁고 사귀면 더 재밌을 것 같아!',
            answer: '나도 좋아! 우리 연애하자!',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'S',
            lovePower:false,
        }
    ]
}]
};

const datePlan = {backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
content: [
    {
type:TYPEENUM.NARR,
name:'',
text:'사귀게 되고 제대로 된 첫 데이트를 계획하는데 어디를 가야 하지? 제안해 보자.'
}, {
type: TYPEENUM.CHOICE,
choices: [
    { 
        text: '이벤트 중인 놀이동산',
        answer: '너무 좋아! 내 로망이였어',
        speaker: NAMEENUM.YOUNGER,
        mbti: 'E',
        lovePower: false,
    },
    {
        text: '새로 개봉한 영화',
        answer: '영화관은 첫 데이트 아니여도 자주 갈 수 있는데.. 놀이동산 어때?',
        speaker: NAMEENUM.YOUNGER,
        mbti: 'I',
        lovePower: true,
    }
]
}]
};

const amusementPark = {backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
content: [
    {
type:TYPEENUM.NARR,
name:'',
text:'그렇게 우리의 데이트 장소는 놀이동산으로 정해졌다.'
}, {
type: TYPEENUM.CHOICE,
choices: [
    { 
        text: '교복 빌려준다는데 우리 대여해서 입자!',
        answer: '일단 오케이. 그 다음엔 뭘 해야 하지?',
        speaker: NAMEENUM.YOUNGER,
        mbti: 'P',
        lovePower: false,
    },
    {
        text: '교복 빌려주는 곳 가서 빌리고 첫 기구로 바이킹 타는 거 어때?',
        answer: '나랑 다르게 되게 계획적이고 주도면밀 한 것 같아!',
        speaker: NAMEENUM.YOUNGER,
        mbti: 'J',
        lovePower: true,
    }
]
}]
};
const horrorHouse = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'우리 귀신의 집 귀신들이랑 셀카 찍으면 재밌을 것 같지 않아?'
},  {
    type:TYPEENUM.NARR,
    name:'',
    text:'나는 무서워서 영 별로인 것 같다... 어떻게 말할까?'
} ,{
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '헉 정말 아 난 잘 모르겠는데 무슨 말인지 알 것 같아. 좀 새로운 경험이잖아?',
            answer: '모르겠는데 알 것 같은건 뭐야.. 귀엽긴',
            speaker:NAMEENUM.YOUNGER,
            mbti: 'F',
            lovePower: true,
        },
        {
            text: '어? 그럴 수 있지. 근데 난 좀 그래…',
            answer: '이런 대답 조금 상처네..',
            speaker:NAMEENUM.YOUNGER,
            mbti: 'T',
            lovePower: false,
        }
    ]
}]
};
const rollerCoaster = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'롤러코스터를 타고 거의 꼭대기까지 간 상황, 너무 무서워서 상대에게 말을 건다.'
},  {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '이거 갑자기 멈추면 어떡해? 안전바 튼튼하겠지?',
            answer: '와...나도 방금 똑같은 생각했어',
            speaker: NAMEENUM.YOUNGER,
            mbti: 'N',
            lovePower: true,
        },
        {
            text: '와 너무 무서워... 언제 떨어지는 거야! 끼야으야으야야야앙!!!',
            answer: '(귀가 찢어질 것 같다..)',
            speaker:NAMEENUM.YOUNGER,
            mbti: 'S',
            lovePower: false,
        }
    ]
}]
};

export default [volunteerMeeting, afterParty, advice, studyTogether, cafeStudy, interrupt, horrorHouse];

//interrupt, toilet, wayHomeConfession, datePlan, rollerCoaster