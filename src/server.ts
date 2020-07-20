import * as express from "express";
import { ChatServer } from "./chat-server";
import { Routes } from "./routes/routes";

let app = new ChatServer().getApp();
const routes = new Routes(app);
routes.getRoutes();
export { app };
