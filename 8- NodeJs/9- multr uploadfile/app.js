const express = require('express');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    //res.send('upload file form will be shown here');
    res.sendFile(__dirname + '/main.html');
});

// configuration of uploads 
// files path and the file name that will be saved
const storage =multer.diskStorage({
destination: './uploads/',
filename: function (req, file, callback) {  
    callback(null, file.originalname);
}
});
// upload single file
const upload = multer({ storage: storage });
app.use('/uploadfile', upload.single('avatar'));
app.post('/uploadfile', (req, res) => {
    res.send(req.file);
});

// upload many files max 12
app.use('/uploadfiles', upload.array('avatar', 12));
app.post('/uploadfiles', (req, res) => {
    res.send('uplaoded');
});


app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});