import { NAMEENUM, TYPEENUM } from '../enum';

const firstMeet = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default,  //top level await: async 안에서가 아니더라도 밖에서도 쓸 수 있음!
    content: [
        {
    type:TYPEENUM.NARR,
    name: NAMEENUM.GIRL,
    text:'설레는 신학기! 사진 동아리에 새로 가입했다'
}, {
    type: TYPEENUM.NARR,
    name: NAMEENUM.GIRL,
    text: '음... 동아리 첫 모임인데 아무도 말을 하지 않네...'
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '조금 어색하긴 하지만 내가 먼저 말을 꺼내 볼까?',
            answer: '내가 먼저 말을 꺼내자 한 선배가 잘 대답해 줘서 어색한 분위기가 조금 깨졌다. 역시 말을 꺼내길 잘했어!',
            speaker: NAMEENUM.GIRL,
            mbti: 'E',
            lovePower: true,
        },
        {
            text: '너무 어색해... 나도 그냥 조용히 있어야겠다.',
            answer: '침묵의 상태로 인고의 시간이 흐르던 중 누군가가 말을 꺼내기 시작했고,  한 선배가 동조해주기 시작했다.',
            speaker: NAMEENUM.GIRL,
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
    type:TYPEENUM.NARR,
    name: NAMEENUM.GIRL,
    text:'한동안 선배와 즐겁게 대화를 나누다가 선배가 자기가 찍은 사진을 보여주었다.'
}, {
    type: TYPEENUM.NARR,
    name: NAMEENUM.GIRL,
    text: '사진을 잘 찍었다고 칭찬해 주고 싶은데 어떻게 칭찬해 주는 게 좋을까?'
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '구도와 색감 구조가 너무 조화로워요!',
            answer: '내가 사진을 보여준 의도는 이게 아닌데...',
            speaker: NAMEENUM.OLDER,
            mbti: 'S',
            lovePower: false,
        },
        {
            text: '현대인의 쓸쓸함이 잘 드러난 사진 같아요!',
            answer: '이 의미를 캐치한 사람은 너가 처음이야!',
            speaker: NAMEENUM.OLDER,
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
    type:TYPEENUM.NARR,
    name: NAMEENUM.GIRL,
    text:'동아리원들과 같이 이야기를 나누면서, 서로 더 친해지고 분위기도 무르익었다.',
}, {
    type: TYPEENUM.NARR,
    name: NAMEENUM.OLDER,
    text: '다음주쯤 같이 출사 나갈까?'
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '네! 다음 주쯤 시간 한 번 맞춰봐요!',
            answer: '다음 주 언제?',
            speaker: NAMEENUM.OLDER,
            mbti: 'P',
            lovePower: false,
        },
        {
            text: '다음 주 어느 요일이 괜찮으세요?',
            answer: '나는 월요일, 수요일 가능해!',
            speaker: NAMEENUM.OLDER,
            mbti: 'J',
            lovePower: true,
        }
    ]
}]
};

const badPicture = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'선배',
    text:'이거 좀 못 찍은 거 같지 않아?',
}, {
    type: 'narration',
    name: '나',
    text: '솔직히 조금 못 찍은 거 같긴 한데.. 어떻게 대답해야 하지?'
}, {
    type: 'choice',
    choices: [
        { 
            text: '구도를 조금만 더 신경 쓰면 괜찮을 것 같아요!',
            answer: '그렇지? 나도 알고 있어...',
            mbti: 'T',
            lovePower: false,
        },
        {
            text: '지금도 괜찮은데요? 다음에 더 잘 찍으면 되죠!',
            answer: '그래? 그럼 다음에 같이 찍으러 갈까?',
            mbti: 'F',
            lovePower: true,
        }
    ]
}]
};

const takeOurPic = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'둘만의 사진을 남기고 싶은데 어떻게 하지',
}, {
    type: 'choice',
    choices: [
        { 
            text: '지나가는 사람한테 부탁하자!',
            answer: '오 어떤 분한테 부탁하지..?',
            mbti: 'E',
            lovePower: false,
        },
        {
            text: '여기에 세우면 되지 않을까?',
            answer: '오 고정될 것 같아 한번 세워봐!!',
            mbti: 'I',
            lovePower: false,
        }
    ]
}]
};

