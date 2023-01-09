const router = require('express').Router();;
const { getUser ,createUser,updateUser,deleteUser} = require('../controller/users.controller');

router.get('/',getUser);
router.post('/',createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports=router;