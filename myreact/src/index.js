// import React from 'react';
// import ReactDOM from 'react-dom';

// className="heading" null ar jaygay classname name property bosiye dibe
// const element = React.createElement('h1', null, 'Hello, world');
// const element = <h>Hello world</h>;

// ReactDOM.render(element, document.getElementById('root'));
// console.log(element);

// function get_greeting(user) {
//   if (user) {
//     return <h1>Hello, {user}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const element = <h1>Hello {get_greeting("Rafiq")}</h1>;

// console.log(element);

//amra html element a jei vabe attibuted dei ak ai rokom vabe amar react a attibuted diye kaj korte pari
// const element2 = (<h1 className="heading">Hello world</h1>);

//normally ai vabe oh likha jay abar onno vabe oh likha jay, for example :----
// const element2 = (
//   <h1 className="heading" tabIndex={index}>
//     <span className="text">Hello world</span>
//     <img src="" alt="" srcset="" />
//   </h1>
// );

/*

const element2 = {
         type: 'h1',
         props: {
         className : 'heading',
         tabIndex: 0,
         children: [
         type: 'span',
         props:{       
           type: 'img',
         props:{
            scr: '',
         }
        ],
    },
 };
*/

// console.log(element2);

// const index = 0;
// setInterval(() => {
//   const element = (
//     <h1 className="heading" tabIndex={index}>
//       <span className="text">Hello {new Date().toLocaleTimeString()} </span>
//       <img src="" alt="" />
//     </h1>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }, 1000);

//  *****************************************************//////////////////////************************************ */

///react component

const index = 0;

// function clock({locale}) {
//   return (
//     <h1 className="heading" tabIndex={index}>
//       <span className="text">Hello {new Date().toLocaleTimeString()} </span>
//       <img src="" alt="" />
//     </h1>
//   );
// }
// ReactDOM.render(clock(), document.getElementById("root"));

//how to change it dynamically, now we see that

// ReactDOM.render(<clock locale="bn-BD" />, document.getElementById("root"));

// class clock {
//   print(){
//     return (
//     <h1 className="heading" tabIndex={index}>
//       <span className="text">Hello {new Date().toLocaleTimeString()} </span>
//       <img src="" alt="" />
//     </h1>
//   );
//   }
// }

// const clockcomponent = new clock();
// ReactDOM.render(clockcomponent.print(), document.getElementById("root"));
//class and inheritances extand to the clock class

// React.Component is it building class for react
//it is exactly work there
// class clock extends React.Component {
//   print() {
//     return (
//       <h1 className="heading" tabIndex={index}>
//         <span className="text">
//           Hello {new Date().toLocaleTimeString()}
//         </span>
//         <img src="" alt="" />
//       </h1>
//     );
//   }
// }
// const clockcomponent = new clock();
// ReactDOM.render(clockcomponent.print(), document.getElementById("root"));

//we can efficient more, render is a react component it is not a class or functiton 

// class clock extends React.Component {
//   render() {
//     //render holo react component ar akta function jodi amara class je less than use kore call kori then amra oita use korte pari
//     return (
//       <h1 className="heading" tabIndex={index}>
//         <span className="text">
//           Hello {new Date().toLocaleTimeString(this.props.locale)}</span>
//         {/* this.props diye value pathano kicuke ami access korte pari */}
//         <img src="" alt="" />
//       </h1>
//     );
//   }
// }
// //ai class clock ar modde diye kicu pathale amra this mathod use kore oi kaj ta korte pari
// //react ar render function call korle ai vabe declear kora jay
// ReactDOM.render(<clock locale= "bn-BD" />, document.getElementById("root"));




// class clock extends React.Component {
//   render() {
//     // this.props.locale = '';
//     // ami ai vabe korte parbo na, sei khette amar Infinity loop a pore jawar possibility ace
//     //ami aitake use kore onek kaj korte parbo but ai khane change korte parbo na, kaj ar khetto dore ami change korte parbo
//     return (
//       <h1 className="heading" tabIndex={index}>
//         <span className="text">Hello-{this.props.children}
//           {new Date().toLocaleTimeString(this.props.locale)}
//           {/* multiple time ami oita use korte pari and ar children kore oh use korte pari */}
//         </span>
//         <img src="" alt="" />
//       </h1>
//     );
//   }
// }
// //ai class clock ar modde diye kicu pathale amra this mathod use kore oi kaj ta korte pari
// //react ar render function call korle ai vabe declear kora jay
// ReactDOM.render(<clock locale="bn-BD">test</clock>,  document.getElementById("root"),);



///////////////////////////////////////**************************************///////////////////// */

//*****************************************React state and Lifecycle in class component***********************************

// amra index.js file ta je vabe paici this oi vabe akhn rakhbo
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//ai gula ace but save korle cole jay tai comment kore rakhci
// import App from './App';
// import reportWebvitals from './reportWebVitals';

ReactDOM.render(
  <React.strictMode>
    <App />
  </React.strictMode>
  document.getElementById('root')
);



reportWebvitals();

