// 오퍼레이션

// function logMessage(value: any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온  타입 > 하나의 타입 이상을 사용할 수 있도록 해준다. > 사용 방법 (타입 | 타입)
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Person3 {
    name: string;
    age: number;
}
interface Developer {
    name: string;
    skill: string;
}

// 유니온 타입 특징 : 유니온(|) > 공통속성만 적용 가능
function askSomeone1(someone: Person3 | Developer) {
    someone.name;
    // someone.age;      시용불가
    // someone.skill;    사용불가
}

// 인터섹선 타입 특징 : 인터섹션(&) > 모든 타입을 포함 
function askSomeone2(someone: Person3 & Developer) {
    someone.name;
    someone.age;
    someone.skill;
}

askSomeone2({ name: 'developer', skill: '웹 개발', age: 20 });
askSomeone1({ name: 'developer', skill: '웹 개발' });
