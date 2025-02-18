import React from 'react';
import ReactDOM from "react-dom";


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

function clock({locale}) {
  return (
    <h1 className="heading" tabIndex={index}>
      <span className="text">Hello {new Date().toLocaleTimeString(locale)} </span>
      <img src="" alt="" />
    </h1>
  );
}
// ReactDOM.render(clock(), document.getElementById("root"));


//how to change it dynamically, now we see that

ReactDOM.render(<clock locale = "bn-BD"/>, document.getElementById("root"));