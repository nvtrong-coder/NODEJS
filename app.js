const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware đọc dữ liệu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send("Trang chủ NodeJS + Express!");
});

app.listen(PORT, () => {
  console.log(`Server chạy trên cổng ${PORT}`);
});
