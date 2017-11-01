var express = require('express');
var router = express.Router();
var mysql =require('mysql');
var con=mysql.createPool({
  host: 'localhost',
  user:'root',
  password:'123456',
  database:'item'
})

/* GET users listing. */
//router.post('/list', function(req, res, next) {
//    con.query('SELECT *',function(err,rows,fields){
//      res.header('Access-Control-Allow-Origin','*')
//      res.send(rows)
//
//    })
//});

router.post('/list2', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  var abc=req.body.abc
  con.query('SELECT * FROM sou WHERE name LIKE "%'+abc+'%"',function(err,rows,fields){
    if(err) throw err
    res.send(rows)
  })
});



module.exports = router;
