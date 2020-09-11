function writable(canBeWritable: boolean) {
    return function (target: any, propName: string): any {
        console.log(target); // PropertyDecorator
        console.log(propName) // @writable를 선언한 prop 이름 -> name

        // return이 description이다.
        return {
            writable: canBeWritable
        };
    }
}

// target: any, propName: string, return으로 description 사용한다.
class PropertyDecorator {
    // true, false 값으로 덮어쓰기 가능, 불가능 여부가 측정된다.
    @writable(true)
    name: string = 'Mark';

    constructor() {
        console.log('new PropertyDecorator()')
    }
}

const p = new PropertyDecorator();
console.log(p.name)
