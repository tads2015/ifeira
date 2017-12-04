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
    this.end.cep = '2223';
    console.log(JSON.stringify(this.end));
  }
}


