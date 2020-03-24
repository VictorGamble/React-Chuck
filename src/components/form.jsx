import React, { Component } from "react";

class Form extends Component{
    render() {
        return (
            <form>
                <input placeholder="please select a Category"></input>
                <br></br>
                <button type="submit">Get Quote</button>
            </form>
        )
    };
};

export default Form;