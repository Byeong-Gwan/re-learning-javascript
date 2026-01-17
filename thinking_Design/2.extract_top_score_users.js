/* Top Score 사용자 추출
    1. 1단계 (정렬): score를 기준으로 내림차순(큰 순서대로) 정렬 (sort 메서드 사용)
    2. 2단계 (자르기): 정렬된 결과에서 상위 3개만 남긴다. (slice 메서드 사용)
    3. 3단계 (가공): 이름 여부 확인 후 없으면 '익명'으로 출력
*/
const candidates = [
    { id: 1, name: '길동', score: 85 },
    { id: 2, name: '영기', score: 92 },
    { id: 3, name: '영원', score: 78 },
    { id: 4, name: '영호', score: 95 },
    { id: 5, name: '', score: 88 }
];

const top3Users = candidates.sort((a, b) => b.score - a.score).slice(0, 3);

const result = `${top3Users[0].name || '익명'}: ${top3Users[0].score}`;

console.log(result);