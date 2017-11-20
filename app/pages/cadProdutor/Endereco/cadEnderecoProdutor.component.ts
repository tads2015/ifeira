import { Component } from "@angular/core";
import { Page } from "ui/page";

import { Endereco } from "../../../shared/user/endereco";
import { EnderecoService } from "../../../shared/user/endereco.service";

@Component({
  selector: "cadEnderecoProdutor",
  templateUrl:"pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
  styleUrls:["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
})

export class CadEnderecoProdutorComponent {
  endereco: Endereco;

  constructor(private page: Page, private enderecoService: EnderecoService) {
    this.endereco = new Endereco();
    page.backgroundImage = "res://bg_app";
  }

  buscaCEP(){
    this.enderecoService.buscaCEP(this.endereco.cep)
    .subscribe(
      (data) => {
        console.log(JSON.stringify(data));
      },
      (err) => {

      }
    );
  }

  proximo(){

  }

}

