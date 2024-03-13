import { NAMEENUM, TYPEENUM } from '../enum';


const classRoom = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default,  //top level await: async 안에서가 아니더라도 밖에서도 쓸 수 있음!
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'3월 2일 처음으로 고등학교 교실에 가서 친구랑 같이 아무 자리에나 앉았다. '
}, {
    type: TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text: '앞에 남자애 두 명이 앉아 있다.'
}, {
    type: TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text: '문득 오늘 점심 먹고 집에 가는지, 오전 수업만 하고 집에 가는지 궁금해졌다.'
},{
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '앞에 있는 남자애들한테 물어볼까? 이 기회에 말도 걸고 친해져야지!',
            answer: '내가 먼저 말을 걸긴 했는데 저쪽도 상당하네.',
            speaker: NAMEENUM.GIRL,
            mbti: 'E',
            lovePower: false,
        },
        {
            text: '이따 쌤 오시면 알려주시겠지.. 그냥 기다리자.... 교실도 조용하네',
            answer: '누군가가 먼저 말을 걸었다. 기 빨리긴 하는데 은근 재밌어서 말을 계속 걸어줬으면 좋겠어.',
            speaker: NAMEENUM.GIRL,
            mbti: 'I',
            lovePower: false,
        }
    ]
}]
};

const cafeteria = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'한참 얘기를 나누고, 어쩌다가 네명이 모여 밥을 먹게 되었다. '
}, {
    type: TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text: "밥을 먹는 데,  한 남자아이가 ‘지금 우리학교는' 이야기를 꺼냈다."
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '야, 근데 조일현 진짜 예쁘더라.',
            answer: '음~~...',
            speaker: NAMEENUM.PEER,
            mbti: 'S',
            lovePower: false,
        },
        {
            text: '니네는 만약 좀비 나타나면 어떻게 할 거임? 우리가 빠를까? 좀비가 빠를까? 나라면... ',
            answer: '얘봐라...? 귀엽네...',
            speaker: NAMEENUM.PEER,
            mbti: 'N',
            lovePower: true,
        }
    ]
}]
};

const zombie = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.PEER,
    text:'근데 너는 너 친구가 물리면 어떻게 할 거야?',
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '뭐 어떡해. 나라도 도망가야지.',
            answer: '역시 그렇지 ? 도망밖엔 답이 없다 ㅋㅋ.',
            speaker: NAMEENUM.PEER,
            mbti: 'T',
            lovePower: true,
        },
        {
            text: '재갈을 물리든 손발을 묶든 어떻게든 살릴 방법을 찾아볼 것 같아..',
            answer: '근데 상식적으로 좀비를 살리는게 말이 되나? 도망가야지..',
            speaker: NAMEENUM.PEER,
            mbti: 'F',
            lovePower: false,
        }
    ]
}]
};

const planner = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.PEER,
    text:'야, 나 이제 고딩이니까.. 플래너 한번 써보려고!',
},  {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '헐 나도 이제 플래너 쓰려고 사놨어!',
            answer: '흠, 사긴 했는데 안쓰는 건가?',
            speaker: NAMEENUM.PEER,
            mbti: 'P',
            lovePower: false,
        },
        {
            text: '어 나도 지금 스타벅스 플래너 쓰고 있는데 진짜 좋아. 위클리 먼슬리 쓰는 공간 다 있고...!',
            answer: '얘봐라...? 제법인데?',
            speaker: NAMEENUM.PEER,
            mbti: 'J',
            lovePower: true,
        }
    ]
}]
};


const bar = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'오늘은 1월 1일. 나도 이제 성인이다! 친구들과 당당하게 술집에 들어와 술을 마시는데...!!',
},  {
    type:TYPEENUM.NARR,
    name:'행인',
    text:'혹시 여자 세 분이세요? 마침 저희도 남자 세 명인데 같이 드실래요?',
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '오 좋네! 재밌겠다. 다 같이 놀면 더 재밌으니까~',
            answer: '그런데 우리끼리 놀기로 했으니까 오늘은 그냥 우리끼리 놀자! 조금 불편해ㅜㅜ',
            speaker: NAMEENUM.GIRL,
            mbti: 'E',
            lovePower: false,
        },
        {
            text: '우리끼리 놀기로 했는데 우리끼리 놀자~',
            answer: '죄송합니다 저희가 일행이 있어서요ㅜㅜ 즐거운 시간 보내세요!',
            speaker: NAMEENUM.GIRL,
            mbti: 'I',
            lovePower: true,
        }
    ]
}]
};

