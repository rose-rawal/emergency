import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import router from "../routes/index.js";
import serverrouter from "../routes/server.js";
import statsRoute from "../routes/statistics.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // or specific domains
        methods: ["GET", "POST"]
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/userdata")
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.error("DB Connection Error:", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/", router);
app.use("/server", serverrouter);
app.use("/statistics", statsRoute);

app.post("/hello", (req, res) => {
    res.send("hello");
});

// Socket.IO logic
io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("hello", (msg) => {
        console.log(msg);
        io.emit("hello", msg);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

// Start combined server
const PORT = 3030;
server.listen(PORT, () => {
    console.log(`Server (and Socket.IO) running on port ${PORT}`);
});
