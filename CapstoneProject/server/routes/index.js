var express = require('express');
var router = express.Router();

//set up database
var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')({});
var conStr = 'postgres://c4q:Queens!rocks';
conStr += '@localhost:5432/planz';
var db = pgp(conStr);

//ROUTES FOR PLANZ

//Creates new event, connected to homepage.
router.post('/newevent', function(req,res,next){
  db.none('INSERT INTO eventcreation (uniqueurl, eventname) VALUES ($1, $2)', [req.body.uniqueurl, req.body.eventname])
  .then((data) => {
    res.send(`created event for unique user: ${req.body.uniqueurl}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("error creating poll");
});
});

//This renders on compoundDidMount on Planz page to get both title and uniqueurl
router.get('/eventanduniqueurl/:uniqueurl', function(req, res, next) {
  db.any('SELECT uniqueurl, eventname FROM eventcreation WHERE uniqueurl=$1', [req.params.uniqueurl])
  .then(data => {
      res.send(data);
      console.log(data);
  })
  .catch(err=> console.log(err));
});

//Creates poll for time and date
router.post('/createtimedatepoll', function(req,res,next){
  db.none(`INSERT INTO timedatepoll (uniqueurl_id, choiceone, choicetwo, choicethree, choicefour, choicefive, choicesix, choiceseven, choiceeight, answerone, answertwo, answerthree, answerfour, answerfive, answersix, answerseven, answereight) VALUES ((SELECT id FROM eventcreation WHERE uniqueurl='${req.body.uniqueurl}'), $1, $2, $3, $4, $5, $6, $7, $8, 0,0,0,0,0,0,0,0)`, [req.body.choiceone, req.body.choicetwo, req.body.choicethree,req.body.choicefour, req.body.choicefive, req.body.choicesix, req.body.choiceseven, req.body.choiceeight])
  .then((data) => {
    res.send(`created timedate poll for id: ${req.body.uniqueurl}`);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send("error creating poll");
});
});
//Creates poll for location
router.post('/createlocationpoll', function(req,res,next){
  db.none(`INSERT INTO locationpoll (uniqueurl_id, choiceone, choicetwo, choicethree, choicefour, choicefive, answerone, answertwo, answerthree, answerfour, answerfive) VALUES ((SELECT id FROM eventcreation WHERE uniqueurl='${req.body.uniqueurl}'), $1, $2, $3, $4, $5, 0,0,0,0,0)`, [req.body.choiceone, req.body.choicetwo, req.body.choicethree,req.body.choicefour, req.body.choicefive])
  .then((data)=>{
    res.send(`created locationpoll for id: ${req.body.uniqueurl}`);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send('error creating poll');
  })
});

//this renders the time and date poll
router.get('/gettimedatepoll/:uniqueurl/', function (req, res, next){
  db.any(`SELECT * FROM timedatepoll WHERE uniqueurl_id=(SELECT id FROM eventcreation WHERE uniqueurl=$1)`, [req.params.uniqueurl])
  .then(data =>{
    res.send(data);
    console.log(data);
  })
  .catch(err=> console.log(err));
});
//this renders location poll
router.get('/getlocationpoll/:uniqueurl', function (req, res, next){
  db.any(`SELECT * FROM locationpoll WHERE uniqueurl_id=(SELECT id FROM eventcreation WHERE uniqueurl=$1)`, [req.params.uniqueurl])
  .then(data =>{
    res.send(data);
    console.log(data);
  })
  .catch(err=> console.log(err));
});

//submitting vote for time/date, this works for now, but rather have parameterized query for voteranswer, need to see if I could parse it properly.
router.put('/votingtimedate/:uniqueurl', function(req,res,next){
  db.none(`UPDATE timedatepoll SET "${req.body.voteranswer}" = "${req.body.voteranswer}" + 1 WHERE uniqueurl_id=(SELECT id FROM eventcreation WHERE uniqueurl=$1)`, [req.params.uniqueurl])
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send("error inserting vote");
  });
});

//submitting vote for location, this works for now, but rather have parameterized query for voteranswer
router.put('/votinglocation/:uniqueurl', function(req,res,next){
  db.none(`UPDATE locationpoll SET "${req.body.voteranswer}"="${req.body.voteranswer}" + 1 WHERE uniqueurl_id=(SELECT id FROM eventcreation WHERE uniqueurl=$1)`, req.params.uniqueurl)  
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send("error inserting vote");
  });
});


//for future implementation, if I don't have localstorage running by Sunday

router.put('/reducevotingtimedate/:uniqueurl', function(req,res,next){
  db.none(`UPDATE timedatepoll SET ${req.body.voteranswer} = ${req.body.voteranser} - 1 WHERE uniqueurl_id=(SELECT id FROM eventcreation WHERE uniqueurl=$1)`, [req.body.uniqueurl])
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send("error inserting vote");
  });

})

router.put('/reducevotinglocation/:uniqueurl', function(req,res,next){
  db.none(`UPDATE locationpoll SET $1 = $1 - 1 WHERE uniqueurl_id=(SELECT id FROM eventcreation WHERE uniqueurl=$2)`, [req.body.voteranswer, req.body.uniqueurl])
  .then((data)=>{
    res.send(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send("error inserting vote");
  });
})

module.exports = router;