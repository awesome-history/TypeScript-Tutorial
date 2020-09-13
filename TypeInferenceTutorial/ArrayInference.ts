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

// Union(Dog | Cat)[]
const array4 = [new Dog(), new Cat()];
