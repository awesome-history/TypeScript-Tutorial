// public이 기본이다.
class TestClass {
    public name: string
    age?: number

    constructor(name: string) {
        this.name = name
    }
}

const person = new TestClass('Mark');

