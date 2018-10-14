import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
const ele = document.getElementById('app');
ReactDom.render(<App></App>,ele)
const obj = {a:1};
const a = {...obj};
console.log('hello hot', a);
