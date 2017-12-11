import { Component } from "@angular/core";
import {Page} from "ui/page";
import {DadosProdutor} from "../../../shared/dadosProdutor/dadosProdutor"
import {DadosProdutorService} from "../../../shared/dadosProdutor/dadosProdutor.service";

// para rota verificar forma usada para routear
import {Router} from "@angular/router";

import {UsuarioS} from "../../../shared/userS/userS";

@Component({
  selector: "cadDadosProdutor",
  providers: [DadosProdutorService],
  templateUrl:"pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.html",
  styleUrls:["pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.css"]
})

export class CadDadosProdutorComponent {

  dados: DadosProdutor;
  senha: String;
  //"n" usado na mascaraCPF
  n = 0;
  

  //Verificar Router direto 
  constructor(page: Page, private router: Router, private dadosProdutorService: DadosProdutorService) {
    page.backgroundImage = "res://bg_app";
    this.dados = new DadosProdutor();
    this.senha = "1234";
  } 

  mascaraCPF(){
    // assim que o cpf digitado atingir 11 digitos entra a mascara
    if(this.dados.cpf.length == 11 && this.n == 0){
    this.dados.cpf = this.dados.cpf.substr(0,3)
                    +"."+this.dados.cpf.substr(3,3)
                    +"."+this.dados.cpf.substr(6,3)
                    +"-"+this.dados.cpf.substr(9,2);
                    this.n =1;
    console.log("Produtor: "+JSON.stringify(this.dados.cpf));
    } 
    if(this.dados.cpf.length< 12 && this.n == 1){
      this.dados.cpf = ""
       this.n=0;
    }
  }
  // não esta se conectando com back
  proximo(){
    // se senhas digitadas estritamente iguais pode seguir em frente com botão proximo porem conexão com back deve estar OK
    if(this.dados.senha === this.senha){
      UsuarioS.dp = this.dados;
      this.router.navigate(["/cadEnderecoProdutor"])
      UsuarioS.DadosProdutor.push(this.dados);
        // ver json
        console.log("Produtor: "+JSON.stringify(UsuarioS.DadosProdutor));
      
      this.dadosProdutorService.validaCpfProdutor(this.dados.cpf)
      .subscribe(
        (data) => {
          console.log("subscribe: "+ data.mensagem);
          if(data.mensagem=="false"){
            alert("O cadastro não pode ser realizado! \n\nEste CPF não consta na base de produtores orgânicos.");
            //()=> this.router.navigate(["/"])
          }else{
            //()=> this.router.navigate(["/cadEnderecoProdutor"])
          }
        },
        (error) => alert("Erro :" + this.dados.cpf + error)
      );
    }else{
            // exibe alerta caso senhas diferentes
            alert("Confirme corretamente sua senha !");
    } 
  }
}
