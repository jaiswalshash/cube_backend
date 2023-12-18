const express = require('express');
const {read, remove, create, update} = require("../controllers/todoControllers.js")
const { verifyToken, optionalVerifyToken } = require("../middleware/auth");

const router = express.Router();

router.post('/', verifyToken, create);
router.get('/', optionalVerifyToken, read);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, remove);

module.exports = router;