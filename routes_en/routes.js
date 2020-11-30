module.exports = function (app) {
  app.get("/en/1", async (req, res) => {
    res.send("route 1 en");
  });
};
