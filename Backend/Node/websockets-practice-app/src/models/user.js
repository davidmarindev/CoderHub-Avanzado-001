class User {
    constructor(userId, username) {
        this.userId = userId;
        this.username = username;
    }

    // Method to save user to the database
    save() {
        // Logic to save user to the database
    }

    // Method to find a user by ID
    static findById(userId) {
        // Logic to find a user by ID in the database
    }

    // Method to retrieve all users
    static findAll() {
        // Logic to retrieve all users from the database
    }
}

module.exports = User;