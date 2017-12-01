import { Component } from "@angular/core";
import { Page } from "ui/page";
//import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import * as activityIndicatorModule from "tns-core-modules/ui/activity-indicator";

import { Endereco } from "../../../shared/user/endereco";
import { EnderecoService } from "../../../shared/user/endereco.service";

@Component({
  selector: "cadEnderecoProdutor",
  providers: [EnderecoService],
  templateUrl:"pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
  styleUrls:["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
})

export class CadEnderecoProdutorComponent {
  endereco: Endereco;
  indicator = new activityIndicatorModule.ActivityIndicator();
  isLoading: boolean = false;

  constructor(private page: Page, private enderecoService: EnderecoService) {
    this.endereco = new Endereco();
    page.backgroundImage = "res://bg_app";
  }

  buscaCEP(){
    if(this.endereco.cep.length == 8){
      this.isLoading = true;
      this.enderecoService.buscaCEP(this.endereco.cep)
      .subscribe(
        (data) => {
          console.log(JSON.stringify(data));
          //console.log(data.logradouro);
          //this.endereco.cep = data.cep;
          this.endereco.logradouro = data.logradouro;
          this.endereco.bairro = data.bairro;
          this.endereco.localidade = data.localidade;
          this.endereco.UF = data.uf;
          this.indicator;
          //console.log(this.endereco.logradouro);
          this.isLoading = false;
        },
        (err) => {
          console.log(err);
          alert("Erro ao buscar CEP. Insira suas informações manualmente!");
          this.isLoading = false;
        }
      );
    } else {
      return;
    }
  }

  proximo(){

  }

}

