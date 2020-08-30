interface InterfaceTest {
    name: string;
    age: number;
}

// 여기선, Person 이라는 새로운 객체를 생성하는것.
const Person: InterfaceTest = {
    name: 'connor',
    age: 25,
}

// 여기서는 interface가 아래와 같이 구현되어있다는 것을 명시함.
// 즉, p라는 변수에 힌팅이 가능해진다.
function hello(p: InterfaceTest): void {
    console.log(`안녕하세요, ${p.name}`)
}

// ----

// 이름은 필수지만, number는 이제 나이는 필수가 아니다.
interface InterfaceOptional {
    name: string;
    age?: number;
}

const Person2: InterfaceOptional = {
    name: 'connor',
}

// -----

// 어떠한 명칭을 집어 넣어도된다.
interface InterfaceOptional2 {
    name: string;
    age?: number;

    [props: string]: any;
}

const p1: InterfaceOptional2 = {
    name: 'connor',
}

const p2: InterfaceOptional2 = {
    name: 'connor',
    bro: [
        'connor_1',
        'connor_2',
    ]
}

const p3: InterfaceOptional2 = {
    name: 'test',
    item: p1,
    item2: p2,
}

// ----

interface InterfaceNumber {
    [index: number]: string;
}

const numberInter: InterfaceNumber = {}

numberInter[0] = 'hi';
numberInter[1] = 'hello';

// -----

// interface funtion은 당연히 처리가 된다.
interface InterfaceFuntion {
    name: string;
    age: number;

    hello(): void;
    helloEs6(): number;
    helloArrow(): string;
}

// Arrow function 사용도 가능하다.
// function 명칭을 제거해주는것이 좋다 -> ES6
// return 은 () 뒤에 선언한다.
const a: InterfaceFuntion = {
    name: 'a',
    age: 1,
    hello: function () {
        console.log('hi~');
    },
    helloEs6(): number {
        return 1;
    },
    helloArrow: (): string => {
        console.log('Arrow funiton');
        return 'hi';
    }
}

a.hello();
a.helloArrow();
a.helloEs6();
