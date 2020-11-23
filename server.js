// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
<<<<<<< HEAD
import countries from './public/lab_6/countries.js';
=======
>>>>>>> 1f589382d61739e7e31d3581ed70007a5f201e39
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/api')
  .get(async (req, res) => {
    console.log('GET request detected');
<<<<<<< HEAD
<<<<<<< HEAD
    res.send(`Lab 5 for Michael Ajibade`);

  })
  .post(async(req, res) => {
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    console.log('fetch request data', data);
    res.json(countries);
=======
    res.send('Hello World');
=======
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    console.log('data from fetch', json);
    res.json(json);
>>>>>>> 1f589382d61739e7e31d3581ed70007a5f201e39
  })
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
<<<<<<< HEAD
    res.send('Hello World');
>>>>>>> 010f2a70665ed43531a664b33587c2e19654936e
=======

    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    console.log('data from fetch', json);
    res.json(json);
>>>>>>> 1f589382d61739e7e31d3581ed70007a5f201e39
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
