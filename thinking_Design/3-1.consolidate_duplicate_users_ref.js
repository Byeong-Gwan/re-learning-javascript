/**
 * 만약 '성능' 관련 질문이 있을 경우
 *  -> 이 방식은 배열이 10만 개라면 filter 안에서 매번 findIndex를 돌리니까 속도가 느려질 수 있는데
 *      개선 방법이 없나요? 최선이였나요? (이런 질문이 들어오는 경우 생각)
 */
const serverARef = [
    { id: 1, name: '길동' },
    { id: 2, name: '영기' }
];

const serverBRef = [
    { id: 2, name: '영기' },
    { id: 3, name: '영은' }
];

const allUsersRef = [...serverARef, ...serverBRef];

const uniqueUsersRef = allUsersRef.filter((users, idx) => {
    return allUsersRef.findIndex(user => user.id === users.id) === idx;
});

console.log(uniqueUsersRef);

/**
 * 답변: 
 *  -> 지금 방식은 이해하기 쉽지만 데이터가 많아지면 성능 저하가 될 수 있음.
 *      그런 경우 Set 객체나, Map 객체를 활요해서 이미 확인된 ID를 저장해두는 방식으로
 *      성능을 개선 할 수 있음.
 */

const uniqueUsers2 = [
    ...new Map(allUsersRef.map(user => [user.id, user])).values()
];

console.log(uniqueUsers2);