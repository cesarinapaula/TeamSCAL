var express = require('express');
var router = express.Router();

//set up database
var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')({});
var conStr = 'postgres://c4q:Queens!rocks';
conStr += '@localhost:5432/capstoneproject';
var db = pgp(conStr);

//Convert into prepared statements.

router.get('/', function(req, res, next) {
  res.render('index', { title: `Planz' backend shit.` });
});

//this is just to confirm that the table is working like it ought to.  Please don't do it.
router.get('/all', function(req, res, next) {
  db.any('SELECT * FROM polllocation')
  .then(data => {
      res.send(data);
      console.log(data);
  })
  .catch(err=> console.log(err));
});

//Creates poll for time and date, need to update with uniquelink
router.post('/createpolltimedate', function(req,res,next){
  db.none(`INSERT INTO polltimeanddate (uniquelink, questiontimedate, choicetda, choicetdb, choicetdc, choicetdd, choicetde, choicetdf, choicetdg, choicetdh, answertda, answertdb, answertdc, answertdd, answertde, answertdf, answertde, answertdf, answertdg) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 0,0,0,0,0,0,0,0)`, [req.body.uniquelink, req.body.question1, req.body.choice1a, req.body.choice1b, req.body.choice1c,req.body.choice1d, req.body.choice1e, req.body.choice1f, req.body.choice1g, req.body.choice1h])
  .then((data) => {
    res.send(`created poll: ${req.body.questiontimedate}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("error creating poll");
});
});
//Creates poll for location
router.post('/createpolllocation', function(req,res,next){
  db.none(`INSERT INTO polllocation (uniquelink, questionlocation, choicelocationa, choicelocationb, choicelocationc, choicelocationd, choicelocatione, answerlocationa, answerlocationb, answerlocationc, answerlocationd, answerlocatione) VALUES ($1, $2, $3, $4, $5, $6, $7, 0, 0, 0, 0, 0)`, [req.body.uniquelink, req.body.question2, req.body.choice2a, req.body.choice2b, req.body.choice2c, req.body.choice2d, req.body.choice2e])
  .then((data)=>{
    res.send(`created poll: ${req.body.question2}`);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send('error creating poll');
  })
});

//this renders the primary/first poll
router.get('/checkingtimedate/:uniquelink/', function (req, res, next){
  db.any(`SELECT questiontimedate, choicetda, choicetdb, choicetdc, choicetdd, choicetde, choicetdf, choicetdh FROM polltimeanddate WHERE uniquelink = '${req.params.uniquelink}'`)
  .then(data =>{
    res.send(data);
    console.log(data);
  })
  .catch(err=> console.log(err));
});
//this renders secondary polls, figure out null value in react, in this.state
router.get('/checkinglocation/:uniquelink', function (req, res, next){
  db.any(`SELECT questionlocation, choicelocationa, choicelocationb, choicelocationc, choicelocationd,choicelocatione FROM polllocation WHERE uniquelink = '${req.params.uniquelink}'`)
  .then(data =>{
    res.send(data);
    console.log(data);
  })
  .catch(err=> console.log(err));
});

//router.put is assuming that the id is always unique, maybe I should put a conditional to 
//ensure that this will never run into a problem
router.put('/votingtimeanddate/:uniquelink', function(req,res,next){
  db.none(`UPDATE polltimeanddate SET ${req.body.voteranswer} = ${req.body.voteranswer} + 1 WHERE uniquelink='${req.params.uniquelink}'`)
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send("error inserting vote");
  });
});

router.put('/votinglocation/:uniquelink', function(req,res,next){
  db.none(`UPDATE polllocation SET ${req.body.voteranswer} = ${req.body.voteranswer} + 1 WHERE uniquelink='${req.params.uniquelink}'`)
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send("error inserting vote");
  });
});
//db.task perhaps for the following to update by 1 reduce 1
router.put('/reducevotingtimedate/:uniquelink', function(req,res,next){
  db.none(`UPDATE polltimeanddate SET ${req.body.voteranswer} = ${req.body.voteranswer} - 1 WHERE uniquelink='${req.params.uniquelink}'`)
})

router.put('/reducevotinglocation/:uniquelink', function(req,res,next){
  db.none(`UPDATE polllocation SET ${req.body.voteranswer} = ${req.body.voteranswer} - 1 WHERE uniquelink='${req.params.uniquelink}'`)
})

module.exports = router;