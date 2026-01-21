/**
 * 1. 1단계 (정렬): score를 기준으로 내림차순 (큰 순서대로) 정렬. (sort 메서드 사용)
 * 2. 2단계 (자르기): 정렬된 결과에서 상위 3개만 새로 만든 변수에 저장 (slice 메서드 사용)  
 * 3. 3단계 (최종 확인): 변수에 담긴 값을 비교하여 가장 score가 큰 사람의 이름 출력 없으면 '이름 없음 || 익명' 노출
 */
const candidatesRef = [
    { id: 1, name: '길동', score: 85 },
    { id: 2, name: '영기', score: 92 },
    { id: 3, name: '영원', score: 78 },
    { id: 4, name: '영은', score: 95 },
    { id: 5, name: '', score: 88 } // 이름이 없는 경우
];

// score를 기준으로 내림차순 (큰 순서대로) 정렬
const top3UsersRef = candidatesRef.sort((a, b) => b.score - a.score).slice(0, 3);

// 이미 위에서 sort를 통해 내림차순 정렬을 마쳤기 때문에, 
// 별도의 반복문 없이 0번 인덱스 값이 최대값임을 보장할 수 있음.
console.log(`${top3UsersRef[0].name || '익명'}: ${top3UsersRef[0].score}점`);



