
// generic <> : 타입을 마치 함수의 파라미터 개념으로 받을 수 있도록 해줌
/*******************************************************************/
// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('a');   // 문자열 a
// logText(10);    // 숫자 10
// logText(true);  // 진위값 true
/*******************************************************************/
// generic 방법

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText('a');   // 문자열 a
// logText(10);    // 숫자 10
// logText(true);  // 진위값 true
//logText<string>('하이');

/*******************************************************************/
// 문제점 > type 때문에 여러 개의 함수를 선언해야 함 

// function logText(text: string) {
//     console.log(text);
//     //text.split('').reverse().join('');
//     return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }
// logText('a');
// logNumber(10);   
// const num = logNumber(10);  

/*******************************************************************/
// union 문제점 > 공통 된 type 모두 사용가능한 함수만 프리뷰, 선언한 변수가 type이 공통

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// logText('a');
// logText(10);

// const a = logText('a'); // a의 type이 string과 number

/*******************************************************************/

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText('a');   // 문자열 'a'
logText(10);    // 숫자 10
logText(true);  // 진위값 true
logText<string>('하이'); // 문자열 '하이'

const str = logText<string>('abc');
str.split('');

const login = logText<boolean>(true);

/*******************************************************************/
// generic의 타입 제한 1 : generic 타입에 힌트를 줌
function logTextLength<T>(text: T[]): T[] {
    text.length;
    return text;
}

// generic의 타입 제한 2 : 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
logTextLength2('a');
logTextLength2({ length: 10 });

// generic의 타입 제한 3 : key-of
interface ShoppingItem {
    name: string,
    price: number,
    stock: number,
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption("name");
getShoppingItemOption("price");
