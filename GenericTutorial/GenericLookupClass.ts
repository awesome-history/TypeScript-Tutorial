interface GenericLookupInterface {
    name: string;
    age: number;
}

const gli: GenericLookupInterface = {
    name: 'Con',
    age: 10,
}

// extends keyof 의 경우..
// GenericLookupInterface 기준 "name", "age" 노출이 된다.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

// age 또는 name만 적용할 수 있다.
// 컴파일 단계에서 미리 추론이 가능해짐.
getProperty(gli,'age')
