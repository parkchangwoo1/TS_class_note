// 파라미터 타입, 인자 개수에 맞지 않을 경우, 오류

//함수 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
    return a + b;
}

//함수의 반환 값에 타입을 정의하는 방식
function sum2(): number {
    return 10;
}

//함수에 타입을 정의하는 방식
function sum3(a: number, b: number): number {
    return a + b;
}

// 함수의 옵셔널 파라미터 : ?사용
function log(a: string, b?: string) {

}
log('hello world');
log('hello world', 'new Person');

