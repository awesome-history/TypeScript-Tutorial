interface GenericLookupInterface {
    name: string;
    age: number;
}

const gli: GenericLookupInterface = {
    name: 'Con',
    age: 10,
}

// 이렇게 사용하면 key가 잘못 들어온 경우 에러가 발생된다.
// 또한, 컴파일중에 추론이 불가능해진다.
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }

// extends keyof 의 경우..
// T의 Property를 추출하여 사용할 수 있다. ( K는 오직 T의 리터럴 타입이여야 한다.)
// 즉, obj의 Property key값을 미리 알 수 있다.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

// age 또는 name만 적용할 수 있다.
// 컴파일 단계에서 미리 추론이 가능해짐.
getProperty(gli, 'age')

// set도 동일하다. 추론이 되기 때문에 number에 'string' 과 같은 형태는 불가능하다.
setProperty(gli, 'age', 10);

// ---------

interface Store {
    product: string;
    order: string;
}

const realStore: Store = {
    product: 'toy',
    order: 'ABC123'
}

// obj property를 알수 있게 되어, 조회가 가능하다.
getProperty(realStore, "order")
getProperty(realStore, "product")
