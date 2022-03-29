const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/library');
}

//creating section model of books ==>
const sectionSchema = new mongoose.Schema({
    section_name: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Section = mongoose.model('section', sectionSchema); //sections

//creating books model ==> 
const bookSchema = new mongoose.Schema({
    book_name: { type: String, required: true },
    book_check:{type:Boolean, required: false, default: false},
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'section',
        required: true,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'author',
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true
});

const Book = mongoose.model('book', bookSchema); //books

//creating author Schema ==>
const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Author = mongoose.model('author', authorSchema); //authors


//creating checkout model ==>
const checkoutSchema = new mongoose.Schema({
    book_ids: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'book',
            required: true,
        },
    ]
}, {
    versionKey: false,
    timestamps: true
});

const Checkout = mongoose.model('checkout', checkoutSchema);


//                  <==== CRUD [independent first and than dependent models] ====> 

//                  <==== CRUD [independent sections] ====> 
//posting any new book section ==>
app.post('/sections', async (req, res) => {
    const sections = await Section.create(req.body);

    res.status(201).json({ sections });
})

//get all sections
app.get('/sections', async (req, res) => {
    const sections = await Section.find().lean().exec();

    res.status(200).json({ sections });
});

//get single Section ==>
app.get('/sections/:id', async (req, res) => {
    const section = await Section.findById(req.params.id).lean().exec();

    res.status(200).json({ section });
})

//update single section
app.patch('/sections/:id', async (req, res) => {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json({ section });
});

//delete single sections ==> 
app.delete('/sections/:id', async (req, res) => {
    const section = await Section.findByIdAndDelete(req.params.id);

    res.status(200).json({ section });
});


//                  <==== CRUD [independent author] ====>  
//posting any new book section ==>
app.post('/authors', async (req, res) => {
    const authors = await Author.create(req.body);

    res.status(201).json({ authors });
})

//get all sections
app.get('/authors', async (req, res) => {
    const authors = await Author.find().lean().exec();

    res.status(200).json({ authors });
});

//get single author ==>
app.get('/authors/:id', async (req, res) => {
    const author = await Author.findById(req.params.id).lean().exec();

    res.status(200).json({ author });
})

//update single section
app.patch('/authors/:id', async (req, res) => {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json({ author });
});

//delete single sections ==> 
app.delete('/authors/:id', async (req, res) => {
    const author = await Author.findByIdAndDelete(req.params.id);

    res.status(200).json({ author });
});


//                  <==== CRUD [Books ==> child=[author,section], parent =[checkout]] ====>  

//posting any new book  ==>
app.post('/books', async (req, res) => {
    const books = await Book.create(req.body);

    res.status(201).json({ books });
})

//get all sbooks
app.get('/books', async (req, res) => {
    const books = await Book.find({"book_check":{$ne:true}}).populate('section_id').populate('author_id').lean().exec();

    res.status(200).json({ books });
});

//get singlebooks ==>
app.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id).populate('section_id').populate('author_id').lean().exec();

    res.status(200).json({ book });
})

//update single books
app.patch('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json({ book });
});

//delete single sbooks ==> 
app.delete('/books/:id', async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({ book });
});


//finding all books written by an author ==>
app.get('/authors/:id/books', async (req, res) => {
    const book = await Book.find({ author_id:req.params.id }).populate('section_id').populate('author_id').lean().exec();

    res.status(200).json({ book });
})

//finding all books from a particular section ==>
app.get('/sections/:id/books', async (req, res) => {
    const books = await Book.find({ section_id: req.params.id }).populate('section_id').populate('author_id').lean().exec();
    
    res.status(200).json({ books });
})

//finding all books which are checked ==>
// app.get('/check', async (req, res)=> {
//     const books = await Book.find({ $not: { book_check: true } }).populate('section_id').populate('author_id').lean().exec();
    
//     res.status(200).json({ books });
// })

// app.get('/posts/:id/comments', async (req, res) => {
//     const comments = await Comment.find({ post_id: req.params.id }).lean().exec();
//     const post = await Post.findById(req.params.id).populate('user_id').populate('tag_ids').lean().exec();

//     res.status(200).json({comments,post})
// })


//                  <==== CRUD [Checkout] ==> child=[book] ====>  
app.post('/checkouts', async (req, res) => {
    const checkout = await Checkout.create(req.body);

    res.status(201).json({ checkout });
})

//get all sbooks checked out
app.get('/checkouts', async (req, res) => {
    const checkouts = await Checkout.find().populate('book_ids').lean().exec();

    res.status(200).json({ checkouts });
});

app.delete('/checkouts/:id', async (req, res) => {
    const checkout = await Checkout.findByIdAndDelete(req.params.id);

    res.status(200).json({ checkout });
});

app.listen(1122, async () => {
    connect();
    console.log('istening to port 1122')
})