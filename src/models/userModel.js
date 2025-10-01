const db = require('./db');

class User {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  static async create({ name, email }) {
    await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  }
}

module.exports = User;
