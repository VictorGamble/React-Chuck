import React, { Component } from "react";

class Quote extends Component {
    state = {
      quote: "Fetching Data..."
    }
    
    async componentDidMount() {
        try {
          const response = await fetch(`https://api.chucknorris.io/jokes/random?category=dev`);
          const data = await response.json();
          console.log('data is', data);
          this.setState({
            quote: data.value
          })
        } catch (error) {
          console.error("Error", error);
          return error;
        }
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