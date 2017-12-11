import { Component } from "@angular/core";
import { Page } from "ui/page";
//import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import * as activityIndicatorModule from "tns-core-modules/ui/activity-indicator";

import {UsuarioS} from "../../../shared/userS/userS"
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
  proximo(){
    console.log("Result CadEnderecoProdutor:"+JSON.stringify(this.endereco))
    UsuarioS.EnderecoProdutor = this.endereco;
  }

}

