const http = require("http");
const fs = require("fs");

function resolveUrl(url) {
  if (url === "/") return { status: 200, fileName: "./public/index.html" };
  if (url === "/about") return { status: 200, fileName: "./public/about.html" };
  if (url === "/contact")
    return { status: 200, fileName: "./public/contact.html" };
  return { status: 404, fileName: "./public/404.html" };
}
const server = http.createServer((req, res) => {
  const result = resolveUrl(req.url);
  res.writeHead(result.status, { "Content-Type": "text/html" });
  const page = fs.readFileSync(result.fileName, "utf-8");
  res.write(page);
  res.end();
});

server.listen(8080);
