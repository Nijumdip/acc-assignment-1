const express = require('express');
const userControllers = require('../controllers/user.controller');
const router = express.Router();

/* router.route("/").all((req, res) => {
    res.json({
        body: "user route",
    })
}); */


router.route('/random').get(userControllers.getRandomUser);

router.route('/all').get(userControllers.getAllUser);

router.route('/save').post(userControllers.saveUser);

router.route('/update/:id').patch(userControllers.updateRandomUser);

router.route('/bulk-update').patch(userControllers.updateMultipleUser);

router.route('/delete').delete(userControllers.deleteUser); 





module.exports = router;