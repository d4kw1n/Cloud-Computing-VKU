const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require("./routes");
const path = require('path');
const connectDB = require("./db/connect");

const app = express();
app.set('view engine', 'pug');
app.set('views', './templates');
dotenv.config();

connectDB();

app.use(express.static('./uploads'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use("/v1", routes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/template', (req, res) => {
    res.render('index', { title: 'Trang Chủ', message: 'Chào mừng bạn đến với Pug!' });
});

app.get('/table', (req, res) => {
    res.render('table', { title: 'Danh sách sản phẩm', message: 'Danh sách sản phẩm' });
});

app.use('/api', require('./routes/api'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`[Server] Server is running on port ${process.env.PORT || 3000}, http://localhost:${process.env.PORT || 3000}`);
});