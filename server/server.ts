import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const server = http.createServer(app);

const publicPath = path.join(__dirname, '../dist');
app.use(express.static(publicPath));





const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});