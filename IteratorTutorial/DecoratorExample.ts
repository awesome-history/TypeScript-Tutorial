// 클래스 데코레이터 (Class Decorators)
// 1번째 특징 : 인스턴스로 만들지 않아도 데코레이터가 실행된다.
// @hello가 실행되면, 생성자와 프로토 타입을 모두 감싼다.
function hello(constructor: Function) {
    // Function: DPerson
    console.log(constructor);
}

// 데코레이터를 팩토리로 이용하는 방법
function helloFactory(show: boolean) {
    if (show) {
        return hello;
    } else {
        return null;
    }
}

@helloFactory(true)
class DPerson {

}

// ----------
// 생성자를 재정의하는 방법에 대한 예제
// ----------
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;

    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world"));
