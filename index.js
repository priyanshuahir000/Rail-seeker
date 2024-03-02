import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const APP_URL = "api.railwayapi.site";

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
