module.exports = (app) => {
  // Base URLS
  app.use("/api/v1/persona", require("./base.routes.js"));
};
