let 제목 = document.querySelector('#title');
if (제목 != null) {
    제목.innerHTML = '반가워용';
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}

let 버튼 = document.getElementById('button');
//기본
if (버튼 instanceof HTMLElement) {
    버튼.addEventListener('click', function () {
        console.log('안뇽');
    })
}
//optional chaining 사용
버튼?.addEventListener('click', function(){
    console.log('안녀엉');
})

//숙제
let 버튼쓰 = document.getElementById('#button');
let 이미지 = document.querySelector('#image');
if (버튼쓰 != null) {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = 'change.jpg';
    }
}

let naverlink = document.querySelectorAll('.naver');
naverlink.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com'
    }
})

if(naverlink?.)