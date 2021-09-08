// TS class 선언
class classPerson {
    private name: string;   // class 내에서만 사용할 변수
    public age: number;     // 기본
    readonly log: string;   // 변경 불가

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

