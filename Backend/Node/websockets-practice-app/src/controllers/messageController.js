class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }

    async sendMessage(req, res) {
        try {
            const { content, userId, groupId } = req.body;
            const message = await this.messageService.createMessage(content, userId, groupId);
            res.status(201).json(message);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getMessages(req, res) {
        try {
            const { groupId } = req.params;
            const messages = await this.messageService.getMessagesByGroupId(groupId);
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default MessageController;