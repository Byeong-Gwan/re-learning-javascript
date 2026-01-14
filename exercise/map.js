const numbers = [1, 2, 3];
const doubleNumbers = numbers.map(num => num * 2);

console.log(doubleNumbers);

/**
 * 답변:
 *  numbers에 선언되어 있는 배열들을 doubleNumbers에 map으로 반복해서 하나씩 값을 가져와 * 2 연산 후 반환
 *  결과 값으로 [2, 4, 6]
 */