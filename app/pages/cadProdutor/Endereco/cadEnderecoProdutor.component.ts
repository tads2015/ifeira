import { Component, Input } from "@angular/core";
import {Page} from "ui/page";

import {Endereco} from "../../../shared/user/endereco";

@Component({
  selector: "cadEnderecoProdutor",
  templateUrl:"pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
  styleUrls:["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
})

export class CadEnderecoProdutorComponent {
  @Input()
  end : Endereco;
  
  constructor(page: Page) {
    this.end=new Endereco();
    page.backgroundImage = "res://bg_app";
  }  
  proximo(){
    this.end.apelido = 'IFPR'
    this.end.cep = '120000'
    this.end.bairro = 'Area 2'
    this.end.localidade = 'Telemaco'
    console.log(JSON.stringify(this.end));
  }
}


