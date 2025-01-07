const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require("./routes");

dotenv.config();

app.use(express.static('./uploads'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use("/v1", routes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`[Server] Server is running on port ${process.env.PORT || 3000}, http://localhost:${process.env.PORT || 3000}`);
});