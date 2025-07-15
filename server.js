const express = require("express");
const app = express();
const userRoutes = require("./routes/user.route");
require("./db");
app.use(express.json());
app.use("/user", userRoutes);

app.listen(3001, () => console.log("Server is live at port 3001"));