const icecream = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'그렇게 사람들을 보내고 계속 술을 마시다 보니 슬슬 취기가 올랐다. 시원한 게 먹고 싶은데, 때마침 전화가 왔다.',
},  {
    type:TYPEENUM.NARR,
    name:'친구',
    text:'야 뭐햐냐?',
},{
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'나 술 마시는 중~ 너 근처면 여기 OO맥주로 아이스크림 세 개만 사와라.',
},{
    type:TYPEENUM.NARR,
    name:'친구',
    text:'아 싫어. 내가 니 아이스크림을 왜 사가 거기까지',
},{
    type:TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text:'그럼 전화는 왜 했냐? 끊어~',
},{
    type:TYPEENUM.NARR,
    name:'',
    text:'그렇게 전화를 끊었는데, 얼마 지나지 않아 친구가 아이스크림을 들고 나타났다. 심지어 내가 좋아하는 초콜릿 쭈쭈바 아이스크림이었다.',
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '헐~ 감동. 이걸 기억하고 있네? 모를 줄 알았는데.',
            answer: '몰랐는데? 그냥 내가 좋아하는 거라서 사온 거야.',
            speaker: NAMEENUM.PEER,
            mbti: 'F',
            lovePower: true,
        },
        {
            text: '어차피 사올 거면 처음부터 알았다고 하지ㅋㅋ 고맙다 잘 먹을게~',
            answer: '진짜 사 와도 난리야.',
            speaker: NAMEENUM.PEER,
            mbti: 'T',
            lovePower: false,
        }
    ]
}]
};

const schoolBand = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'오랫동안 해보고 싶었던 밴드 동아리...!'
}, {
    type: TYPEENUM.NARR,
    name:'',
    text: "그에게 동아리 활동을 같이 하자고 설득했고 그는 나의 제안을 흔쾌히 승낙했다."
},{
    type: TYPEENUM.NARR,
    name:'',
    text: "우리는 같이 기타를 치다가 담소를 나누었다."
},{
    type: TYPEENUM.NARR,
    name:NAMEENUM.PEER,
    text: "어제 뭐했어?"
},{
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '어제 친구랑 중국집 갔는데 거기 탕수육 진짜 맛있더라. 너 거기 OO 중국집 가 본 적 있어? 진짜 대박이야',
            answer: '나는 어제 뭐했냐고 물어봤는데.. 내말에 집중을 안하나?',
            speaker: NAMEENUM.PEER,
            mbti: 'N',
            lovePower: false,
        },
        {
            text: '나 어제 일어나서 밥 먹고 친구랑 산책 좀 하다가 과제도 하고 저녁에 탕수육 먹었어',
            answer: '넌 하루 일과를 다 기억하고 있구나!',
            speaker: NAMEENUM.PEER,
            mbti: 'S',
            lovePower: true,
        }
    ]
}]
};

const practicePlan = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:NAMEENUM.PEER,
    text:'우리 합주일정 짜야할 것 같은데.. 언제가 좋을까?'
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '다음주에 두번 정도 모일까?',
            answer: '좋아 시간 맞을 때 두번정도 보면 딱 좋을 것 같네!',
            speaker: NAMEENUM.PEER,
            mbti: 'P',
            lovePower: true,
        },
        {
            text: '앞으로도 각자 되는 시간 말해볼래? 저녁 시간이 좋을 것 같고 한 번 모이면 두 시간 정도는 해야 될 것 같아',
            answer: '흠.. 언제 시간이 될 지 모르겠어서 확답을 못주겠어',
            speaker: NAMEENUM.PEER,
            mbti: 'J',
            lovePower:false,
        }
    ]
}]
};

