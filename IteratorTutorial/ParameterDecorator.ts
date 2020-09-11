function printInfo(target: any, methodName: string, paramIndex: number) {

    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}

class ParameterDecoratorClass {
    private _name: string;
    private _age: number;

    constructor(name: string, @printInfo age: number) {
        this._name = name;
        this._age = age;
    }

    hello(@printInfo message: string) {
        console.log(message);
    }
}

// -------------------------
// printInfo 출력시..
// -------------------------
// - 아래는 hello 관련된 정보가 우선 출력.
// Person {}
// hello
// 0
// -------------------------
// - constructor 관련된 내용이 우선 출력
// [Function: ParameterDecoratorClass]
// undefined
// 1
