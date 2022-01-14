const express = require('express');
const router = express.Router();
const { User, Services, Orders } = require('../db/models');
const fs = require('fs').promises;
console.log(express.static.public);
const textract = require('textract');
const sendmail = require('sendmail')({ silent: true });

router.get('/', async (req, res) => {
  const services = await Services.findAll();
  console.log(services);


  res.render('index', { services, title: 'Photo and Video visit' });
});

router.post('/user', async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, phone, total } = req.body;
    const user = await User.create({ name, email, phone });
    const Service = await Services.findOne({ where: { price: Number(total) } })
    console.log('SERVICE ======> ', Service);
    const Order = await Orders.create({ user_id: user.id, service_id: Service.id, total: total })
    req.session.name = name;
    res.sendStatus(200);
    const admin = await User.findOne({ where: { id: 1 } })
    console.log('ADMIN =====>', admin);
    const read = await new Promise((res, reg) => {
      textract.fromFileWithPath(process.env.PWD + '/public/doc/maket/Dogovor.doc', (error, text) => {
        res(text);
      });
    }); 
    const findUser = await User.findOne({ where: { name: user.name }})
    const write = await read.replaceAll('userName', user.name)
                            .replaceAll('Description', Service.description)
                            .replaceAll('cost', Service.price)
                            .replaceAll('Number', findUser.id);
    User.update({ agreement: write }, { where: { name: user.name} })
    fs.writeFile(process.env.PWD + `/public/doc/users/${user.name}-Dogovor-${user.createdAt}.txt`, write);
  
      sendmail({
      from: `${admin.email}`,
      to: `${user.email}`,
      replyTo: `${user.email}`,
      subject: 'Договор на фотосъемку',
      html: 'Договор на фотосъемку',
      attachments: [
        {   // utf-8 string as an attachment
          filename: `${user.name}-Dogovor.txt`,
          content: `${write}`,
        },
      ]
    }, function (err, reply) {
      console.log(err && err.stack)
      console.dir(reply)
    })

  } catch (error) {
    console.log('Error!', error);
    res.sendStatus(500);
  }
});


module.exports = router;
