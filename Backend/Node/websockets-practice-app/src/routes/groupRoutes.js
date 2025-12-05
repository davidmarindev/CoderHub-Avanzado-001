const express = require('express');
const GroupController = require('../controllers/groupController');

const router = express.Router();
const groupController = new GroupController();

router.post('/', groupController.createGroup.bind(groupController));
router.get('/', groupController.getAllGroups.bind(groupController));
router.get('/:id', groupController.getGroupById.bind(groupController));

module.exports = router;