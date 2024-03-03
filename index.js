import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const APP_URL = "https://api.railwayapi.site";
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    content: "Ensure your train number consists of 5 digits (e.g., 12601).",
  });
});

app.post("/search", async (req, res) => {
  const trainNumber = req.body.trainNumber;
  if (trainNumber.length != 5) {
    res.render("index.ejs", {
      content: "Please enter a 5 digit train number!",
    });
  }
  try {
    const response = await axios.get(APP_URL + `/api/v1/trains/${trainNumber}`);
    const trainInfo = response.data.data[0];
    res.render("index.ejs", { trainInfo });
  } catch (error) {
    console.log(`error: ${error}`);
    res.render("index.ejs", {
      error: "Error fetching train information. Please try again later.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
