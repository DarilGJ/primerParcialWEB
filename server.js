const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();

require('./app/routes/pelicula.route')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
