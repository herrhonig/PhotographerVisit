const express = require('express');
const router = express.Router();

/* GET admin page. */
router.get('/', async (req, res, next) => {
  res.render('adminPanel/admin');
});

  router.get('/signin', async (req, res) => {
    res.render('adminPanel/login')
  });

  router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const admin = await User.findOne({ where: { email } });
    if (user) {
      if (admin.password === req.body.password) {
        req.session.adminName = admin.name;
      req.session.adminEmail = admin.email;
      req.session.adminId = admin.id;
      res.redirect(`/admin/${user.id}`);xc
    } else {
      res.sendStatus(500);
    }
  } else {
    res.redirect('error');
  }
});

module.exports = router;
