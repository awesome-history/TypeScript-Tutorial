## 타입 추론

- 기본적으로 타입을 명시적으로 쓰지 않을때 추론하는 방법에 대한 규칙
    - 명시적으로 쓰는 것은 타입추론이 아니라 코드 읽기 좋게 하는 지름길..
- let은 기본적으로 우리가 아는 기본 자료형으로 추론 한다.
- const는 리터럴 타입으로 추론
    - 오브젝트 타입을 타입을 쓰지 않으면, 프로퍼티는 let 처럼 추론.
        - const person = {name: 'Mark', age: 35}; 면
        - person => {name: string; age: number;} 로 추론한다.
- 대부분 추론이 쉽다.
    - 단순 변수
    - structuring, destructuring
- array, 함수의 리턴에서 원하는데로 얻기가 힘들다.

## Array Type 추론

```tsx
// 아무것도 사용하지 않을 경우, 추론이 되는 방식.

// Any
const array1 = [];
// String
const array2 = ['a', 'b', 'c'];
// Union(string, number, boolean)
const array3 = ['a', 1, false];

class Animal {
    name: string | undefined
}

class Dog extends Animal {
    dog: string | undefined;
}

class Cat extends Animal {
    cat: string | undefined;
}

const array4 = [new Dog(), new Cat()];
```

## Return Type 추론

```tsx
// 리턴 타입의 추론도 자연스레 된다.
function hello(message: string | number) {
    if (message === 'world') {
        return 'world';
    }

    return 0;
}
```

## Union Type Guard (타입 가드)

```tsx
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
```
