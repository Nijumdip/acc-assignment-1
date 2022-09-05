const express = require('express');
const userControllers = require('../controllers/user.controller');
const router = express.Router();


router.route('/random').get(userControllers.getRandomUser);

router.route('/all').get(userControllers.getAllUser);

router.route('/save').post(userControllers.saveUser);

router.route('/update/:id').patch(userControllers.updateRandomUser);

router.route('/bulk-update').patch(userControllers.updateMultipleUser);

router.route('/delete/:id').delete(userControllers.deleteUser); 





module.exports = router;