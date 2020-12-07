const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(function (req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });

// require("./routes_en/routes")(app);
// require("./routes_de/routes")(app);
require("dotenv").config();

// app.use("/:lang/hello", async (req, res) => {
//   console.log(req.params.lang);
//   const language = req.params.lang;
//   const response = (await language) == "de" ? "Wilcommen" : "Welcome";
//   res.send(response);
// });

app.get("/test", async (req, res) => {
  const userIp = await req.ip;
  const message = `Welcome ${userIp}`;
  res.send(message);
});

app.get("/recaptcha/:token", async (req, res) => {
  const token = req.params.token;

  const captchaSecret = process.env.reCAPTCHA_secret;
  try {
    const isHuman = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${token}`,
      {
        method: "post",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `secret=${captchaSecret}&response=${token}`,
      }
    );

    if (!token || !isHuman.data.success) {
      res.status(400).json({
        msg: false,
      });
    }

    res.status(200).json({ msg: isHuman.data.success });
  } catch (error) {
    res.status(400).json({
      msg: `Something went wrong. This may give you an idea: ${error}`,
    });
  }
});

app.post("/contactformhandler", async (req, res) => {
  const formData = await req.body;
  console.log("\x1b[44m%s\x1b[0m", formData);
  res
    .status(200)
    .json({
      msg: `Dear ${formData.name}, thank you for your message. We will get back to you as soon as possible. Have a nice day! `,
    });
});

// 'error-codes': [ 'missing-input-response', 'missing-input-secret' ]

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening port ${PORT}`));
