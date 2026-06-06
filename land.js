// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Serve the landing page (index.html)
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'public', 'index.html');
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading page');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } 
  // Handle API requests (e.g., form submission)
  else if (req.url === '/api/submit' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log('Received data:', body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Form submitted successfully!' }));
    });
  } 
  else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});   