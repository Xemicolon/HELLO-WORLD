const http = require("http");
const server = http.createServer();
const { info, warning, success } = require("./log");
const { wejapaFormData } = require("./utils");

const port = process.env.PORT || 6500;

server.on("request", (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      `<h1 style="text-align: center; margin-top: 150px;">Hello World, Welcome to WeJapa Internships</h1>
      <h3 style="text-align: center; margin: 50px 0;">MAKE A POST REQUEST USING THE FORM BELOW</h3>
      <div style="width: 300px; margin: auto">
      <form style="display: grid;" action="/" method="POST">
      <input type="text" name="name" placeholder="Enter your name here" style="padding: 12px; margin-bottom: 20px" />
      <button style="background-color: #7ac47a; padding: 10px; color: #fff; cursor: pointer; font-size: 20px; font-weight: 600;" type="submit">Send</button>
      </form>
      </div>
      `
    );
    info(200, `You visited ${req.headers.host}${req.url}`);
  } else if (req.method === "POST" && req.url === "/") {
    res.writeHead(201, { "Content-Type": "text/html" });
    wejapaFormData(req, (data) => {
      res.end(`<h1 style="text-align: center; margin-top: 150px;">Hello ${data.name}, Welcome to WeJapa Internships</h1>
      
      <h1 style="text-align: center;"><a href="/" style="font-size: 24px;">Take me back</a></h1>`);
      info(201, `You visited ${req.headers.host}${req.url}`);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1 style="text-align: center; margin-top: 250px;">HOW DID YOU GET HERE?</h1>
      <h1 style="text-align: center;"><a href="/" style="font-size: 24px;">Take me back</a></h1>
      `);
    warning(404, `You visited ${req.headers.host}${req.url}`);
  }
});

server.listen(port, () => {
  success(`Server running on port ${port}`);
});
