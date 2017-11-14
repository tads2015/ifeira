import { Injectable } from "@angular/core";

// imports do tutorial 
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs//Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { DadosProdutor } from "./dadosProdutor";
import { Config } from "../config"; 

@Injectable()
export class DadosProdutorService {

    constructor(private http: Http){}
  
    validaCpfProdutor(cpf: String) {

        //alert("Cpf do maluco: " + dados.cpf); só para teste pode apagar
        
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        
        return this.http.post(
            Config.apiUrl + "api/cnpo/check",// caminho back 
            "{\"cpf\":\""+cpf+"\"}",
            { headers: headers}
        )
        .map(response => response.json()) //transforma resposta em json
        .do(data => {
            //Config.token = data.Result.access_token;
            console.log(data);
        })
        .catch(this.handleErrors);
    }

    handleErrors(error: Response){
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}