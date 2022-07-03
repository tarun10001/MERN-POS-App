const express = require('express');
const dbConnect = require('./dbConnect');

const cors = require('cors');

const itemsRoute = require('./routes/itemsRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/items/', itemsRoute);


const port = 5000;


app.get('/', (req, res) => res.send("Hello world home route"));
app.listen (port, () => console.log(`App listening on port ${port}`))