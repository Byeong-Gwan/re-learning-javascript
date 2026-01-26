// 카테고리별로 데이터 묶기
const employeesRef = [
    { id: 1, name: '길동', role: 'developer' },
    { id: 2, name: '영기', role: 'designer' },
    { id: 3, name: '영은', role: 'developer' },
    { id: 4, name: '윤지', role: 'manager' }
];

const groupedDataRef = employeesRef.reduce((acc, employee) => {
    // acc[employee.role]이 없으면 빈 배열로 초기화하고, 거기에 이름을 추가함
    (acc[employee.role] = acc[employee.role] || []).push(employee.name);
    return acc;
}, {});

console.log(groupedDataRef);

/**
 * reduce 공부 내용
 * 
 */