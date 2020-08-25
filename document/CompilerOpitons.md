# compiler opitons

---

## 최상단 컴파일러 옵션.

```
# 컴파일러 옵션 목록
- compileOnSave    # 파일을 저장하면 컴파일을 할것인가? bool값
- extends          # 추가 확장을 할 경우 사용됨 ( A에서 B를 확장할때 )
- compileOpitons   # 가장 많이 옵션을 추가하는 항목이다.

# 3개의 설정이 없는경우 전부 컴파일을 한다.
- files            # 상대 경로, 절대경로를 컴파일할 것을 설정한다.
- include          
- exclude
```

---

## CompileOptions - 가장 중요하다.

### @types

- 패키지의 버전이 바뀌는 경우, 대응하기 위해서 사용한다.
- typeScript 2.0 부터 사용 가능해진 내장 type definition 시스템
- 아무 설정 안하면
    - node_modules/@types 라는 모든 경로를 찾아서 사용한다.
- tpyeRoots 를 사용하면?
    - 배열 안에 들어있는 경로들 아래만 가져온다.
- tpyes 를 사용하면?
    - 배열 안의 모둘 혹은 ./node_modules/@types/ 안의 이름에서 찾아온다.
    - [] 빈 배열을 넣으면 이 시스템을 사용하지 않는다.
- tpyeRoots 와 tpyes 를 같이 사용하지 않는다.

---

### @target 과 lib

**target**

- 빌드의 결과물을 어떠한 ES 버전으로 설정할 것인가.
- es5, es6, es2020 등 버전을 설정
- esnext (베터버전)

**lib**

- 기본 type definiton 라이브러리를 어떤 것으로 사용할 것인지
- lib를 지정하지 않을때
    - taget 이 'es5'  ⇒ 디폴트로 dom, es5, scripthost 를 사용
    - taget 이 'es6'  ⇒ 디폴트로 dom, es6, dom.iterable, scripthost 를 사용
- lib를 지정시 해당 배열의 라이브러리만 사용. (일부로 파편화해서 만들어둠)
    - [] 빈배열의 경우 '에러 발생'
    - 특정한 코어만 설정하여 가능하다 → 특별히 사용하지 않는 라이브러리는 제외하기 위함임.

<!--![compiler%20opitons%200ad9a4e5d5264aae90b670e7e5652b58/Untitled.png](compiler%20opitons%200ad9a4e5d5264aae90b670e7e5652b58/Untitled.png)-->

---

### outFile, outDir

**outfile**

- 컴파일된 파일을 어디다가 설정할 것인지. (하나의 파일만)

**outDir**

- 컴파일된 디렉토리 구조를 그대로 옮기려면 outDir 설정

---

### module

- 컴파일된 모듈의 결과물을 어떤 모듈 시스템으로 사용할 것인지
- tager 이 'es6' 이면 es6가 디폴트, 아니면 commonjs가 디폴트
- AMD 나 System 을 사용하려면 outFile이 지정되어 있어야 한다.

**moduleResolution**

- ts 소스에서 모듈을 사용하는 방식을 지정해야 합니다.
- Classic 또는 Node 이다.
- CommonJs 일때만 Node라고 생각하면 편하다.

**Paths 와 baseUrl**

- 상대경로 방식이 아닌 BaseUrl로 paths 안에 key/value 로 모듈을 가져가는 방식

**rootDirs**

- 배열 안에서 상대 경로를 찾는 방식

---
