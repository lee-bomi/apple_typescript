let 이름 :string = 'emma';
let 나이 :number = 3;
let 출생지역:string = '서울';
let 최애가수:{로이킴 : string} = {로이킴 : '문득'};
let ohgu :{
    alias :string[],
    age :number,
    started :boolean
} = {
    alias: ['leeohgucci', 'leeohgucci'],
    age : 1,
    started : true,
}

//union type(새로운 제3의 타입이된거임)
type 요소 = number | string;
let 회원들: 요소[] = [1, '2', 3];
let 오브젝트 :{a : 요소} = {a: 123}

//any - 타입 쉴드 해제!
let 모든것 :any;

//용도는 any랑 똑같다(유연쓰) 하지만 안전!
let 안전한데모든것 :unknown;
        //안전한데모든것 - 1 //이런거 허용안함

//숙제
let user :string = 'kim';
let age :number = undefined;
let married :boolean = false;
let 철수 :unknown[] = [user, age, married];

let 학교 :{
    score :(number | boolean)[],
    teacher :string,
    friend :string|string[]
}= {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]


//0412 함수
//narrowing
function 함수(x :number | string) :void {
    if (typeof x === "number") {
        console.log(x + 2);
    }
}

함수(3);

//숙제1
function 숙제1(x? :string) :void {
    if (typeof x === "string") {
        console.log('안녕하세요 ' + x);
    } else {
        console.log('이름이 없습니다')
    }
}

숙제1('이보미');

//숙제2
function 숙제2(x :string | number) :number {
    if (typeof x === "string") {
        return x.length;
    }else {
        return x.toString().length;
    }
}

//숙제3
function 숙제3(money :number, house :boolean | number, fascinate :string | number) :string {
    house === true ? house=500 : house=0;
    fascinate === '상' ? fascinate=100 : fascinate=0;
    let total = money + house + fascinate;
    if (total >= 600) {
        return '결혼가능';
    }
}

숙제3(700, true, '상');


//narrowing = 타입확정!(typeof)
//typeof귀찮으면 = assertion(타입 덮어쓰기)
function 내함수(x: number | string) {
    let array :number[] = [];
    array[0] = x as number; //타입을 골라줄때 쓰기(타입 바꾸려고 쓰지말기)
}

//숙제4
function 클리닝함수(x: (string | number)[]) :number[] {
    let array :number[] = []
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === 'string') {
            let y = Number(x[i]);
            array.push(y);
        } else if(typeof x[i] === 'number') {
            let z = x[i] as number;
            array.push(z);
        }
    }

    return array;
}

//숙제4 - 다른방법
function 클리닝함수2(x :(string | number)[]) :number[]{
    let array :number[] = []
    x.forEach((y)=>{
        if (typeof y === 'string') {
            array.push(Number(y));
        } else {
            array.push(y);
        }
    })
    return array;
}

console.log('숙제4');
console.log(클리닝함수(['1',2,'3']));

//숙제5
function lastSubject(x :{ subject : string | string[] }) :string{
    if (x.subject === 'string') {
        return x.subject;
    } else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length-1]
    } else {
        return '없음'
    }

    console.log(lastSubject({subject : ['english', 'art']}))
}


//타입이길면 타입지정한다 = type alias(타입변수) / 첫글자는 대문자가 국룰, Type붙인다  ex) AnimalType
const region = '안산';
    //region = '서울';   => 단순 값을 바꾸려고하면 안되지만 값이 오브젝트타입이면 가능

const region2 = { 지역 : '안산'}
region2.지역 = '서울'   //=> 이런식으로 바꾸지못하게 막는방법이 readonly(에러만 띄울뿐 js로 번역은 다 되고있음)

type GirlFriendType = {
    readonly name? : string         //?물음표는 뒤에 :string | undefined를 줄여서 쓰는것
}
const 여친 :GirlFriendType = {
    name : '엠버'
}
//여친.name = '크리스탈';


//타입 오브젝트를 합치는것(extend하는것 = &로 연결해준다)
type PositionX = { x: number}
type PositionY = { y: number}
type NewType = PositionX & PositionY
let position :NewType = {x : 1, y : 2}

//숙제1
type PositionA = { x: number}
type PositionB = { x: number}
type NewType2 = PositionA & PositionB
let position2 :NewType2= {x : 2}
//숙제2
type Homework = {
    color? :string,
    size :number,
    readonly position :number[]
}
let 테스트함수 :Homework = {
    color: '보라',
    size : 3,
    position: [1, 2, 3]
}
//테스트함수.position = [2.3.4];
//숙제3
type DetectType = {
    name : string,
    phone? : number,
    email : string
}
let 테스트함수2 :DetectType= {
    name: 'kim',
    phone : 123,
    email : 'abc@naver.com'
}
//숙제4
type NotAdultType = {
    name : string,
    number : number,
    email : string,
    adult : boolean
}
let 미성년자여부 :NotAdultType = {
    name: '오구',
    number : 1,
    email: 'ohgu@naver.com',
    adult : false
}
//숙제4를 숙제3+extend이용해서 해보기
type AdultType = { adult : boolean }
type NewType3 = DetectType & AdultType
let 미성년자확인해보기함수 :NewType3 = {
    name: '오구',
    phone : 1,
    email: 'ohgu@naver.com',
    adult : false
}

//literal type - 변수에 뭐가들어올지 엄격하게 관리가능/자동완성힌트굿
//숙제1
let play :'가위'|'바위'|'보';

function 함수5(x :'가위'|'바위'|'보') :('가위'|'바위'|'보')[] {
    return ['가위']
}
함수5('가위');

//const와 literal type => 리터럴타입은 const변수의 업글버전
let 리터럴타입: '오구' | '주토';
const 변수 = 'lee';  //const변수에도 타입을 리터럴타입을 줄수있기때문에, 여러개의 타입을 넣을수있다는점에서 업글버전이라 할수있음

//as const
let 자료 = {
    name : 'kim'
} as const //=> 'kim'은 string타입이아닌 'kim'타입이 되는것임! (이중잠금 = as const)

function 내함수2(a: 'kim') {   //=> 'kim'타입 파라미터를 받아야하는 상황

}
내함수2(자료.name);


//함수선언식, 함수표현식, type alias
type 함수타입 = (a :string) => number;  //파라미터와 리턴타입을 정해서 타입선언해주고
let 함수2 :함수타입 = function (a) {  //함수표현식으로 펼쳐서 써주면 더 심플한 코드가 될수있음(함수이름은 없음)
    return 10;
};

//오브젝트안에 함수저장하는 방법
type 회원정보 = {
    name: 'kim',
    plusOne : (a :number) => number,
    changeName : () => void
}

//숙제1
type CutType = (x :string) => string
let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
//숙제2
function removeDash(x: string): number {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
//숙제2 => typealias
type RemoveDashType = (x :string) => number
let removeDash2 :RemoveDashType = function (x){
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}