require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cafesRoutes = require("./routes/cafesRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/cafes", cafesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`To rodando! Na porta ${PORT}`);
});