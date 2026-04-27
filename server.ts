// import "dotenv/config";
// import express, { NextFunction, Request, Response } from "express";
// import CustomError, {
//   errorHandler,
// } from "./middlewares/error-handler.middleware";
// import { connectDb } from "./config/db-connect";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// // importing routes
// import authRoutes from "./routes/auth.routes";
// import categoryRoutes from "./routes/category.routes";
// import productRoutes from "./routes/product.routes";
// import cartRoutes from "./routes/cart.routes";
// import wishlistRoutes from "./routes/wishlist.routes";
// import orderRoutes from "./routes/order.routes";
// const app = express();
// const PORT = process.env.PORT || 8080;
// const DB_URI = process.env.DB_URI ?? "";

// // connecting database
// connectDb(DB_URI);

// //! using middlewares
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
//     credentials: true,
//   }),
// );
// //* to set security headers / removes insecure headers
// app.use(helmet());
// //* parse req cookie
// app.use(cookieParser());
// //* parse url-encoded & multipart/formdata data
// app.use(express.urlencoded({ extended: true }));

// // parse json data
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Server is up & running",
//   });
// });

// // using routes
// try {
//   console.log("Mounting auth routes...");
//   app.use("/api/auth", authRoutes);
//   console.log("✓ Mounted auth routes");

//   console.log("Mounting category routes...");
//   app.use("/api/category", categoryRoutes);
//   console.log("✓ Mounted category routes");

//   console.log("Mounting product routes...");
//   app.use("/api/product", productRoutes);
//   console.log("✓ Mounted product routes");

//   console.log("Mounting cart routes...");
//   app.use("/api/cart", cartRoutes);
//   console.log("✓ Mounted cart routes");

//   console.log("Mounting wishlist routes...");
//   app.use("/api/wishlist", wishlistRoutes);
//   console.log("✓ Mounted wishlist routes");

//   console.log("Mounting order routes...");
//   app.use("/api/order", orderRoutes);
//   console.log("✓ Mounted order routes");

//   console.log("All routes mounted successfully!");
// } catch (error) {
//   console.error("Error mounting routes:", error);
//   process.exit(1);
// }

// // Handle 404 for all unmatched routes
// app.use((req: Request, res: Response, next: NextFunction) => {
//   const message = `Can not ${req.method} on ${req.url}`;

//   const error = new CustomError(message, 404);

//   next(error);
// });

// // Error handler middleware
// app.use(errorHandler);

// console.log("About to start listening...");
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import CustomError, {
  errorHandler,
} from "./middlewares/error-handler.middleware";
import { connectDb } from "./config/db-connect";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

// routes
import authRoutes from "./routes/auth.routes";
import categoryRoutes from "./routes/category.routes";
import productRoutes from "./routes/product.routes";
import cartRoutes from "./routes/cart.routes";
import wishlistRoutes from "./routes/wishlist.routes";
import orderRoutes from "./routes/order.routes";

const app = express();
const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB_URI ?? "";

// ✅ Connect DB
connectDb(DB_URI);

// ✅ MIDDLEWARES (ORDER IMPORTANT)

// parse json first
app.use(express.json());

// parse urlencoded
app.use(express.urlencoded({ extended: true }));

// parse cookies
app.use(cookieParser());

// security headers
app.use(helmet());

// ✅ CORS (IMPORTANT FIX)
app.use(
  cors({
    origin: "http://localhost:3000", // ✅ frontend URL (fix for cookies)
    credentials: true, // ✅ allow cookies
  }),
);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up & running",
  });
});

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/order", orderRoutes);

// ✅ 404 HANDLER
app.use((req: Request, res: Response, next: NextFunction) => {
  const message = `Cannot ${req.method} on ${req.url}`;
  next(new CustomError(message, 404));
});

// ✅ GLOBAL ERROR HANDLER
app.use(errorHandler);

// ✅ START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
