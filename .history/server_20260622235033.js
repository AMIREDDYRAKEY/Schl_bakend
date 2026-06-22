import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/admin/authRoutes.js";
import studentRoutes from "./routes/admin/studentRoutes.js";
import feeRoutes from "./routes/admin/feeRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
//Routes
app.use("/api/auth",authRoutes);
app.use("/api/students",studentRoutes);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "School ERP Backend Running",
  });
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server Running On Port ${PORT}`
  );
});