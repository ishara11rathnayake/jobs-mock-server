const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('src/data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(cors({ origin: 'https://job-finder-vue.netlify.app' }));
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});