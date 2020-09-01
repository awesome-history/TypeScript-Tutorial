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

// ------

interface IPerson {
    name: string;
    age?: number;

    hello(): void;
}

// 가장 많이 사용하는 implements 방법
// tslint:disable-next-line:class-name
class implementsClassTest implements IPerson {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`hello! ${this.name}`);
    }

    public hi(): void {
        console.log(`hi! ${this.name}`);
    }
}

const implementsTestFunction: IPerson = new implementsClassTest('connor');

// hi는 pubilc 이지만, 직접 상속은 IPerson 이기 때문에.. 사용이 불가능 하다.
// implementsTestFunction.hi();

// hello! connor
implementsTestFunction.hello();

// -------

// Interface에 Interface! 중복으로 상속이 가능하다.
interface EPerson {
    name: string;
    age?: number;
}

interface ExtendsEPersonTest extends EPerson {
    city: string;
}

const human: ExtendsEPersonTest = {
    name: 'human',
    city: 'Seoul'
}

// -------

type HelloPerson = (name: string, age?: number) => void;

let helloPersonFunction: HelloPerson = (name, age) => {
    console.log(`Hello!!! ${name}`);
}

helloPersonFunction('Mark');

// --------

// key 는 오직 number만.. value는 string이 가능하다.
interface StringArray {
    [index: number]: string
}

const sa: StringArray = {}
// key가 number로 입력할 경우 [] 형태로 기입해야한다
sa[100] = 'test';

interface StringDictionary {
    [index: string]: string
}

const sd: StringDictionary = {};
// key가 object 형태로 입력할 경우 객체로 기입해야한다.
sd.one = 'test';

interface StringArrayDictionary {
    [index: number]: string;
    [index: string]: string;
}

const sad : StringArrayDictionary = {}
sad[100] = 'hi';
sad.one = 'good';

// ----------
// 문제가 되는 케이스도 존재한다.
// StringDictionaryNo 에는 [index: string] 처럼 Indexable 한 type이 string으로 선언되어있어 number, string이 대립된다.
// [index: string] :string vs name : number..
// Property 'name' of type 'number' is not assignable to string index type 'string'.
interface StringDictionaryNo {
    [index: string]: string
    // name : number;
    // name : string;
}

