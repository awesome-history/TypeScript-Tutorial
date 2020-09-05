// readonly 읽기 전용으로 사용이 가능하다.
// 1. private readonly으로 생성된 경우, constructor(생성자)에서 할당이 가능하다.
// 2. private readonly는 생성자외 할당이 불가능 하다.
// 3. public readonly 는 외부에서 할당이 가능하다 ( 정말 읽기 전용임 )
class ReadOnlyTest {
    public readonly name: string = 'Mark';
    private readonly age: number | null = null;

    constructor(age: number) {
        this.age = age;
    }

    getName(): void {
        console.log(this.name)
    }
}

const nameReadOnly: ReadOnlyTest = new ReadOnlyTest(10);
nameReadOnly.getName();
