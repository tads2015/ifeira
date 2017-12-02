//Serviço para conexão com back-ending.
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
var Sqlite = require( "nativescript-sqlite" );

import { Endereco } from "./endereco";
import { Config } from "../config";

@Injectable()
export class EnderecoService {
  constructor(private http: Http){}

  buscaCEP(cep: String) {
    return this.http.get("https://viacep.com.br/ws/" + cep + "/json/")
    .timeout(10000)
    .map(res => res.json())
    .do(data => {
      return data;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}