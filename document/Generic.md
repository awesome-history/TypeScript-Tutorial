#TypeScript - Generic

- 타입을 변수로 지정할 때 사용한다.
- `helloGeneric<T>(msg: T): T` 다음 처럼 T에 지정하여 사용한다.
    - `helloGeneric<string>('hello')`

## Generic Funtion

```tsx
function helloString(msg: string): string {
    return msg;
}

function helloNumber(msg: number): number {
    return msg;
}

// 반복될 수 있는 변수들...
// 그렇다고 Any를 사용할 순없다. -> 사용을 하면 되지않음.
function helloAny(msg: any): any {
    return msg;
}

// 즉, 생성할때 타입을 넘기면 상관이 없다.
// 타입을 함께 인자로 넘긴다고 생각할 수 있다.
function helloGeneric<T>(msg: T): T {
    return msg;
}

// 어떠한 타입을 넘어오는지 알 수 없어. 헬퍼가 사용이 불가능하다.
console.log(helloAny('Mark').length);
console.log(helloAny(35).length);

// 35를 넘기면 해당 타입은 Number으로 추론되기 때문에 toString()이 가능..
console.log(helloGeneric(35).toString());

// Generic 타입을 사용하면 string타입을 확인한다.
helloGeneric<string>('hello');
```

### Array Generic

```tsx
// 다음과 같이 Array도 사용이 가능하다.
function helloArray<T>(msg: T[]): T {
    return msg[0];
}

helloArray<string>(['1', '2']);
```

→ 다음과 같이 Array<string> 형태도 사용이 가능하다.

### 여담..

```tsx
// Array<String>와 같은 표현 방식 또한, 제네릭타입을 이용한 것이다.
// 하지만 forbidden래요.. 사용하지 말라고함..
const a: string[] = [];
const b: Array<String> = [];
```

---

## Class Generic

- generic Class 구현이 가능하다.
- 외부에서 생성하는 것이 동일함.

### 기본적인 사용 방법

```tsx
// Class에서 Generic Class 사용이 가능하다.
// Type을 외부에서 지정하는것은 동일하다.
class PersonGeneric<T> {
    #_name : T;

    constructor(name : T) {
        this.#_name = name;
    }
}

// 아래의 두가지 방법처럼 사용이 가능하다.
const PG: PersonGeneric = new PersonGeneric(11);
const PG: PersonGeneric<string> = new PersonGeneric<string>('GOOD');
```

### Union Type 적용이 가능하다.

```tsx
// type을 추가로 지정하여 사용도 가능하다.
type goods = string | number;

// 유니온 처럼 사용이 가능하다.
class GenericClassUnion<T extends number | string> {
    #_name : T;
    #_age : T;

    constructor(name: T, age: T) {
        this.#_name = name;
        this.#_age = age;
    }
}

const gnu : GenericClassUnion<string|number> = new GenericClassUnion<string | number>('makr', 10)
```

- 추가로 들어올 타입을 지정할 수 있다.
- 또한, type을 이용하여 타입을 지정하는 것도 가능하다.

### Multiple Generic

```tsx
// 제네릭을 여러가지를 이용할 수 있다.
class GenericMultipleClass<T, K> {
    #_name: T;
    #_age: K;

    constructor(name: T, age: K) {
        this.#_name = name;
        this.#_age = age;
    }
}

const test:GenericMultipleClass<string, number> =
    new GenericMultipleClass<string, number>('Mark', 25);
```

- 2개, 3개, 4개 ... 개수의 제한 없이 설정할 수 있다.
- 여러가지의 타입을 추상적으로 주입해주는 것이 가능해진다.

## *중요 - Generic Look up

### getProperty<T, K extends keyof T>..

```tsx
interface GenericLookupInterface {
    name: string;
    age: number;
}

const gli: GenericLookupInterface = {
    name: 'Con',
    age: 10,
}

// 이렇게 사용하면 key가 잘못 들어온 경우 에러가 발생된다.
// 또한, 컴파일중에 추론이 불가능해진다.
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }

// extends keyof 의 경우..
// T의 Property를 추출하여 사용할 수 있다. ( K는 오직 T의 리터럴 타입이여야 한다.)
// 즉, obj의 Property key값을 미리 알 수 있다.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

// age 또는 name만 적용할 수 있다.
// 컴파일 단계에서 미리 추론이 가능해짐.
getProperty(gli, 'age')

// set도 동일하다. 추론이 되기 때문에 number에 'string' 과 같은 형태는 불가능하다.
setProperty(gli, 'age', 10);

// ---------

interface Store {
    product: string;
    order: string;
}

const realStore: Store = {
    product: 'toy',
    order: 'ABC123'
}

// obj property를 알수 있게 되어, 조회가 가능하다.
getProperty(realStore, "order")
getProperty(realStore, "product")
```

- Generic 을 사용하는 형태에서 중요한 부분.
- 컴파일 단계에서 미리 추론이 가능하게 됨.
- 빈번하게 사용하고, 중요한 개념이기에 꼭 알아야한다.
