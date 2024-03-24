export const NAMEENUM = {GIRL: '나', OLDER: '선배', PEER: '동기', YOUNGER: '후배', FRIEND: '친구'};

export const BOYENUM = {OLDER: '선배', PEER: '동기', YOUNGER: '후배'};

export const TYPEENUM = {NARR: 0, CHOICE: 1};

export const getBoyEnumId = (type) => {
    if(type === BOYENUM.OLDER) return 1;
    if(type === BOYENUM.PEER) return 2;
    if(type === BOYENUM.YOUNGER) return 3;
}
