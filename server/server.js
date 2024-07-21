const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"))
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api/booking", require("./routes/bookingRoutes"))

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running in port ${port}`));
