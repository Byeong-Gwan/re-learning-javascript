/** 중복 사용자 통합하기
 * 1. 1단계 (합치기): 두 배열을 하나로 합친다.((...)스프레드 연산자 사용)
 * 2. 2단계 (중복 제거): filter 를 써서 이미 앞에서 나온 ID는 제외
 * 3. 3단계 (가공): 최종적으로 이름만 추출.
 */
const serverA = [
    { id: 1, name: '길동' },
    { id: 2, name: '영기' }
];

const serverB = [
    { id: 2, name: '영기' },
    { id: 3, name: '영은' }
];

const allUsers = [...serverA, ...serverB];

/**
 * "전체 배열에서 이 ID를 처음부터 찾았을 때 나오는 위치(findIndex)가, 
 * 지금 내 위치(idx)와 같으면 '아, 내가 이 ID의 첫 번째 등장이구나!' 하고 통과시킨다."
 */
const uniqueUsers = allUsers.filter((users, idx) => {
    return allUsers.findIndex(user => user.id === users.id) === idx;
});

console.log(uniqueUsers);