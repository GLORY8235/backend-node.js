const express = require('express');
const app = express();
const reddiData = require('./data1.json');
const path = require('path')

// const reddiData = require('./Express_Templating_CODE/Templating_Demo/data.json');

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public'))); // this changes the path


// console.log(reddiData);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))


// app.get('/', (req, res) =>{
//     res.send()
//     res.render('subreddit', {title: 'random'})
// })


app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('home', { title: 'Home Page' });
})

// browsing to /r/ will render the home.ejs file with the title 'Home Page'
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = reddiData[subreddit];
    if(data){
        res.render('subreddit1', { ...data });

    }else{
        res.render('notfound', { subreddit });
    }
    // console.log(data);
})
// browsing to /r/ and /r/subreddit1 will render the subreddit1.ejs file with the data from the data.json file




app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Milo', 'Luna', 'Oliver'];
    res.render('cats', {cats});
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;

    res.render('random.ejs', {num});    

})


app.listen('5000', () => {  
    console.log('Server is running on port 5000');
});