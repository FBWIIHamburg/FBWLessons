const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
// another view engine called jade


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
    const booksRouter = express.Router();
    booksRouter.route('/').get((req, res)=>{
        res.render('books',{title: "Books List", nav: [{title: "Books", link: "/books"},
        {title: "Authors", link: "/authors"}],books: books });
});
booksRouter.route('/:id').get((req, res)=>{
    res.send(`this is ${req.params.id}`);
    });

app.use('/books',booksRouter);

    

app.get('/authors', (req, res)=>{
    res.send("Hello authors");
    });

app.get('/', (req, res)=>{
    //res.send("Hello Ahmad");
    res.render('index',{title: "Book Store", nav: [{title: "Books", link: "/books"},
                                                   {title: "Authors", link: "/authors"}] });
});


app.listen(port, ()=>{console.log(`Server is running on port ${port}`);})
