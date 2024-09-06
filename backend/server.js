const express = require("express");
const cors = require("cors");
const appRouter = require("./routes/appRoutes");
const app = express();
const PORT = process.env.PORT || 3000; // Create a .env if want to change PORT

//middleware
app.use(cors());
app.use(express.json());
//route
app.use(appRouter);

//server
app.listen(PORT, () => {
  console.log(`Server Listening on PORT ${PORT}`);
});
