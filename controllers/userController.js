const User = require('../models/userModel');

exports.listUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi khi lấy danh sách users" });
  }
};

exports.listUsersPage = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.render('users', { users });
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi khi render users");
  }
};

exports.addUserPage = (req, res) => {
  res.render('addUser');
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    await User.createUser(name, email);
    res.redirect('/users');
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi khi thêm user");
  }
};
