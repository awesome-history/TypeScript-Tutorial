function editable(canBeEditable: boolean) {

    // defineProperty() => Es6
    return function (taget: any, propName: string, description: PropertyDescriptor) {
        // MethodDecoratorClass {}
        console.log(taget)

        // 'hello' 가 출력 메소드의 이름이 출력.
        console.log(propName)

        // description => 속성들이 노출된다.
        // value, writable, enumerable, configurable
        console.log(description);

        // 사용하지 못하도록..
        description.writable = canBeEditable;
    }
}

class MethodDecoratorClass {
    constructor() {
        console.log('new Person()');
    }

    @editable(true)
    hello() {
        console.log('hello');
    }
}

const p = new MethodDecoratorClass();
p.hello();      // hello 출력

// description.writable의 값에 따라 재정의 된다.
p.hello = function (){
    console.log('World');
}
// editable가 true면 World 출력
// editable가 false면 Hello 출력
p.hello();