const peerConfession = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'합주가 끝나고 둘이 같이 집에 가는 길. '
}, {
    type: TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text: "야, 나 과팅 빵꾸 나서 채워달라고 하는데 나갈까 말까?"
}, {
    type: TYPEENUM.NARR,
    name:NAMEENUM.PEER,
    text: "꼭 너가 나가야 돼? 내가 나갈게"
},
{
    type: TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text: "엥. 왜?"
},{
    type: TYPEENUM.NARR,
    name:NAMEENUM.PEER,
    text: "진짜 몰라서 물어?"
},{
    type: TYPEENUM.NARR,
    name:NAMEENUM.GIRL,
    text: "...."
},{
    type: TYPEENUM.NARR,
    name:'',
    text: "그렇게 우리 둘은 얼떨결에 사귀게 되었다."
}]
};

const songPoint = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'축제 준비를 위해 합주할 곡을 정한다. 내가 좋아하는 곡이 후보로 있다.'
}, {
    type: TYPEENUM.NARR,
    name:NAMEENUM.PEER,
    text: "이 노래를 좋아하는 이유가 뭐야?"
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '가사가 예뻐서',
            answer: '그래도 노래를 들을 땐 멜로디 먼저 듣게 되지 않아?',
            speaker: NAMEENUM.PEER,
            mbti: 'N',
            lovePower: false,
        },
        {
            text: '멜로디가 좋아서',
            answer: '나도 그 노래 멜로디 때문에 좋아해..!',
            speaker: NAMEENUM.PEER,
            mbti: 'S',
            lovePower: true,
        }
    ]
}]
};
const whereTogo = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'짬내서 데이트를 가자고 약속을 잡는 상황. 내가 어디에 갈 지 제안을 하는데…'
},  {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '그날 락페 있던데 티켓팅 할까?',
            answer: '나 락페가고 싶어했던 거 어떻게 알았어?',
            speaker: NAMEENUM.PEER,
            mbti: 'E',
            lovePower: true,
        },
        {
            text: '조용한 재즈바 갈까?',
            answer: '흠... 그런 곳은 한번도 안가봐서 적응이 되려나 모르겠네',
            speaker: NAMEENUM.PEER,
            mbti: 'I',
            lovePower: false,
        }
    ]
}]
};
const whatToeat = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'저녁을 먹고 합주를 시작한다고 한다.'
}, {
    type: TYPEENUM.NARR,
    name:'',
    text: "합주 가기 전에 남자친구와 저녁을 같이 먹고 가기로 약속했다."
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '근처에 식당이 닭갈비집이랑 냉면집이랑 분식집 있네. 셋 중에 어디 갈래?',
            answer: '음.. 끌리는 건 없는 것 같아.',
            speaker: NAMEENUM.PEER,
            mbti: 'J',
            lovePower: false,
        },
        {
            text: '그때 먹고 싶은 거 먹자',
            answer: '마침 뭐먹고 싶은 지 모르겠었는데.. 좋아!',
            speaker: NAMEENUM.PEER,
            mbti: 'P',
            lovePower: true,
        }
    ]
}]
};
const concert = {
    backgroundImg: (await import('../assets/images/firstMeet.svg')).default, 
    content: [
        {
    type:TYPEENUM.NARR,
    name:'',
    text:'축제 직전. 남자친구가 너무 떨린다고 말한다.'
}, {
    type: TYPEENUM.CHOICE,
    choices: [
        { 
            text: '괜찮아, 할 수 있어!',
            answer: '안일하게 생각하다가 실수하면 더 슬플 것 같아..',
            speaker: NAMEENUM.PEER,
            mbti: 'F',
            lovePower: false,
        },
        {
            text: '그럼 한 번 더 맞춰볼까?',
            answer: '오 그러면 확실히 긴장도 풀리고 더 좋을 것 같네.',
            speaker: NAMEENUM.PEER,
            mbti: 'T',
            lovePower: true,
        }
    ]
}]
};

export default [classRoom, cafeteria, zombie, planner, bar, icecream, schoolBand, practicePlan, peerConfession, songPoint, whereTogo, whatToeat, concert];