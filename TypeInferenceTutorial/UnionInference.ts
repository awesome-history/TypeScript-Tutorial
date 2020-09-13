// 유니온 타입의 타입가드를 이용한다.
interface UPerson {
    name: string;
    age: number;
}

interface Car {
    brand: string;
    wheel: number;
}

// 만약 겹치는 프로퍼티가 없다면 아무것도 객체에 노출되지 않는다.
// 또한, 해당 인스턴스가 어떤 것인지 런타임에서 체크해야한다.
// function hello(arg: UPerson| Car) {
//     if(arg){
//       ....
//     }
// }

// 타입가드 방식을 사용한다.
// return이 true일때 UPerson이라는 것을 명시해준다.
function isUPerson(arg: any): arg is UPerson {
    return arg.name !== undefined;
}

// isUPerson(arg)를 이용하게 된다면
// 타입가드에 의해서 추론이 될 수 있다.
function hello(arg: UPerson | Car) {
    if (isUPerson(arg)) {
        console.log(arg.name);
    } else {
        console.log(arg.brand);
    }
}

