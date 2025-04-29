const express = require('express');
const app = express();

// app.use((req, res) => {
// console.log("Middleware function executed!");
// // res.send("request received!");
// // res.send({color: "red", size: "large"});
// res.send('<h1>Hello World! this is my webpage pls like and share</h1>');
// // res.send(req.body);
// // console.log(req.res);

// })
// app.get('*', (req, res) => {  
//    res.send(`I am a wildcard route!`);
// })
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  // console.log(req.params);
  // res.send('<h1>Welcome to the subreddit page</h1>');
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});
app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  // console.log(req.params);
  // res.send('<h1>Welcome to the subreddit page</h1>');
  res.send(`<h1>Viewing post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})
app.get('/cats', (req, res) => {
  res.send('<h1>Meow</h1>');
})
app.get('/dogs', (req, res) => {
  res.send('<h1>Woof</h1>');
})
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the reddit page</h1>');

})
app.get('/search', (req, res) => {
  const { q } = req.query;
  if(!q) {
    res.send('Nothing found if nothing searched!!!!!!!');
  }
  res.send(`<h1>Searching for ${q} </h1>`);
// a using we not ttype this it we come from the url the come eg commemta sections or the search bar
  // console.log(req.query);
  // res.send('i dont know what to search for');
})


app.post('/cats', (req, res) => {
  res.send('POST request to the homepage');
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})
