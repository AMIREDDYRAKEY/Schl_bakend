import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/admin/authRoutes.js";
import studentRoutes from "./routes/admin/studentRoutes.js";
import feeRoutes from "./routes/admin/feeRoutes.js";
import attendanceRoutes from "./routes/admin/attendanceRoutes.js";
import examRoutes from "./routes/admin/examRoutes.js";
import resultRoutes from "./routes/admin/resultRoutes.js";
import notificationRoutes from "./routes/admin/notificationRoutes.js";

import dashboardRoutes from "./routes/admin/dashboardRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
//Routes
app.use("/api/auth",authRoutes);
app.use("/api/students",studentRoutes);
app.use("/api/fees",feeRoutes);
app.use("/api/attendance",attendanceRoutes);
app.use("/api/exams",examRoutes);
app.use("/api/results",resultRoutes);
app.use("/api/notifications",notificationRoutes);

app.use(
  "/api/dashboard",
  dashboardRoutes
);



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