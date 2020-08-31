## interface basic type..

```tsx
# 기본 사용방법
# TS에서 JS로 컨버팅을 할때는 따로 구현이 안되어있다??
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
```

### Optional property - 1

```tsx
// 이름은 필수지만, number는 이제 나이는 필수가 아니다.
interface InterfaceOptional {
    name: string;
    age?: number;
}

const Person2: InterfaceOptional = {
    name : 'connor',
}
```

### optional property - 2

```tsx
# props 라는 명칭에 대해서는 이제 어떠한 값을 와도 상관이 없다.

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

// -------

# 즉, 추가로 배열 구조로 설정할 수 있다.
interface InterfaceNumber {
    [index: number] : string;
}

const numberInter: InterfaceNumber = {}

# 위의 인터페이스가 배열의 형식은 number, 출력 형식은 string으로 선언해두었기에
# 아래와 같이 추가가 가능한 형태로 변경된다.
numberInter[0] = 'hi';
numberInter[1] = 'hello';
```
---
## interface - Function

```tsx
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
```

---
## Class Implements Interface

```tsx
// 가장 기본적으로 사용하는 방식이다.
class implementsClassTest implements IPerson {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`hello! ${this.name}`);
    }
}

const implementsTestFunction = new implementsClassTest('connor');

// hello! connor
implementsTestFunction.hello();
```
