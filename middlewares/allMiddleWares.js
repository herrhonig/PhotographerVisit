const helloMiddleware = (req, res, next) => {
  res.locals.username = req.session?.name; // если в сессии есть name то его записываем в res.locals.username чтобы все hbs его видели
  next();
};

const userChecker = (req, res, next) => { // этот мидлвер пропускает пользователя, если он авторизован (т.е если есть ключ name в сессии) или редиректит на главную, если он не авторизован (см стр 11 в index.js роутере )
  if (req.session.name) {
    return next();
  }
  res.redirect('/');
};

module.exports = { helloMiddleware, userChecker };
