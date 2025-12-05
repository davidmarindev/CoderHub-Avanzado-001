class MessageService {
    constructor() {
        this.messages = [];
    }

    sendMessage(userId, groupId, content) {
        const message = {
            messageId: this.messages.length + 1,
            userId,
            groupId,
            content,
            timestamp: new Date(),
        };
        this.messages.push(message);
        return message;
    }

    getMessagesByGroup(groupId) {
        return this.messages.filter(message => message.groupId === groupId);
    }

    getMessagesByUser(userId) {
        return this.messages.filter(message => message.userId === userId);
    }
}

export default MessageService;