const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;

  res.writeHead(200, { "Content-Type": "text/html; charset:utf-8" });
  if (url === "/" || url === "/index") {
    res.end("<h2>Welcome to the index page.</h2>");
  } else if (url === "/about") {
    res.end("<h2>Welcome to the about page.</h2>");
  } else if (url === "/contact") {
    res.end("<h2>Welcome to the contact page.</h2>");
  } else {
    res.writeHead(404);
    res.end("<h2> The page is not found.</h2>");
  }
});

server.listen(port, () => {
  console.log(`Server is runing in this port: ${port}`);
});

/**
 * Description
1-http.createServer: Creates a server.
2-req.url: Gives the path where the browser makes the request (/, /about me, etc.).
3-res.writeHead(200, {...}): HTTP headers are written (200: successful request).
4-res.end(...): Returns HTML in response.
5-listen(5000): The server starts listening on port 5000.
 */
