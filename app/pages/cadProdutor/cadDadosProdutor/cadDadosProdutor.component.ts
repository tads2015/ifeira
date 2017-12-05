import { Component } from "@angular/core";
import {Page} from "ui/page";
import {DadosProdutor} from "../../../shared/dadosProdutor/dadosProdutor"
import {DadosProdutorService} from "../../../shared/dadosProdutor/dadosProdutor.service";

// para rota verificar forma usada para routear
import {Router} from "@angular/router";

@Component({
  selector: "cadDadosProdutor",
  providers: [DadosProdutorService],
  templateUrl:"pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.html",
  styleUrls:["pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.css"]
})

export class CadDadosProdutorComponent {

  dados: DadosProdutor;
  

  //Verificar Router direto 
  constructor(page: Page, private router: Router, private dadosProdutorService: DadosProdutorService) {
    page.backgroundImage = "res://bg_app";
    this.dados = new DadosProdutor();
  }

  proximo(){
    this.dadosProdutorService.validaCpfProdutor(this.dados.cpf)
    .subscribe(
      (data) => {
        console.log(JSON.stringify(data));
      },
      /*() => this.router.navigate(["/Login"]);
       alert("dados Corretos");
      }*/
      (error) => alert("Erro")
    );
    
  }

  }

