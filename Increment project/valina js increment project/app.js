const button = document.querySelector('#button');
const num = document.querySelector('#display');

let number = 0;
button.addEventListener('click', () => {
    number++;
    num.textContent = number;
})

const domcontain = document.querySelector('#root');

const myelement = React.createElement("div", null, "Hello World");
ReactDOM.render(myelement, domcontain);
