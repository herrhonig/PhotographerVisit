require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const serviceRouter = require('./routes/service');
const adminRouter = require('./routes/admin');

const app = express();
const PORT = process.env.PORT ?? 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
  store: new FileStore({}),
  secret: process.env.SECRET ?? 'qwerty',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'Auth',
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/service', serviceRouter);
app.use('/admin', serviceRouter);

app.listen(PORT, () => {
  console.log('Server started on port: ', PORT);
});
