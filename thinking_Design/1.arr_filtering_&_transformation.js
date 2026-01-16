/**
 * 1. 1단계 (필터링): 어떤 조건으로 데이터를 걸러낼까?
 *  객체 내에 있는 status 찾아 active로 데이터를 가져옴
 * 2. 2단계 (변환): 걸러진 데이터에서 이름 뒤에 문구를 붙이려면 어떻게 해야 할까?
 *  객체를 배열로 변환 하고 반복문으로 해당 status 에 active 이면 name 뒤에 문구를 추가해준다.
 * 3. 3단계 (최종 확인): 결과 값이 배열로 나오는지 확인.
 * 
 * 수정 
 * 1. 1단계 (필터링): users.filter()를 사용함
 *  - status 가 active 인 사람만 남긴다.
 * 
 * 2. 2단계 (변환): filter로 걸러진 결과에 바로 .map()을 사용
 *  - 남은 사람들의 name 뒤에 (활동 중)을 붙여서 문자열 배열로 변환
 * 
 * 3. 3단계 (최종 확인): 변수에 담긴 값이 ['Jon(활동 중)', 'Bob(활동 중)'] 형태로 나오는지 확인
 */

// 기대 결과: ['Jon(활동 중)', 'Bob(활동 중)']
const users = [
    { id: 1, name: 'Jon', status: 'active' },
    { id: 2, name: 'Jane', status: 'inactive' },
    { id: 3, name: 'Bob', status: 'active' },
    { id: 4, name: '', status: 'active' }
];

const activeUsers = users
    .filter(user => user.status === 'active')
    .map(user => `${ user.name || '이름 없음' }(활동 중)`);

console.log(activeUsers);