const execute = document.getElementById('execute');
const parent = document.getElementById("parent");
const reload = document.getElementById('reload');
let num = 0;
let card = [];
let arrNum = 1;
execute.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    if (num == 0 && input % 2 == 0 && input != 0) {
        for (let i = 0; i < input; i++) {
            let newSpan = document.createElement("span");
            newSpan.setAttribute("class","newSpan");
            parent.appendChild(newSpan);
        } // 카드 생성
        num++; // 한 번만 실행 가능`
        for (let i = 0; i < parent.children.length; i += 2) {
            card[i] = arrNum;
            card[i + 1] = arrNum;
            arrNum++;
        } // 카드에 수 넣기
        card.shuffle(); // 카드 섞기
        for (let i = 0; i < parent.children.length; i++) {
            console.log(card[i]);
        }
        Show();
    }
    else if (input <= 0) {
        alert("양의 정수를 입력해주세요.");
    }
    else if (input % 2 != 0) {
        alert("짝수를 입력해주세요.");
    } // 예외 처리
})
reload.addEventListener('click', function () {
    location.reload();
})
function Show() {
    for(let i = 0; i < parent.children.length; i++) {
        parent.children[i].innerHTML = card[i];
    }
    setTimeout(function() {
        for(let i = 0; i < parent.children.length; i++) {
            document.getElementsByClassName('newSpan')[i].style.backgroundImage = "url('./asset/card.png')"
            parent.children[i].innerHTML = "";
        }
      }, document.getElementById('input').value * 500);
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