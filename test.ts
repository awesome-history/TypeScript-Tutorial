class Test {
    constructor() {
        console.log('test');
    }
}

new Test();

let testName = '123';
testName.toString()


// boolean은 프리미티어 타입인 소문자로 사용해야한다.
let bool: boolean = false;

// number는 프리미티어 타입인 소문자로 사용해야한다.
let num: number = 11;

// string을 사용할때 `를 권장한다.
let str: string = `fadsfas`;

// 사용하면 안된다. any를 사용하지 않는것이 TS를 올바르게 사용하는것과 같다.
// let any : any = false;


// interface 선언
interface Person {
    name: string;
    age: number;
}

// p에 대입하여 사용
const p: Person = {
    name: `Min`,
    age: 26,
}

// Array를 통한 선언의 방식 2가지
// Person[];
// Array<Person>

// tuple 형태
let tuple: [string, number] = [`str`, 10];
// 값의 순서도 맞아야한다.
// tuple = [11, `10`];
// tuple = [`str`, 11];

// enum 평소와 같은 Enum type
enum EnumTest {
    red,
    blue,
    green = 'good',
}

// EnumTest.blue => 1
// EnumTest.green => 'good'
