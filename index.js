const execute = document.getElementById('execute');
let num = 0;
execute.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    if (num == 0) {
        for (let i = 0; i < input; i++) {
            var obj = document.getElementById("parent");
            var newDiv = document.createElement("span");
            obj.appendChild(newDiv);
        }
        num++;
    }
})