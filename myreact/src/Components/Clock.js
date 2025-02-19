import React from "react";

class clock extends React.Component {
  // why we use constructor in the react component class:-- It is used to initialize objects i.e, State in React JS. It is used to bind methods in React JS. It is used to read or access a parent's property from a child's component in React JS.
  //amra jokhn constructor ke call korbo sathe sathe amra oi class ar props gula peye jabo default vabe
  constructor(props) {
    super(props); //super means ami prarent value ke bujacci as like inheritances
    this.state = { date: new Date() };
  }
  //why we use componentDidMount  In React, the componentDidMount function is used to perform any necessary setup tasks or side effects after a component has been rendered and added to the DOM,
  componentDidMount() {
    //i do use to here at setInterval for data my updated date or time
    setInterval(() => {
      //setState is a state for update time or date,,,setState function diye amra basically time ke update kori
      this.setState({
        date: new Date(),
      });
    }, 1000); // is it 1000 ms, or 1's. how many time after my clock has change
  }

  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {this.state.date.toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    );
  }
}

export default clock;
