// 인터페이스
// interface Person2 {
//     name: string;
//     age: number;
// }

//타입 별칭 > 새로운 타입 값을 생성하는게 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것
//타입은 확장 되지 않음 (interface는 extends로 확장 가능) > 가급적이면 interface로 사용하는 것이 좋다.
type Person2 = {
    name: string;
    age: number;
}
let seo: Person2 = {
    name: '세오',
    age: 30
}

type MyString = string;

let str1: MyString = 'hello';


