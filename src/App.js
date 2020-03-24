import React from 'react';
import Quote from './components/quote';
import Form from './components/form';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Chuck Says</h1>
      <Quote quote="Chuck Norris never dies" />
      <button type="button">Refresh Quote</button>
      <br />
      <br/>
      <Form/>
    </div>
  );
}

export default App;
