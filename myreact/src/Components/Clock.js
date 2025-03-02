
import React from "react";
import button from "./button";
/*import React from "react";

class clock extends React.Component {
  // why we use constructor in the react component class:-- It is used to initialize objects i.e, State in React JS. It is used to bind methods in React JS. It is used to read or access a parent's property from a child's component in React JS.
  //amra jokhn constructor ke call korbo sathe sathe amra oi class ar props gula peye jabo default vabe
  //jehetu aita ai class ar property tai ar kono this function use kora lagbe na, , and normal propery moto use korte parb
  state = { date: new Date() };
  //ami ai vabe constructor ke call na diye noramlly ai class ar propery hisabe use korte pari
  // constructor(props) {
  //   super(props); //super means ami prarent value ke bujacci as like inheritances
  //   this.state = { date: new Date() };
  // }
  //why we use componentDidMount  In React, the componentDidMount function is used to perform any necessary setup tasks or side effects after a component has been rendered and added to the DOM,
  componentDidMount() {
    //i do use to here at setInterval for data my updated date or time
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  //this function will be executed here for stop the execution time
  componentWillUnmount() {
    clearInterval(this.clockTimer); //as far stop the running time
  }

  tick() {
    //setState is a state for update time or date,,,setState function diye amra basically time ke update kori
    this.setState({
      date: new Date(),
    });
  } // is it 1000 ms, or 1's. how many time after my clock has change

  render() {
    const {date} = this.state;
    const {locale} = this.props;
    return (
      <h1 className="heading">
        <span className="text">
          {date.toLocaleTimeString(locale)}
        </span>
      </h1>
    );
  }
}

export default clock;


//state is a javascript  object

*/







// ***********************************************************************************************************************************//

// Event Handling and control re rendering


class clock extends React.Component {

  // state = { date: new Date() }; we have it, but when we create a bind that's time we don't need it, but it needed when bind is close from the app

  // we solve the issue for the handleclick function, we can create a constructor for solve the and also create bind funciton for combination 
  constructor(props) {
    //constructor receive a props and we could a call super class for accessing their parents property
    super(props);
    this.state = { date: new Date(), locale: 'bn-BD' };
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  //ai issue ta solve kore jay just function ta arrow kore dile, aitai best way, onno way te kora jay, jemon aitake ami bind kore dite pari,,,, onno vabe kora jay, ami this ke kothay oh save kore rakhbe jate ai this ta change na hoy
  // and now solve the issue
  // handleClick = () => {
  //   // console.log("The button was clicked");
  //   // handleclick ar modde this ar function ta bujte parce na,,,, tai this componanet directly excess korte parce na
  //   this.setState({
  //     locale: 'en-US',
  //   });
  // }

  //jokhn paramater asbe tokhn ami locate directly call korte parbo
  handleClick = (locale) => {
    // console.log("The button was clicked");
    // handleclick ar modde this ar function ta bujte parce na,,,, tai this componanet directly excess korte parce na
    this.setState({
      locale: locale,
    });
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { date } = this.state;
    // props ke reduced kore and directly locale te hard kore dibo
    const { locale } = this.props;
    return (
      //kaorn amra jani render function akta value return korte pare tai all kicu div ar modde rekhe dici
      <div><h1 className="heading">
        <span className="text">
          {date.toLocaleTimeString("bn-BD")}
        </span>
        {/* </h1><button type="button" onClick={this.handleClick}>Click here</button></div> */}
      </h1>
        {/*Just send it to the functions and receive the clock function into the shape.  */}
        {/* <Button change={() => this.handleClick('en-US')}>Click here</Button> */}
        <Button change={this.handleClick} locale="en-US">Click here</Button>
      </div>
      // aita onno vabe oh solve kora jay like jemon bind use korte pari
    );
  }
}


export default clock;

