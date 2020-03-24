import React, { Component } from "react";

class Quote extends Component {
    state = {
      quote: "Fetching Data..."
    }
    
    componentDidMount(state) {
        setTimeout((state) => {
            this.setState({
                quote: "chuck norris is awesome"
            })
        }, 3000)
    }

    render() {
        const { quote } = this.state
        return (
      <div>
        <p>{quote}</p>
      </div>
    );
  }
}

export default Quote;