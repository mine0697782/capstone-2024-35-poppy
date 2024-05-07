const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const worksiteController = require('../controllers/worksiteController');

router.get('/worksite', isLoggedIn, worksiteController.worksite);
router.get('/worksite/:id', isLoggedIn, worksiteController.showWorksite)
router.get('/addworksite', isLoggedIn, worksiteController.addWorksite);
// router.get('/matchToWorksite', isLoggedIn, worksiteController.matchToWorksite);
router.post('/addworksite', isLoggedIn, worksiteController.postWorksite);


module.exports = router;