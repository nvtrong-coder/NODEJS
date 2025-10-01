// File này hosting sẽ chạy
// Nó chỉ làm nhiệm vụ bootstrap (load dist hoặc src)
// app.js (root)
try {
  require('./dist/app');
} catch (err) {
  console.error('Failed to load dist/app. Have you run npm run build?');
  console.error(err);
  // fallback: chạy src trực tiếp (chỉ dev local)
  require('./src/app');
}
