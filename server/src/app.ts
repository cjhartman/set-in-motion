import express from "express";
import listRoutes from "./routes/listRoutes";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/lists", listRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
