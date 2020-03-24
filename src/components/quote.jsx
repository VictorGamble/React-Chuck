import React, { Component } from "react";

class Quote extends Component {
    state = {
      quote: "chuck does cool stuff"
  }
  
    render() {
    return (
      <div>
            <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default Quote;