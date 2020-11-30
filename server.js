const express = require("express");

const app = express();

require("./routes_en/routes")(app);
require("./routes_de/routes")(app);

app.use("/:lang/hello", async (req, res) => {
  console.log(req.params.lang);
  const language = req.params.lang;
  const response = (await language) == "de" ? "Wilcommen" : "Welcome";
  res.send(response);
});

app.get("/test", async (req, res) => {
  const userIp = await req.ip;
  const message = `Welcome ${userIp}`;
  res.send(message);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening port ${PORT}`));
