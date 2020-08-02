const dev = require("./environments/development/database");
const prod = require("./environments/production/database");

module.exports = ({ env }) =>
  env("NODE_ENV") === "production" ? prod({ env }) : dev({ env });
