const execute = document.getElementById('execute');
const parent = document.getElementById("parent");
let num = 0;
let card = [];
execute.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    if (num == 0 && input % 2 == 0 && input != 0) {
        for (let i = 0; i < input; i++) {
            let newDiv = document.createElement("span");
            parent.appendChild(newDiv);
        } // 카드 생성
        num++; // 한 번만 실행 가능
        Array.prototype.shuffle = function () {
            while (length) {
                let length = parent.children.length;
                let index = Math.floor(length-- * Math.random());
                let temp = this[length];
                this[length] = this[index];
                this[index] = temp;
            }
            return this;
        }; // 랜덤 배열
        for (let i = 0; i < parent.children.length / 2; i+=2) {
            card[i] = i;
            card[i + 1] = i;
        } // 카드에 수 넣기
        // for (let i = 0; i < parent.children.length; i++) {
        //     console.log(card[i]);
        // }
        card.shuffle();
    }
    else if (input <= 0) {
        alert("양의 정수를 입력해주세요.");
    }
    else if (input % 2 != 0) {
        alert("짝수를 입력해주세요.");
    } // 예외 처리
})