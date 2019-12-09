const http = require("http");
const request = require("request");
const { TOKEN } = require("./config");

function onRequest(req, res) {
  req
    .pipe(
      request("https://api.github.com/graphql", {
        headers: { Authorization: `bearer ${TOKEN}` }
      })
    )
    .pipe(res);
}

http.createServer(onRequest).listen(4000);
