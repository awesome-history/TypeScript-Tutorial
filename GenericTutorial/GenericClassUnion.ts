type goods = string | number;

class GenericClassUnion<T extends goods> {
    #_name : T;
    #_age : T;

    constructor(name: T, age: T) {
        this.#_name = name;
        this.#_age = age;
    }
}

const gnu : GenericClassUnion<goods> = new GenericClassUnion<goods>('makr', 10)
