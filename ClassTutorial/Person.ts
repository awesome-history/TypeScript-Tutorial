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

console.log(howard.getElevatorPitch());
// console.log(howard.name); // 오류
