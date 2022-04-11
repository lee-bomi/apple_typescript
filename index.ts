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




