import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tamil from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(<App></App>document.getelmentbyid)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tamil rno="1001" sname="tamil" mark="100"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
