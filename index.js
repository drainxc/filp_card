const execute = document.getElementById('execute');
const parent = document.getElementById("parent");
const reload = document.getElementById('reload');
let num = 0;
let card = [];
let arrNum = 0;
let flip = 0;
let front = [];
execute.addEventListener('click', function () { // 실행 버튼 눌렀을 때
    const input = document.getElementById('input').value;
    if (num == 0 && input % 2 == 0 && input != 0) {
        for (let i = 0; i < input; i++) {
            let newSpan = document.createElement("span");
            newSpan.setAttribute("class", "newSpan");
            parent.appendChild(newSpan);
        } // 카드 생성
        num++; // 한 번만 실행 가능`
        for (let i = 0; i < parent.children.length; i += 2) {
            arrNum++;
            card[i] = arrNum;
            card[i + 1] = arrNum;
        } // 카드에 수 넣기
        card.shuffle(); // 카드 섞기
        for (let i = 0; i < parent.children.length; i++) {
            console.log(card[i]);
        }
        allShow();
    }
    else if (input <= 0) {
        alert("양의 정수를 입력해주세요.");
    }
    else if (input % 2 != 0) {
        alert("짝수를 입력해주세요.");
    } // 예외 처리
})
reload.addEventListener('click', function () { // 다시 시작 버튼 눌렀을 때
    location.reload(); // 다시 시작
})
function allShow() {
    for (let i = 0; i < parent.children.length; i++) {
        parent.children[i].innerHTML = card[i];
    } // 앞면 숫자 보여주기
    setTimeout(function () {
        for (let i = 0; i < parent.children.length; i++) {
            document.getElementsByClassName('newSpan')[i].style.backgroundImage = "url('./asset/card.png')"
            parent.children[i].innerHTML = "　"; // 공백 문자
        }
    }, document.getElementById('input').value * 250); // 기억할 시간
    click();
}
Array.prototype.shuffle = function () {
    let length = parent.children.length;
    while (length) {
        let index = Math.floor(length-- * Math.random());
        let temp = this[length];
        this[length] = this[index];
        this[index] = temp;
    }
    return this;
}; // 랜덤 배열
function click() {
    for (let i = 0; i < parent.children.length; i++) {
        parent.children[i].addEventListener('click', function () { // 카드를 눌렀을 때
            document.getElementsByClassName('newSpan')[i].style.backgroundImage = "url('')";
            parent.children[i].innerHTML = card[i]; // 앞면으로 뒤집기
            front[flip] = card[i];
            if (flip >= 1) {
                if (front[flip - 1] == front[flip]) {
                    setTimeout(function () {
                        alert('맞았습니다!');
                    }, 100)
                    flip = 0;
                }
                else {
                    setTimeout(function () {
                        alert('틀렸습니다!');
                        for (let i = 0; i < parent.children.length; i++) {    
                            document.getElementsByClassName('newSpan')[i].style.backgroundImage = "url('./asset/card.png')";
                            parent.children[i].innerHTML = "　"; // 뒷면으로 뒤집기
                        }
                    }, 100)
                    flip = 0;
                }   
            }
            else {
                flip++; // 뒤집힌 카드 갯수
            }
        })
    }
}