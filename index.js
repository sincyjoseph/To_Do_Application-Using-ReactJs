import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import CounterNew from './CounterNew';
import Demo from './Demo';
import DemoNew from './DemoNew';
import Demo1 from './Demo1';
import Todo from './Todo';

//var x = setInterval(()=>{
//  ReactDOM.render(
//    <React.StrictMode>
//      <Counter />
//    </React.StrictMode>,
//    document.getElementById('root')
//  );
//},1000)

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
