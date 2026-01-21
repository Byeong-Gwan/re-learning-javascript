/** 1. Top score users extract
 * 1. 1단계 (정렬): score를 기준으로 내림차순 (큰 순서대로) 정렬. (sort 메서드 사용)
 * 2. 2단계 (자르기): 정렬된 결과에서 상위 3개만 새로 만든 변수에 저장 (slice 메서드 사용)  
 * 3. 3단계 (최종 확인): 변수에 담긴 값을 비교하여 가장 score가 큰 사람의 이름 출력 없으면 '이름 없음 || 익명' 노출
 */
const candidates = [
    { id: 1, name: '길동', score: 85 },
    { id: 2, name: '영기', score: 92 },
    { id: 3, name: '영원', score: 78 },
    { id: 4, name: '영은', score: 95 },
    { id: 5, name: '', score: 88 } // 이름이 없는 경우
];

const top3Users = candidates.sort((a, b) => b.score - a.score).slice(0, 3);

let topUserScore = top3Users[0].score;
let top3UserName = top3Users[0].name;


for (let i = 0; i < top3Users.length; i++) {
    if (top3Users[i].score > topUserScore) {
        top3UserName = top3Users[i].name;
        topUserScore = top3Users[i].score;
    }

}
console.log(`${top3UserName || '익명'}: ${topUserScore}점`);

