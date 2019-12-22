require('dotenv').config();
const   express = require('express'),
        massive = require('massive'),
        session = require('express-session'),
        {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
        app= express();

app.use(express.json());

// CREATE SESSION
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})
// AUTH ENDPOINTS



const port = SERVER_PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));