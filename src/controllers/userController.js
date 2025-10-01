const User = require('../models/userModel');

// Hiển thị danh sách user
exports.listUsers = async (req, res) => {
  const users = await User.getAll();
  res.render('users', { users });
};

// Hiển thị form thêm user
exports.addUserForm = (req, res) => {
  res.render('addUser');
};

// Lưu user mới
exports.saveUser = async (req, res) => {
  const { name, email } = req.body;
  await User.create({ name, email });
  res.redirect('/users');
};
