const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser'); 
app.use(cookieParser());


dotenv.config({ path: './config.env' });

// require('./db/conn');

app.use(express.json());

 

// app.use(require('./router/auth'));


// app.use(express.json());

app.use(require('./router/auth'));

// const middleware = (req, res, next) => {
//   console.log('middleware')
//   next();
// }


app.get('/', (req, res) => {
  res.send('Hello World!  saad is here at login')
})

app.get('/signup', (req, res) => {
  res.send('Hello World!  saad is here at signup')
}
)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})