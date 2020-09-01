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

    public hi(): void {
        console.log(`hi! ${this.name}`);
    }
}

const implementsTestFunction: IPerson = new implementsClassTest('connor');

// hi는 pubilc 이지만, 직접 상속은 IPerson 이기 때문에.. 사용이 불가능 하다.
implementsTestFunction.hi();

// hello! connor
implementsTestFunction.hello();
```

---
## Class extends Interface

```tsx
// Interface에 Interface! 중복으로 상속이 가능하다.
interface EPerson {
    name : string;
    age? : number;
}

interface ExtendsEPersonTest extends EPerson {
    city : string;
}

const human : ExtendsEPersonTest = {
    name: 'human',
    city: 'Seoul'
}
```

- 기본 인터페이스에서 다른 인터페이스를 참조하여 확장이 가능하다.
- 병열로 넓힐때 사용할 수 있을 것이다.

---

## Function Interface

```tsx
interface HelloPerson {
    (name: string, age?: number): void;
}

let helloPersonFunction: HelloPerson = function (name: string) {
    console.log(`Hello!!! ${name}`);
}

helloPersonFunction('Mark');
```

- Function을 인터페이스 형태로 사용이 가능하다.
- 하지만, 권장하지 않는것으로 생각됨..
→ lint에서 걸림..

```tsx
// lint에서는 type을 사용하라고 함..
type HelloPerson = (name: string, age?: number) => void;

// ES6에 맞도록 애로우 펑션을 권장함.
let helloPersonFunction: HelloPerson = (name, age) => {
    console.log(`Hello!!! ${name}`);
}

helloPersonFunction('Mark');
```

---
## Indexable Types

- 가변적으로 사용할 수 있는 것. 즉 선언해도 되고 선언 안해도 된다.

```tsx
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

// StringDictionaryNo 에는 [index: string] 처럼 Indexable 한 type이 string으로 선언되어있어 number, string이 대립된다.
// [index: string] :string vs name : number..
// Property 'name' of type 'number' is not assignable to string index type 'string'.
interface StringDictionaryNo {
    [index: string]: string
    name : number;
}
```

- 형태가 대체적으로 자유롭다.
    - `[index: number]: string → sa[100] = 'test'`
    - `[index: string]: string → sd.test = 'test'`
- 문제가 되는 케이스도 존재한다.
    - `[index: string] :string vs name : number..`
    - 즉, name이 다른 타입을 노출할 경우 대립이 된다.
        - Indexable type을 통한 내용의 출력값은 string
        - name에는 출력값은 number..

## 잡다.

- 인터페이스는 각 클래스의 상속 혹은 확장에 대해서는 규격화만 한다 (할당을 받지 못하면 꽝..)
- 즉, 인터페이스는 런타임에서 어떠한 동작도 하지 않는다고 생각하면됨
- Notion에 정리되어있음.
