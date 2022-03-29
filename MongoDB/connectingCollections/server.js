const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/users');
}

//for user collection
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false },
    age:{type:Number,required:true}
}, {
    versionKey: false,
    timestamps:true})

const User = mongoose.model("student", userSchema);

//post Schema==>[user posting comment => user parent ==> tag is also a parent]
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
        required: true,
    },
    tag_ids: [ //since it can have  multiple tags therfore array
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tag',
            required:false, //not neccesarliy added
        }
    ],

}, {
    versionKey: false,
timestamps:true});

const Post = mongoose.model('post',postSchema) //create new collection posts keeping Id from users<==

//comment Schema==>[only connect with parent post]
const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true,
    },
    
}, {
    versionKey: false,
    timestamps:true});

const Comment = mongoose.model('comment', commentSchema); //genrate comments collection keeping id from posts

//tags ==>[parent of post]
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Tag = mongoose.model('tag',tagSchema)//create tags collection
//end of creating all collections<==

//wrinting all CRUD operations for all collectins==> always write CRUD operation first for Independet collection(parents)==> [1)users , 2)tags]


//              <=================== CRUD operation for users =======================>
//create user ==>

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);

    res.status(201).json({user})
})

//get all users==> 
app.get('/users', async (req, res) => {
    const users = await User.find({age:{$gt:95}}).lean().exec();
     
    res.status(200).json({users})
})

//get only one user===>
app.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id).lean().exec();

    res.status(200).json({user})
})

//update single user ==> 
app.patch('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(2001).json({user})
})

//delete single user==>
app.delete('/users/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)

    res.status(200).json({user})
})
//end of CRUD users

//                    <============ CRUD operation for Tag[parent:independent] =============>

//create tags ==>

app.post('/tags', async (req, res) => {
    const tags = await Tag.create(req.body);

    res.status(201).json({tags})
})

//get all tags==> 
app.get('/tags', async (req, res) => {
    const tags = await Tag.find().lean().exec();
     
    res.status(200).json({tags})
})

//get only one tgs===>
app.get('/tags/:id', async (req, res) => {
    const tag = await Tag.findById(req.params.id).lean().exec();

    res.status(200).json({tag})
})

//update single tags ==> 
app.patch('/tags/:id', async (req, res) => {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json({tag})
})

//delete single tags==>
app.delete('/tags/:id', async (req, res) => {
    const tag = await Tag.findByIdAndDelete(req.params.id)

    res.status(200).json({tag})
})
//end of CRUD tags

//             <============ CRUD operation for post[parent:comment && child:tags] =============>
//posting any post==>
app.post('/posts', async (req, res) => {
    const post = await Post.create(req.body);

    res.status(201).json({ post });
});

//Important ==> get all posts ===>
app.get('/posts', async (req, res) => {
    const posts = await Post.find().populate('user_id').populate('tag_ids').lean().exec();

    res.status(200).json({ posts });
}) //if we are not writing .populate(), it will give only id not not whole object of that particular id==>

//get single post ==> 
app.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id).populate('user_id').populate('tag_ids').lean().exec();

    res.status(200).json({post})
})

//Update and delete will be same as previous ===>
//update single post ==> 
app.patch('/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json({post})
})

//delete single post==>
app.delete('/posts/:id', async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id)

    res.status(200).json({post})
})

//some Advanced operations Mixed ===>
//get all comments ralated to single post ==>
app.get('/posts/:id/comments', async (req, res) => {
    const comments = await Comment.find({ post_id: req.params.id }).lean().exec();
    const post = await Post.findById(req.params.id).populate('user_id').populate('tag_ids').lean().exec();

    res.status(200).json({comments,post})
})
//end of CRUD post



//             <============ CRUD operation for comment[child:post] =============>
//posting commentcomments==>
app.post('/comments', async (req, res) => {
    const comment = await Comment.create(req.body);

    res.status(201).json({ comment });
});

//Important ==> get all comments ===>
app.get('/comments', async (req, res) => {
    const comments = await Comment.find().populate('post_id').lean().exec();

    res.status(200).json({ comments });
})

//get single comments ==> 
app.get('/comments/:id', async (req, res) => {
    const comment = await Comment.findById(req.params.id).populate('post_id').lean().exec();

    res.status(200).json({comment})
})

//Update and delete will be same as previous ===>
//update single comments ==> 
app.patch('/comments/:id', async (req, res) => {
    const post = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json({post})
})

//delete single comment==>
app.delete('/comments/:id', async (req, res) => {
    const comment = await Comment.findByIdAndDelete(req.params.id)

    res.status(200).json({comment})
})
//end of CRUD comment

app.listen(1111, async () => {
    await connect();
    console.log('listening to port 1111')
})