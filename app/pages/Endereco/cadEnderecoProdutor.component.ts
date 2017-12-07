import { Component } from "@angular/core";
import { Page } from "ui/page";
//import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import * as activityIndicatorModule from "tns-core-modules/ui/activity-indicator";

import { Endereco } from "../../shared/user/endereco";
import { EnderecoService } from "../../shared/user/endereco.service";

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
  proximo(){

  }

}

