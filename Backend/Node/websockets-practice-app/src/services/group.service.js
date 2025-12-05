class GroupService {
    constructor() {
        this.groups = [];
    }

    createGroup(groupName) {
        const newGroup = {
            groupId: this.groups.length + 1,
            groupName: groupName,
        };
        this.groups.push(newGroup);
        return newGroup;
    }

    getAllGroups() {
        return this.groups;
    }

    getGroupById(groupId) {
        return this.groups.find(group => group.groupId === groupId);
    }
}

export default GroupService;