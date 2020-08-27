## assertions

- 형변환과 다르다. → 형변환읜 실제 데이터 구조를 바꾸는 것이다.
- TypeScript 컴파일러에게 '타입이 이것이다.' 라고 명시해주는것.
    - 즉, 런타임 에러가 발생할 여지가 생길 수 있다.
- 문법으로 두가지 방법을 지원한다.
    - 변수 as 강제 할당 type.
    - <강제할type>변수
- 즉, 형변환이 아닌 명시를 통하여 특정 함수에 맞도록 변경하여 coding이 가능해진다.

### Sample Code

```tsx
let someValue: any = "this is a string";

let strLengh: number = (<string>somValue).lenght;
let strLengh: number = (somValue as string).lenght;

# 컴파일러를 속이는것이기 때문에, 정확히 확실할때만 사용한다.
# 주로 넓은 타입에서 좁은 타입으로 변경하는 경우 (Any -> string..)
# jsx 에서는 as 를 주로 사용한다.
```

---

## alias (별칭)

- 인터페이스랑 비슷하게 보인다.
- Primitive, Union Type, Tuple
- 기타 작업 작성해야하는 타입을 다른 이름으로 지정할 수 있다.
- 만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는 것은 아니다.

### Aliasing Primitive Sample Code

```tsx
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;

# 별도의 의미가 크게 없다..
```

### Aliasing Union Type

```tsx
# string type, number type 둘다 가능하다는 뜻..
# 길어지면 길어질 수록 복잡함..
let person: string | number = 0;
person = 'Mark';

# 아래처럼 타입을 새로 생성 후 지정할 수 있다.
# 이것이 바로 Union Type이다.
type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = 'Anna';

# 유니온 타입은 type를 선언한 상태처럼 가변적으로 쓸 수 있다. (string | number => 둘다 가능)
# 길게 쓰는걸 짧게 쓸수 있다.
# 아래의 코드를 참고!!!

# 유니온 타입을 쓰기 전...
function test(arg:string | number) : string | number {
	return arg
}

# 쓰고난뒤 코드를 줄일 수 있다.
function test(arg: StringOrNumber) : StringOrNumber {
	return arg
}
```

### Aliasing Tuple

```tsx
# 기본 튜플을 정의 하면.. 아래와 같이 사용한다.
let person: [string, number] = ['Mark', 35];

# 타입을 지정하여, 튜플 타입을 미리 지정한다.
type PersonTuple = [string, number];

let another: PersonTuple = ['Anna', 24];

# 튜플의 타입에 별칭을 줌으로써 다양한 곳에서 활용이 가능하다.
```

---

## declare

- 타입스크립트 선언 파일 d.ts는 타입스크립트 코드의 타입 추론을 돕는 파일입니다
    - 전역 변수로 선언한 변수를 특정 파일에서 import 구문 없이 사용하는 경우 해당 변수를 인식하지 못합니다.
    - `declare const global = 'str';` 다음과 같이 선언시 에러가 발생되지 않는다.
- 즉, 타입스크립트 컴파일러에게 해당 변수가 어딘가에 선언되어 있다고 알려주는 행위 (글로벌..)

```tsx
// 전역 변수
declare const pi = 3.14;

// 전역 함수
declare namespace myLib {
  function greet(person: string): string;
  let name: string;
}
myLib.greet('캡틴');
myLib.name = '타노스';
```

---

## Interface 와의 차이점.

```tsx
type Alias = {num : number};

interface Interface {
		num: number;
};

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

# type alias 는 object literal type로
# interface는 interface로...
```

type Alias끼리 타입을 상속할 수 없다.

```tsx
type PersonAlias = {
		name: string;
		age: number;
};

# 가능은 하나, 사용하지말아라 인터페이스를 써라.
interface IPerson extends PersonAlias {

}

let ip: IPerson = {
		name: string;
		age: number;
};

# type alias 끼리는 extends, implements 불가하다.
# interface 끼리는 extends, implements 가능하다.
# class implements type alias 가능 (권장하지 않는다. -> 굳이..? 인터페이스가 있는데)
# class extends type alias 불가능
# but, 하지만 인터페이스 처럼 동작하긴 함..
```
