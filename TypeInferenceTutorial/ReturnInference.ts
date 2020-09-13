// 리턴 타입의 추론도 자연스레 된다.
function hello(message: string | number) {
    if (message === 'world') {
        return 'world';
    }

    return 0;
}
