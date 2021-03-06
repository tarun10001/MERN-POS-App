const express = require('express');
const dbConnect = require('./dbConnect');

const cors = require('cors');

const app = express();
app.use(express.json());

const itemsRoute = require('./routes/itemsRoute');
const usersRoute = require('./routes/UserRoute');
const billsRoute = require('./routes/billsRoute');



app.use(cors());
app.use('/api/items/', itemsRoute);
app.use('/api/users/', usersRoute);
app.use('/api/bills/', billsRoute);


const port = 5000;


app.get('/', (req, res) => res.send("Hello world home route"));
app.listen (port, () => console.log(`App listening on port ${port}`))