import {createServer} from 'http';

const port = process.env.PORT ?? 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('!HELLO WORLD!');
});

server.listen(port);
