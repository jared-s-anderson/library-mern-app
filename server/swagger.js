const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Books API",
    description: "Book Information",
  },

  host: "localhost:3000",
  schemes: ["http", "https"],
};

const outputFile = "swagger-output.json";
const endpointsFile = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFile, doc);
