const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const rolesRouter = require("./routes/roles");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Swagger docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check
app.get("/", (req, res) => {
  res.json({ message: "3Line Roles API is running", docs: `http://localhost:${PORT}/api/docs` });
});

// Routes
app.use("/api/roles", rolesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
