// public이 기본이다.
// class TestClass {
//     // public name: string;
//
//     #name: string;
//     public age?: number;
//
//     constructor(name: string) {
//         this.#name = name;
//     }
// }
//
// const person = new TestClass('Mark');
//
// // Person을 출력하면 Person Class 객체에는 name은 생성된다.
// // 하지만, age는 할당하지 않았기 때문에 age 객체는 생성되지 않는다.
// console.log(person);

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

// -----------

// Arrow function Class Test
class ElevatorClass {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName = (): string => {
        console.log(this.name)
        return this.name;
    }
}

