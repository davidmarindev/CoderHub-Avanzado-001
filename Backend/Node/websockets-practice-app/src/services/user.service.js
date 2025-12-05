class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async createUser(userData) {
        try {
            const user = await this.userModel.create(userData);
            return user;
        } catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }

    async getUserById(userId) {
        try {
            const user = await this.userModel.findByPk(userId);
            return user;
        } catch (error) {
            throw new Error('Error retrieving user: ' + error.message);
        }
    }

    async getAllUsers() {
        try {
            const users = await this.userModel.findAll();
            return users;
        } catch (error) {
            throw new Error('Error retrieving users: ' + error.message);
        }
    }
}

export default UserService;