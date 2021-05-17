const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
})


//THIS IS FOR THE PHP POST, STILL NOT WORKING

// router.post('/php/mail.php', (req, res) => {
//     console.log(req.body);
//     res.redirect('/');
// })

module.exports = router;