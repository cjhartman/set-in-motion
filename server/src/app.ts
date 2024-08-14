import express from "express";
import listRoutes from "./routes/listRoutes";
import cors from "cors";

const app = express();

// Allow requests from http://localhost:3000
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  // If you need to include credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/lists", listRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
