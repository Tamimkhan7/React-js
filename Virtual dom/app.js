let array = [];
increment = 0;
let container = document.querySelector('.container');

while (increment < 1000) {
    array.push(++increment);
}
container.innerHTML = array.join(' ');