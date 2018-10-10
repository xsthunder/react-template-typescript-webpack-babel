import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
const ele = document.getElementById('app');
ReactDom.render(<App></App>,ele)
console.log('hello hot');