// 제네릭을 여러가지를 이용할 수 있다.
// @ts-ignore
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
