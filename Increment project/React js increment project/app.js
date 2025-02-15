// console.log(React);
// console.log(ReactDOM);

const domcontainer = document.querySelector('#root');

// const myElement = React.createElement("div", null, React.createElement("p", null, "Hello world")); //firest a akta div create korlam and then ki doroner data pass korbo oita likhbo then ami ki print korbo oita pass korbo
// // how to create react array on the html at use react render
// const myElement = React.createElement("div", null, [React.createElement("p", null, "Hello world"),
// React.createElement("p", null, "Hello world")]); //firest a akta div create korlam and then ki doroner data pass korbo oita likhbo then ami ki print korbo oita pass korbo




// const myelement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">increment +</button>
//         </div>
//     </div >
// );


const Increment = () => {
    const [counter, setcounter] = React.useState(0);
    return (
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick={() => setcounter(counter + 1)}>Increment +</button>
            </div>
        </div>
    );
};
//use multiple time and print them
// ReactDOM.render(<Increment />, domcontainer); // render method basically two ta paramater ney akta ney se ki print korbe arh second te ney kothay print korbe

ReactDOM.render(
    < div className="container" >
        <Increment />
        <Increment />
        <Increment />
    </div >,
    domcontainer); 