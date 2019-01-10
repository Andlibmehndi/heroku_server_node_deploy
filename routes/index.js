var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
let items=[
  {id:1,item:'Learn'},
  {id:2,item:'Play'},
  {id:3,item:'Sport'}
]
router.get('/items.json', function(req, res, next) {
  res.json(items);
});
router.post('/createuser.json', function(req, res, next) {
  items.push({
    id:req.body.id,
    item:req.body.item
  })
  res.json(items);
});
// router.delete('/items.json', function(req, res, next) {
//   items = items.filter(item=>{
//     if(item.id != req.body.id){
//       return item
//     }
//   })
//   res.json(items);
// });
module.exports = router;
