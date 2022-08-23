const express = require('express');
const app = express();
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}
);