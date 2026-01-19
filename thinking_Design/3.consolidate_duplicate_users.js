/** 중복 사용자 통합하기
 *  1. 두 배열을 하나로 합치고,
 *  2. ID 가 중복되면 하나만 남긴 뒤,
 *  3. 최종적으로 이름만 담긴 배열로 출력
 */ 

const serverA = [
    { id: 1, name: '길동'},
    { id: 2, name: '영동'}
];

const serverB = [
    { id: 2, name: '영동'},
    { id: 3, name: '지수'},
];

const combined = [...serverA, ...serverB];

const uniqueUsers = combined.filter((users, idx) => {
    return combined.findIndex(user => user.id === users.id) === idx;
});

const userResult = uniqueUsers.map(user => user.name);

console.log(userResult); // ['길동', '영동', '지수']
