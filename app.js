import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

app.set('view engine', 'ejs');

const PORT = 3000;

app.get('/', (req, res) => {
    res.render(`home`);
});

app.post('/thankyou', (req, res) => {

    const order = {
        fname: req.body.fname,
        email: req.body.email,
        flavor: req.body.flavor,
        cone: req.body.cone,
        toppings: req.body.toppings,
        userInput: req.body.userInput
    }

    console.log(req.body);
    res.render('confirm', { order });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
})
