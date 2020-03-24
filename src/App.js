import React from 'react';
import Quote from './components/quote';
import Form from './components/form';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Chuck 2020</h1>
      <Quote quote="chuck says" />
      <Form/>
    </div>
  );
}

export default App;
