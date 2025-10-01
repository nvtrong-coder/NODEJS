const db = require('./db');

const User = {
  getAllUsers: async () => {
    const [rows] = await db.query("SELECT id, name, email FROM users");
    return rows;
  },

  createUser: async (name, email) => {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    return result.insertId;
  }
};

module.exports = User;
