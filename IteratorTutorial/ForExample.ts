const array = ['first', 'second'];

const obj: object = {
    name: 'mark',
    age: 16
}

// 배열에서만 사용이 가능하다.
for (const item of array) {
    console.log(typeof item + ', ' + item);
}

// 배열을 순회할때는 사용하지않는다.
// index가 number가 아닌 string 으로 나오기 때문에..
// for (const item in array) {
//     console.log(typeof item + ', ' + item);
// }

// for (const item of obj) {
//     console.log(typeof item + ', ' + item);
// }

// for in..객체를 순회할때 사용한다.
for (const item in obj) {
    console.log(typeof item + ', ' + item);
}
