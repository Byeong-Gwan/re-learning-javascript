// 카테고리별로 데이터 묶기
const employees = [
    { id: 1, name: '길동', role: 'developer' },
    { id: 2, name: '영기', role: 'designer' },
    { id: 3, name: '영은', role: 'developer' },
    { id: 4, name: '윤지', role: 'manager' }
];

let groupedData = {};

const groupping = employees.forEach(employees => {
    if (groupedData[employees.role]) {
        groupedData[employees.role].push(employees.name);
    } else {
        groupedData[employees.role] = [employees.name];
    }
});

console.log(groupedData);