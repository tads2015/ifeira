import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
var Sqlite = require( "nativescript-sqlite" );

import { Produto } from "../produtos/produto";
import { Config } from "../config";

@Injectable()
export class ProdutoService {
    
    private database: any;

    constructor(private http: Http){
        (new Sqlite("ifeira.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS produto (id INTEGER PRIMARY KEY AUTOINCREMENT, grupo_id INTEGER, descricao TEXT, validade DATE, numero_porcoes FLOAT, peso FLOAT, valor FLOAT, infoadd VARCHAR)").then(id => {
                this.database = db;
            }, error => {
                console.log("CREATE TABLE ERROR", error);
            });
        }, error => {
            console.log("OPEN DB ERROR", error);
        });
      }

      cadastroProdutos(produto: Produto) {
        this.saveProdutos(produto);
        let headers = new Headers();
    
        

        headers.append("Content-Type", "application/json");
        headers.append("Authorization: Bearer", Config.token);

        return this.http.post(
          Config.apiUrl + "api/produto",
          JSON.stringify(produto),
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
    
      saveProdutos(produtos: Produto){
        console.log(produtos);
        this.database.execSQL("INSERT INTO produto (grupo_id, descricao, validade, numero_porcoes, peso, valor, infoadd) VALUES (?,?,?,?,?,?,?)",
         [produtos.grupo_id, produtos.descricao, produtos.validade, produtos.numero_porcoes, produtos.peso, produtos.valor, produtos.infoadd]).then(id => {
          console.log("INSERT RESULT", id);
      }, error => {
          console.log("INSERT ERROR", error);
      });
      }
}