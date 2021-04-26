// const express = require('express'); //common js module syntax
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

//because we are using webpack and babel over the the entire codebase, which includes the node.js code inside the index.js file, so we can use ES2015 syntax as well.
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	const content = renderToString(<Home />);
	//webpack and babel setup gets node.js server to recognize JSX

	const html = `
  <html>
    <head></head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
    </body>
  </html>
  `;

	res.send(html);
});

app.listen(3000, () => {
	console.log('listening on port 3000!');
});
