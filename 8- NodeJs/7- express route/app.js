const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

// navigation content data
let indexData = {
    title: "Books Store",
    nav:[{title: 'Authors', link: '/authors'},
    {title: 'Books', link: '/books'}]
};
const books = [
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'Les Misérables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      read: false
    },
    {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false
    },
    {
      title: 'A Journey into the Center of the Earth',
      genre: 'Science Fiction',
      author: 'Jules Verne',
      read: false
    },
    {
      title: 'The Dark World',
      genre: 'Fantasy',
      author: 'Henry Kuttner',
      read: false
    },
    {
      title: 'The Wind in the Willows',
      genre: 'Fantasy',
      author: 'Kenneth Grahame',
      read: false
    },
    {
      title: 'Life On The Mississippi',
      genre: 'History',
      author: 'Mark Twain',
      read: false
    },
    {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }];
  
// create a public folder for js and css files and maybe imgs
app.use(express.static(path.join(__dirname,'public')));

app.get('/books', (req, res)=>{
    //res.send('Hello world');
    //res.sendFile(path.join(__dirname, '/src/views/index.html'));
    indexData.title="Books";
    indexData.books=books;
    res.render('books',indexData );
});
app.get('/authors',(req, res)=>{
    res.send("Hello Authors");
});
app.get('/', (req, res)=>{
    //res.send('Hello world');
    //res.sendFile(path.join(__dirname, '/src/views/index.html'));
    indexData.title="Books Store";
    res.render('index',indexData );
});

app.listen(port, ()=>{console.log(`server start at port number ${port}`);});