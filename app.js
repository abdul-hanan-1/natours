const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const port = '3000';

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// Application Startup
app.listen(port, () => {
  console.log('App running on port 3000');
});
