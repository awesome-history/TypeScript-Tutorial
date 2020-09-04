
// abstract class를 구현이 가능하다.
// !: << undefined 도 가능하다는 구문이다.
abstract class APersonClass {
    protected name !: string;

    abstract setName(name :string): void;
}

// APersonTestClass 확장을 받아서 사용하면 구현이 된다.
class APersonTestClass extends APersonClass {
    setName(name: string) {
        this.name = name;
    }
}

const APersonValue: APersonTestClass = new APersonTestClass();

APersonValue.setName('Mark');

