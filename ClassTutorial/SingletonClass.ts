
// private 생성자를 이용해서 내부에서만 인스턴스가 생성이 가능하도록 한다.
// 공개된 getInstance()를 통하여 static instance를 얻는다.
// Lazy Loading가 되어 최초 실행시가 아닌, 할당을 할때 사용한다.
class SingletonTestClass {
    public static getInstance(): SingletonTestClass | null {
        if (SingletonTestClass.instance === null) {
            SingletonTestClass.instance = new SingletonClass();
        }

        return SingletonTestClass.instance;
    }

    private static instance: SingletonTestClass | null = null;

    private constructor() {
    }
}

const PSingleton: SingletonClass|null = SingletonTestClass.getInstance();
