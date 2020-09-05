function helloString(msg: string): string {
    return msg;
}

function helloNumber(msg: number): number {
    return msg;
}

// 반복될 수 있는 변수들...
// 그렇다고 Any를 사용할 순없다. -> 사용을 하면 되지않음.
function helloAny(msg: any): any {
    return msg;
}

// 즉, 생성할때 타입을 넘기면 상관이 없다.
// 타입을 함께 인자로 넘긴다고 생각할 수 있다.
function helloGeneric<T>(msg: T): T {
    return msg;
}

// 어떠한 타입을 넘어오는지 알 수 없어. 헬퍼가 사용이 불가능하다.
console.log(helloAny('Mark').length);
console.log(helloAny(35).length);

// 35를 넘기면 해당 타입은 Number으로 추론되기 때문에 toString()이 가능..
console.log(helloGeneric(35).toString());

// Generic 타입을 사용하면 string타입을 확인한다.
helloGeneric<string>('hello');

// -----


// 다음과 같이 Array도 사용이 가능하다.
function helloArray<T>(msg: T[]): T {
    return msg[0];
}

helloArray<string>(['1', '2'])
