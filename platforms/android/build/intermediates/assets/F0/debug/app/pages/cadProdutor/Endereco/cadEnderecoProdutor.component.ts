import { Component } from "@angular/core";
import {Page} from "ui/page";

@Component({
  selector: "cadEnderecoProdutor",
  templateUrl:"pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
  styleUrls:["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
})

export class CadEnderecoProdutorComponent {

  constructor(page: Page) {
    page.backgroundImage = "~/images/fundo_app.jpeg";
  }

  proximo(){

  }

  }

