import express from "express";
import {router} from "./router";

export class App {
    public server: express.Application;

    constructor(){
        this.server = express();
        this.router();
    }

    private router(){
        this.server.use(router);
    }
}
