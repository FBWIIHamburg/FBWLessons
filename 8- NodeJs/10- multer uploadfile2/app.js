const express = require('express');

/// 1 
const multer = require('multer');


const app = express();
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
    res.sendfile(__dirname + '/uploadfile.html');
});

/// 2 set configuration for multer in a variable
const multerStoreConf = multer.diskStorage({
    destination: './uploads/',
    
    filename: function (req, file, callback) {  
        callback(null,Date.now()+"-"+file.originalname);
    }
    
});
// multer configuration done

/// 3 declare multer upload variable
const upload = multer({ storage: multerStoreConf });

/// 4 use upload for only the routes that will get posted files
// in this case, this route get only single file
app.use('/uploadsingle',upload.single('myFile'));

// route for single file upload
app.post('/uploadsingle', (req, res)=>{
    console.log(req.file);
res.send('the file suppose to be uploaded');
});

/// use upload for mutlifiles
app.use('/uploadmulti', upload.array('myFiles'));

// route for multiable files upload
app.post('/uploadmulti', (req, res)=>{
    console.log(req.files);
    res.send('the files suppose to be uploaded');
});
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});