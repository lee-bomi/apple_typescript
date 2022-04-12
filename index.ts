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
