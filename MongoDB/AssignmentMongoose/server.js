const express = require('express');
const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/entertainment',{
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
}

const app = express();
app.use(express.json());

//step 1 create schema[bluprint] constructor==>
const moviesSchema = new mongoose.Schema({
    movie_name: { type: String, rquire: true },
    movie_genre: { type: String, rquired: true },
    production_year: { type: Number, required: true },
    budget:{type:Number,required:true}
})

//Step 2 creating model from mongoose==>
const Movie = mongoose.model('movie', moviesSchema);

//Get all movies==> 
app.get('/entertainment', async (req, res) => {
    try {
        const movies = await Movie.find({ budget: { $gt: 19000 } }).lean().exec();

    res.send(movies);
    }
    catch (err) { console.log(err) }
    
})

//posting single movie==>
app.post('/entertainment', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);

    res.status(201).json({ movie });
    } catch (err) {
        console.log(err)
    }
    
});

//update a movie==> 
app.patch('/entertainment/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json({ movie })
    }
    catch (err) { console.log(err) }
    
});

//get only single movie==> 
app.get('/entertainment/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).lean().exec();

    res.status(200).json({ movie }) 
    }
    catch (err) { console.log(err) }
   
});

//delete only one movie==>
app.delete('/entertainment/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);

    res.status(200).json({ movie }); 
    }
    catch (err) { console.log(err) }
   
})





app.listen(3333, async () => {
    await connect();
    console.log('listening to port 3333');
});