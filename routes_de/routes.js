module.exports = function (app) {
  app.get("/de/1", async (req, res) => {
    res.send("route 1 de");
  });
};
