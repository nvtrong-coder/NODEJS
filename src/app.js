const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware đọc dữ liệu form/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file (CSS, JS client, ảnh…)
app.use(express.static(path.join(__dirname, '../public')));

// View engine (EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Trang chủ
app.get('/', (req, res) => {
  res.render('users', { users: [] }); // render view users.ejs
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server chạy trên cổng ${PORT}`);
});