const confession = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'열심히 사진을 찍다 보니 어느새 저녁! 늘어난 사진의 양만큼 내 마음도 커졌다.',
},{
    type:'narration',
    name:'나',
    text:'노을이 지고 있는데 어떤 멘트로 고백할까?',
},{
    type: 'choice',
    choices: [
        { 
            text: '우리 사귀자.',
            answer: '그...그래.',
            mbti: 'S',
            lovePower: false,
        },
        {
            text: '앞으로도 오빠랑 계속 노을 보고 싶어.',
            answer: '나도 또 보러오고 싶어. 나랑 사귈래?',
            mbti: 'N',
            lovePower: true,
        }
    ]
}]
};
const regret = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'그렇게 시작된 두근두근 1일! 그런데 고백에 그만 정신이 팔려서.. 어...!',
},{
    type: 'narration',
    name: '선배',
    text: '노을 사진을 못 찍었어!....'
}, {
    type: 'choice',
    choices: [
        { 
            text: '다음에 또 찍으러 오면 되지!',
            answer: '물론 다음도 있지만... 오늘 이 순간을 사진으로 못 남긴 게 너무 아쉬워',
            mbti: 'T',
            lovePower: false,
        },
        {
            text: '대신 우리의 소중한 순간들은 우리 마음속에 남아있잖아! 그러니까 괜찮아',
            answer: '그래? 그럼 다음에 같이 찍으러 갈까?',
            mbti: 'F',
            lovePower: true,
        }
    ]
}]
};
const train = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'노을 사진을 찍지 못한 아쉬움을 뒤로하고 이제 집에 가려고 한다.',
}, {
    type:'narration',
    name:'선배',
    text:'우리 몇 시 기차였지?',
},{
    type: 'choice',
    choices: [
        { 
            text: '에엥?! 벌써 표 끊어?',
            answer: '흠.. 표 매진되면 어쩌려고 미리 안해두지? 내 여자친구지만, 정말이지 대책 없군..',
            mbti: 'P',
            lovePower: false,
        },
        {
            text: '9시 기차고 슬슬 출발해야해!',
            answer: '미리 다 계획을 세워뒀구나. ',
            mbti: 'J',
            lovePower: true,
        }
    ]
}]
};
const restaurantReserv = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'곧 선배와의 100일. 만나서 같이 놀고 저녁을 먹기로 했다. 어디서 먹지?',
}, {
    type: 'choice',
    choices: [
        { 
            text: '한강 뷰가 예쁜 레스토랑이 있다던데 거기 가볼까?',
            answer: '한강 근처라면 어느 쪽 한강? 우리 동네에서 어느 정도 걸리는지 찾아볼게.',
            mbti: 'P',
            lovePower: false,
        },
        {
            text: '이번주 토요일 저녁 시간대 예약할 수 있는 분위기 좋은 가게를 찾아볼까?',
            answer: '좋아! 저녁시간이라 차가 밀릴 수 있으니 동선 괜찮은 찾아보자.',
            mbti: 'J',
            lovePower: true,
        }
    ]
}]
};

const whatToDo = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'식당 예약은 끝났고, 이제 데이트 날 어떤 걸 할지 정해야 한다.',
}, {
    type: 'choice',
    choices: [
        { 
            text: '놀이공원에서 사진도 찍고~ 놀고 한 다음 커플링 사러 갈까?',
            answer: '하루만에 놀이공원이랑 커플링 둘 다? 조금 피곤할 수도 있지 않을까...?',
            mbti: 'E',
            lovePower: false,
        },
        {
            text: '둘만의 시간을 보낼 수 있는 공방 같은 곳에 가서 커플링 만드는 거 어때?',
            answer: '좋아! 식당이랑 거리 가까운 곳에 공방 있는지 찾아보자.',
            mbti: 'I',
            lovePower: true,
        }
    ]
}]
};

const coupleRing = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'공방에 와서 커플링을 맞췄다! 가장 먼저 든 생각은?',
}, {
    type: 'choice',
    choices: [
        { 
            text: '아 반지 너무 예쁘다! 맨날 끼고 다녀야지~',
            answer: '나도 맨날 끼고 다닐 거야~~',
            mbti: 'S',
            lovePower: false,
        },
        {
            text: '반지 너무 소중한데 혹시나 잃어버리면 어떡하지? 다시 구할 수도 없는 건데...ㅜㅜ',
            answer: '맞아 반지 너무 소중해ㅜㅜ 우리 꼭 안 잃어버리게 맨날 끼고 다니자!',
            mbti: 'N',
            lovePower: false,
        }
    ]
}]
};

const sickBF = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:'narration',
    name:'나',
    text:'공방 데이트가 끝나고 밥을 먹으러 가는 길. 그런데 선배가 몸이 안 좋아 보인다.',
}, {
    type: 'choice',
    choices: [
        { 
            text: '어떡해 몸 많이 안 좋아?? 무리하는 거 아니야??',
            answer: '괜찮아 오늘 100일인데 밥은 먹어야지!',
            mbti: 'F',
            lovePower: false,
        },
        {
            text: '약은 먹었어? 많이 안 좋으면 들어가 봐야 하는 거 아니야?',
            answer: '그래도 밥은 먹고 갈 수 있는데...ㅜ 너는 지금 집에 가고 싶은 거야?',
            mbti: 'T',
            lovePower: true,
        }
    ]
}]
};

export default [firstMeet, secondMeet, letsgo, badPicture,takeOurPic,confession,regret,train,restaurantReserv, whatToDo, coupleRing, sickBF];