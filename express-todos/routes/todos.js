var express = require('express');
var router = express.Router();
const todosCtrl = require("../controllers/todos");

/* GET users listing. */
router.get('/', todosCtrl.index);
router.get("/new", todosCtrl.new);
router.get("/:id", todosCtrl.show);
router.post("/", todosCtrl.create);
router.delete('/:id', todosCtrl.delete);
router.get('/:id/edit', todosCtrl.edit);
router.put("/:id", todosCtrl.update);
// GET /todos/:id/edit

// PUT /todos/:id
module.exports = router;

