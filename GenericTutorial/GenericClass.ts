
// Class에서 Generic Class 사용이 가능하다.
// Type을 외부에서 지정하는것은 동일하다.
class PersonGeneric<T> {
    #_name : T;

    constructor(name : T) {
        this.#_name = name;
    }
}

// 아래의 두가지 방법처럼 사용이 가능하다.
// const PG: PersonGeneric = new PersonGeneric(11);

const PG: PersonGeneric<string> = new PersonGeneric<string>('GOOD');


