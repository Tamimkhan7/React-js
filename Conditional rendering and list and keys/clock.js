import React from "react";
import button from "./button";



class clock extends React.Component {
    constructor(props) {
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

    handleClick = (locale) => {

        this.setState({
            locale,
        });
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;


        return (

            <div><h1 className="heading">
                <span className="text">
                    {date.toLocaleTimeString(locale)}
                </span>

            </h1>
                {locale === 'bn-BD' ? <Button change={this.handleClick} locale="en-US"></Button> : <Button change={this.handleClick} locale="bn-BD"></Button>}
            </div>

        );
    }
}


export default clock;

