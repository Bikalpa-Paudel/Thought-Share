import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('About');
})
app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>');
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});