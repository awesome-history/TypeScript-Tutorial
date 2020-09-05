interface GenericLookupInterface {
    name: string;
    age: number;
}

const gli: GenericLookupInterface = {
    name: 'Con',
    age: 10,
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}
