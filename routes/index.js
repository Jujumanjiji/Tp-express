var express = require('express').Router();
var router = express.Router();
const Todo = require('../Model/Todo')

//OK
router.get('/', function(req, res) {
  //renvoie sur la page d'index
  res.render('todos', { title: 'Express' });
});

// OK ?
router.post('/', async function(req,res) {
  //création d'un contenu
  var message = req.body.message;
  console.log(message);
  if (message === undefined)
  {
    console.log('wrong parameter');
    return;
  }
  Todo.create({message: req.body.message});
  res.redirect('/todos');
});

//OK
router.get('/todos/:todoId', async function(req,res) {
  const id = await Todo.findById(req.params.todoId); // id = tableau de resultat
  console.log(id);
  res.render('todos', { title: 'todos list'});
});

//COOL
router.get('/todos?limit=20&offset=0',function(req,res){
  const limit = req.params.limit;
  const offset = req.params.offset;
  
  if (isNaN(limit)) limit = undefined;
  if (isNaN(offset)) offset = undefined;

  const todos = await Todo.findAll({offset, limit});
  res.render('todos', { title: 'todos list', todos});
});

//OK
router.delete('/todos/:todoId', function(req,res) {
  Todo.destroy(req.param.todoId);
  res.redirect('/todos');
});

//OK
router.patch('/todos/:todoId', function(req,res) {

  var message = req.body.message;
  console.log(message);
  if (message === undefined)
  {
    console.log('wrong parameter');
    return;
  }

  Todo.update({message: req.body.message}, {where: {id: req.params.id}});
      res.redirect('/todos');
});

module.exports = router;
