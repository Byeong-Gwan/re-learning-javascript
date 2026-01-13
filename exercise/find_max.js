const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findMax (numbers) {
    let max = numbers[0];

    for (let i =0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(findMax(numbers));

/**
 * 질문: 이 함수는 전체적으로 무엇을 찾으려는 함수일까요? 그리고 if문 안에서는 어떤 일이 일어나고 있나요?
 * 
 * 내 답: 
 * 1. findMax 함수명을 봤을 때 최고값을 찾는 함수로 예상 
 * 2. numbers 매개변수는 배열로 예상해서 변수 선언함
 * 3. max 변수를 선언 후 초기 값으로 numbers의 첫번째 값을 할당
 * 4. for 문으로 반복문을 통해 numbers의 길이 만큼 반복
 * 5. if 문에서 numbers의 인덱스 값이 max에 할당된 값보다 큰지 확인 
 * 6. max에 할당된 값보다 numbers의 인덱스의 값이 크다면 max에 재할당
 * 7. 반복문 종료 후 max 반환
 * 
 * 개선 필요
 * 8. 예외 처리
 * - 추가 할 필요 있는 내용 예외처리 만약 numbers 의 값이 없거나 빈 배열인 경우 예외처리 필요
 *  -> if (!numbers || numbers.length === 0) return null; 추가 필요
 * 
 * 9. 성능 및 대안
 * - 아주 큰 배열의 경우 위와 같은 for문이 효율적이지만, 코드의 가독성을 위해 
 *  JavaScript 내장 함수인 Math.max(...numbers) 를 사용할 수도 있음. 
 *  하지만 이 방식은 배열이 너무 크면 스택 오버플로우 위험이 있으므로, 상황에 맞는 선택이 필요
 */