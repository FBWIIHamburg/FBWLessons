const express = require('express');
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
    const booksRoutes = express.Router();

    booksRoutes.route('/').get((req, res)=>{
      res.render('books',{title: "Books List", nav: [{title: "Books", link: "/books"},
          {title: "Authors", link: "/authors"}],books: books });
    });
    booksRoutes.route('/:id').get((req, res)=>{
      res.render('singleBook',{ nav: [{title: "Books", link: "/books"},
          {title: "Authors", link: "/authors"}],book: books[req.params.id] });
    });

    module.exports=booksRoutes;
    //exports.booksRoutes=booksRoutes;