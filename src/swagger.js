const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "3Line Roles API",
      version: "1.0.0",
      description: "REST API for managing and fetching user roles",
    },
    servers: [{ url: "http://localhost:8080", description: "Local server" }],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsdoc(options);
