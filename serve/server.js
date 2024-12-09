const express = require('express');
const axios = require('axios');
const app = express();
const port = 5001; // 您的接口将在这个端口上运行

// 模拟的学生数据
const students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 23 }
];

// GET请求处理 /api/students
app.get('/students', (req, res) => {
  res.json(students); // 返回模拟的学生数据
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});