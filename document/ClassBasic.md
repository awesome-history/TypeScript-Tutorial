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

### constructor 에서 멤버 변수를 선언해보자.

```tsx
// 다음과 같이 멤버 변수를 선언해주지 않아도 된다.
// 즉, 생성자에서 접근 제어자를 설정할 수 있다.
class ConstructorCreateClass {

    constructor(protected name: string, protected age: number) {

    }
    getName() : string {
        return this.name;
    }

    getAge() : number{
        return this.age
    }
}

const CreateTest = new ConstructorCreateClass('Makr', 10);
CreateTest.getAge();
CreateTest.getName();
```

### Arrow Function..

```tsx
// Arrow function Class Test
class ElevatorClass {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

		// 메소드 형태로 바로 사용이 가능하다.
		hello(): string {
        return 'hello!!';
    }
		
		// 아래와 같이 Arrow Function을 사용할 수 있다.
    getName = (): string => {
        console.log(this.name)
        return this.name;
    }
}
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

### Class in static

```tsx
// static Class는 그대로 사용이 가능하다.
// function, 변수 등 그대로 사용이 가능하다.
class PersonCity {
    public static CITY = "Seoul";
    private static lastName: string = 'lee';

    #_name: string = '123';

    static good():string {
        return PersonCity.CITY;
    }
}

console.log(PersonCity.CITY);

console.log(PersonCity.good());

```

### abstract class 사용!

```tsx
// abstract class를 구현이 가능하다.
// !: << undefined 도 가능하다는 구문이다.
abstract class APersonClass {
    protected name !: string;

    abstract setName(name :string): void;
}

// APersonTestClass 확장을 받아서 사용하면 구현이 된다.
class APersonTestClass extends APersonClass {
    setName(name: string) {
        this.name = name;
    }
}

const APersonValue: APersonTestClass = new APersonTestClass();

APersonValue.setName('Mark');
```

### Child Class.. extends를 했지만 생성자가 없으면 ??

```tsx
class ConstructorCreateClass {

    constructor(protected name: string, protected age: number) {

    }
    getName() : string {
        return this.name;
    }

    getAge() : number{
        return this.age
    }
}

const CreateTest = new ConstructorCreateClass('Makr', 10);
CreateTest.getAge();   // Mark
CreateTest.getName();  // 10

// extends를 통하여 사용을 했을 경우, 아무것도 기입하지 않았을때 부모의 상태를 가져간다.
class ChildConstructorCreateClass extends ConstructorCreateClass {

    // 하지만, constructor를 선언하여 사용할 경우...
    // super()를 통하여 다시 제어를 해주어야 한다.
    // constructor() {
    //     super();
    // }
}

const ChildClassTest = new ChildConstructorCreateClass('Good', 3);
ChildClassTest.getName();  // Good
ChildClassTest.getAge();   // 3
```

→ 부모클래스를 받아서 사용했을때 생성자를 어떻게 설정하냐에 따라 결과값이 달라질 수 있다.

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

## Singleton 을 만들 수 있다...!!

```tsx

// private 생성자를 이용해서 내부에서만 인스턴스가 생성이 가능하도록 한다.
// 공개된 getInstance()를 통하여 static instance를 얻는다.
// Lazy Loading가 되어 최초 실행시가 아닌, 할당을 할때 사용한다.
class SingletonTestClass {
    public static getInstance(): SingletonTestClass | null {
        if (SingletonTestClass.instance === null) {
            SingletonTestClass.instance = new SingletonClass();
        }

        return SingletonTestClass.instance;
    }

    private static instance: SingletonTestClass | null = null;

    private constructor() {
    }
}

// 싱글톤 클래스를 사용할 수 있다.
const PSingleton: SingletonClass = SingletonTestClass.getInstance();
```

- 싱글톤 패턴은 Private constructor를 통하여 막을 수 있다.

---

## 참고페이지

[TypeScript 한글 문서](https://typescript-kr.github.io/pages/classes.html)
