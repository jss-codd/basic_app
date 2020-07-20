import * as express from "express";
import { createServer, Server } from "http";

export class ChatServer {
  public static readonly PORT: number = 5001;
  private app: express.Application;
  private port: string | number;
  private server: Server;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.listen();
  }

  private createApp() {
    this.app = express();
    this.app.use(express.static("public"));
  }

  private config(): void {
    this.port = process.env.PORT || ChatServer.PORT;
  }

  private listen(): void {
    //this.app.listen(this.port);
    this.server.listen(this.port, () => {
      console.log(`Server started on PORT %s`, this.port);
    });
  }

  private createServer() {
    this.server = createServer(this.app);
  }

  public getApp(): express.Application {
    return this.app;
  }
}
