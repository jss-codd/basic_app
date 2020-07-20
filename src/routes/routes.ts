import * as express from "express";
import { request } from "http";
import * as path from "path";

export class Routes {
  private app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
    this.setStaticDir();
  }

  private home(): void {
    this.app.get("/", (request, response) => {
      response.send("Hello OL friends");
    });
  }

  private setStaticDir(): void {
    this.app.use(express.static(path.join(__dirname, "../views")));
  }

  public getRoutes(): void {
    this.home();
  }
}
