const multer = require('multer'); //for uploading files we require this package ==>

const path = require('path'); //this is from multer package to give direction to file that we are uploading this file in a right directory ==>

const storage = multer.diskStorage({ //this will take 2 objects ==>
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "../uploads")); //directory of path name ==>
    },
    filename: (req, file, callback) => { //file inbuit from multer ==>
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
        callback(null, uniqueSuffix + file.originalname);
    }
});

const fileFilter = (req, file, callback) => { //mimetype === fileType
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null,true)
    }
    else{
        callback(null, false);
    }
}

module.exports = multer({
    storage:storage,
    fileFilter:fileFilter,
    limit: {
        fileSize: 1024 * 1024 * 5,
    }
});
