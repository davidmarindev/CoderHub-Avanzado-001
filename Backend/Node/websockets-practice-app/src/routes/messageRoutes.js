import express from 'express';
import MessageController from '../controllers/messageController.js';

const router = express.Router();
const messageController = new MessageController();

router.post('/', messageController.sendMessage.bind(messageController));
router.get('/:groupId', messageController.getMessagesByGroup.bind(messageController));

export default router;