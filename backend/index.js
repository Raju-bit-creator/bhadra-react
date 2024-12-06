const express = require('express')
var cors = require('cors')
const dbConnect = require('./db')
const app = express()
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const port = 5000
dbConnect()
app.use(express.json())


// Ensure the uploads directory exists
const ensureUploadsDirectoryExists = () => {
    const dir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Call this to create the directory if it doesn't exist
ensureUploadsDirectoryExists();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        ensureUploadsDirectoryExists(); // Ensure the directory exists before saving the file
        cb(null, path.join(__dirname, 'uploads')); // Use absolute path
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + ext;
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.post('/upload',upload.single('file'), (req,res)=>{
    res.sendStatus({filePath: `/uploads/${req.file.filename}`})
})

// app.use(cors())
app.use(cors());
app.use('/api/auth', require('./routes/Auth'))
app.use('/api/product', upload.array("myfile"), require('./routes/Product'))

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);

})