class GroupController {
    constructor(groupService) {
        this.groupService = groupService;
    }

    async createGroup(req, res) {
        try {
            const { groupName } = req.body;
            const newGroup = await this.groupService.createGroup(groupName);
            res.status(201).json(newGroup);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getGroups(req, res) {
        try {
            const groups = await this.groupService.getGroups();
            res.status(200).json(groups);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getGroupById(req, res) {
        try {
            const { id } = req.params;
            const group = await this.groupService.getGroupById(id);
            if (!group) {
                return res.status(404).json({ message: 'Group not found' });
            }
            res.status(200).json(group);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default GroupController;