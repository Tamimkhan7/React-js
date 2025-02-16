Array.prototype.myPush = function (...a) {
    this.push(...a);
    init();
};


const display = document.getElementById("fruits");
const button = document.getElementById("button");

let fruits = ['Mango', 'Guava', 'Apple', 'Orange'];

const init = function () {
    display.innerHTML = '';
    fruits.sort().forEach(fruit => {
        let item = document.createElement("li");
        item.textContent = fruit;
        display.appendChild(item);
    });
}

const addItem = function () {
    let input = document.getElementById('input').value.trim();
    if (input) {
        fruits.myPush(input);
        document.getElementById('input').value = '';
    }
}

button.addEventListener("click", addItem);
init(); 
