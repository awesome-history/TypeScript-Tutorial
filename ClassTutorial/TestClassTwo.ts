// static Class는 그대로 사용이 가능하다.
// function, 변수 등 그대로 사용이 가능하다.
class PersonCity {
    public static CITY = "Seoul";
    private static lastName: string = 'lee';

    #_name: string = '123';

    static good():string {
        return PersonCity.CITY;
    }
}

console.log(PersonCity.CITY);

console.log(PersonCity.good());
