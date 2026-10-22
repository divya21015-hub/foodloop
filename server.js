import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());


// HOME API

app.get("/", (req, res) => {
  res.json({
    message: "FoodLoop Backend API is running"
  });
});


// HEALTH API

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "FoodLoop API is connected"
  });
});


// PROJECT API

app.get("/api/projects", (req, res) => {

  res.json({
    project: "FoodLoop",

    purpose:
      "Turning surplus food into community value",

    features: [
      "Localized Tracking",
      "Smart Redistribution",
      "Waste Analytics",
      "Actionable Alerts",
      "Impact Dashboard",
      "Scalable Network"
    ],

    technology: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "REST APIs"
    ]
  });

});


// CONTACT API

app.post("/api/contact", (req, res) => {

  const { name, email, message } = req.body;

  if (!name || !email || !message) {

    return res.status(400).json({
      success: false,
      message: "Please provide name, email and message"
    });

  }

  console.log("New Contact Request:");
  console.log({
    name,
    email,
    message
  });

  res.json({
    success: true,
    message: "Message received successfully"
  });

});


// START SERVER

app.listen(PORT, () => {

  console.log(
    `FoodLoop backend running at http://localhost:${PORT}`
  );

});