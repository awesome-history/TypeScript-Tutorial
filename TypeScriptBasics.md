# TypeScript

## Primitive type (기본형 타입)

- 기본 타입형태
- 변수의 할당될 때, 메모리 상에 고정된 크기로 저장이 되고 해당 변수에 원시의 값을 저장한다.
- 원시 타입 자료형은 모두 변수 선언, 초기화, 할당 시 값이 저장된 메모리 영역에 직접적으로 접근한다
- 데이터를 복사를 할 경우 해당 변수에 직접 복제가 된다.
- 6가지의 타입
    - `Number`
        - boolean과 마찬가지로 Primitive type의 `number`(소문자)를 권장한다.
    - `String`
        - Template String 사용을 권장한다.
         ``안녕하세요!!``(백쿼터 사용)
        - 권장하는 이유는 변수를 사용하기 편하기 때문에
    - `Null`
        - 변수 자체가 할당이 되어있지 않은 상태 (주소 자체도 미할당)
        - 모든 타입에 대입이 가능하다. (sub type)
    - `Undefined`
        - 변수는 할당 되었으나, value가 없는 상태. (주소 값은 할당되어 있으나, 값이 없다.)
        - 모든 타입에 대입이 가능하다 (sub type)
    - `Boolean`
        - Boolean, boolean은 타입이 다르다.
        - `Boolean`은 wrapper object, `boolean`은 Primitive type
        - `boolean`으로 쓰는 것을 권장한다. (소문자)
    - `Symbol` (ES6 이상)

## Reference type (참조형 타입)

- 참조 타입 데이터는 크기가 정해져 있지 않고 변수에 할당될 때 값이 직접 해당 변수에 저장될 수 없으며,
변수에는 데이터에 대한 참조만 저장된다.
- 힙(Heap) 메모리에 저장한다.
- 참조 타입은 변수의 값이 저장된 메모리 블럭의 주소를 가지고 있고, 자바스크립트 엔진이 변수가 가지고 있는 메모리 주소를 이용해서 변수의 값에 접근한다 Access By Reference
- 데이터 복사시 참조형의 블럭 주소를 복사하기 때문에, 동일한 객체를 가르킨다.
→ 복제를 하기 위해선 deep 복제를 해야 한다.
- 타입 종류
    - `Object`
    - `Array`
        - 선언 방식은 아래의 2가지가 있다.
            - Array<type>
            - type[]
    - `union`

    TypeScript의 타입(추가)

    - `Any`
        - 어떠한 형태의 값을 넣어도 상관이 없다. (적폐)
        - `Any` 를 최대한 사용하지 않는 것이 TS의 핵심이다.
    - `Never`
    - `void`
        - `return` 자체가 없다.
    - `Enum`
    - `Tuple: object`
        - array 타입의 형태가 두가지 이상인 경우
        - ex ) `let x = [string, number]`
            - 순서가 맞아야한다.
                - [`str`, 10] → ok
                - [10, `str`] -> err
        - 값을 추가가 가능하다. 단 초기에 선언한 형태와 같은 형태의 값으로.

## 참고 페이지

[Primitive Type(원시 타입) vs Reference Type (참조 타입)](https://weicomes.tistory.com/133)
