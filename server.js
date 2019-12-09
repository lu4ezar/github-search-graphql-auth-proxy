const http = require("http");
const request = require("request");

const API_URL = "https://api.github.com/graphql";
const TOKEN = process.env.TOKEN || require("./config").TOKEN;
const port = process.env.PORT || 4000;

function onRequest(req, res) {
  req
    .pipe(
      request(API_URL, {
        headers: {
          Authorization: `bearer ${TOKEN}`
        }
      })
    )
    .pipe(res);
}

http.createServer(onRequest).listen(port);
