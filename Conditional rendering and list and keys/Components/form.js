import React from "react";

export default class from extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JavaScript is Awesome',
        library: 'React',
        is_checked: true,
    };

    handleChange = (e) => {
        //for checking
        // console.log(e.targer.value);
        // we use setState to update a component's state,which essentially tells React that the component's data has changed and needs to re-render with the new values
        if (e.target.type === 'text') {
            this.setState({
                title: this.targer.value,
            });
        } else if (e.targer.type === 'textarea') {
            this.setState({
                text: this.targer.value,
            });
        } else if (e.targer.type === 'select-one') {
            this.setState({
                library: this.targer.value,
            });
        }
        else if (e.targer.type === 'checkbox') {
            this.setState({
                is_checked: this.targer.checked,
            });
        }
        else {
            console.log("Nothing Here");
        }
    };

    submitHandler = () => {
        const { title, text, library, is_checked } = this.state;
        // it means no default reload my page, when i push my page reload that's time my page reload on the server
        e.preventDefault();
        console.log(title, text, library, is_checked); //just print out, how to print my submithandler just seeing
    }
    render() {
        const { title, text, library, is_checked } = this.state;
        return (
            <div>  
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={null} /> // when we put the value of null that's time we write any letter or anything
                    {/* //is it control on the React not like programmer */}
                    <input type="text" placeholder="Enter title" value={title} onChange={this.handleChange} />
                    <textarea name="text" value={text} onChange={this.handleChange} />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>

                    {/* for checkboxing also check return true or false, when true is return then he will excuted this line*/}
                    {/* onchange is provided who are change this progrma as like programmer or DOM */}
                    <input type="checkbox" checked={is_checked} onChange={this.handleChange}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}