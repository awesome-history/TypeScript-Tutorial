## Class

```tsx
// public이 기본이다.
class TestClass {
    public name: string
    age?: number

    constructor(name: string) {
        this.name = name;
    }
}

const person = new TestClass('Mark');

// Person을 출력하면 Person Class 객체에는 name은 생성된다.
// 하지만, age는 할당하지 않았기 때문에 age 객체는 생성되지 않는다. (undefined)
console.log(person);

```

### Class 변수는 null..? undefined..?

```tsx
// public이 기본이다.
class TestClass {
    public name: string
    age?: number

    constructor(name: string) {
        this.name = name;

        console.log(this.age === undefined); // true
        console.log(this.age === null)       // false
    }
}
```

→ 즉, 초기에 할당한 코드의 경우 `undefined` 이다.

### Class 변수에 초기 할당을 해보자.

```tsx
class TestClass {
    public name: string =  'Hi!!';
    age: number = null;

    constructor() {
        // this.name = name;

				console.log(this.name);    // 'Hi!!'
        console.log(this.age);     // Null
    }
}
```

→ null과 undefined는 모든 타입의 Sub Type다.
→ 즉, 어떠한 저렇게 초기 형태로 비워도 큰 에러가 아니다.

### ECMAScript 비공개 필드 (ECMAScript Private Fields)

```tsx
class TestClass {
    #_name: string;

    constructor(theName: string) {
        this.#_name = theName;
    }

    get name(): string {
        return this.#_name;
    }
    set name(value: string) {
        this.#_name = value;
    }
}

// 프로퍼티 '#name'은 비공개 식별자이기 때문에 'Animal' 클래스 외부에선 접근할 수 없습니다.
// new TestClass("Cat").#name;

let PrivateTestClass = new TestClass('Cat');

// but, getter 를 통하여 해당 Private 를 추출은 가능하다.
console.log(PrivateTestClass.name);

// setter를 통하여 변경도 가능하다.
PrivateTestClass.name = 'setter test';
```

→ TpyeScrit 3.8이상 `Private` 은 `#(샾)` 으로 표현한다.

→ 하지만, 그 이전 버전에서는 코딩 컨벤션을 통하여 `_(언더바)` 의 경우 `Private`으로 추정한다.

→ getter, setter를 통하여 해당 `Private`에 접근할 수 있다. 
(외부에서 상태는 보호되지만, 행동에 따라 상태를 변경할 수 있는 상태가 되는 것이다.)

### Protected 를 이용하여 상속을 받는 방법

```tsx
export class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    // #을 쓴 경우 protected, public, Private 를 쓸 수 없도록 되어있다.
    #department: string;

    constructor(name: string, department: string) {
        // super -> extends된 부모의 constructor를 실행시킬 수 있다.
        super(name);

        // department
        this.#department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.#department}.`;
    }
}

const howard = new Employee("Howard", "Sales");

// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 오류
```

- `super()` 는 extends를 받은 부모의 class 생성자를 실행할 수 있다.
- `#(샵)` 을 사용하여 `Private` 를 명시한 경우, 다른 접근 제어자는 사용할 수 없다.

---

## 참고페이지

[TypeScript 한글 문서](https://typescript-kr.github.io/pages/classes.html)
