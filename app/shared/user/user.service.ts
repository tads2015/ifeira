//Servisso para conexão com back-ending.
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
var Sqlite = require( "nativescript-sqlite" );

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {

  private database: any;
  
  constructor(private http: Http){
    (new Sqlite("ifeira.db")).then(db => {
        db.execSQL("CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT)").then(id => {
            this.database = db;
        }, error => {
            console.log("CREATE TABLE ERROR", error);
        });
    }, error => {
        console.log("OPEN DB ERROR", error);
    });
  }
  //Login envia em jason o usuario e recebe a resposta em jason do back-ending
  login(user: User) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");

    return this.http.post(
      Config.apiUrl + "user/login",
      JSON.stringify(user),
      {headers: headers}
    )
    .map(response => response.json())
    .do(data => {
      console.log("Entrou");
    })
    .catch(this.handleErrors);
  }
  //Tratamento de erros.
  handleErrors(error: Response) {
    console.log("erro");
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  saveToken(token: String){
    console.log(token);
    Config.token=token;
    this.database.execSQL("INSERT INTO usuario (token) VALUES (?)", [token]).then(id => {
      console.log("INSERT RESULT", id);
  }, error => {
      console.log("INSERT ERROR", error);
  });
  }
}