// Enums : 특정 값들의 집합을 의미하는 자료형  

// 숫자형 enum
enum Shoes {
    Nike,
    Adidas
}

let myShoes = Shoes.Nike;
console.log(myShoes) // result : 0 > 특정 값을 선언하지 않으면, 모두 0, 순서에 따라 +1

// 문자형 enum
enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

// enum example (dropdown 같은 곳에서 사용)
enum Answer {
    Yes = 'Y',
    No = 'N',
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
