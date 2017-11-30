import {Component } from "@angular/core";
import {NgModule } from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {stringify } from "@angular/core/src/util";
import { Config } from "../../../shared/config";

import {Data} from "../../../shared/user/data"
import {Endereco} from "../../../shared/user/endereco";
import {CadEnderecoProdutorComponent} from "../Endereco/cadEnderecoProdutor.component";
@Component({
  selector: "cadLocalEntrega",
  templateUrl:"pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.html",
  styleUrls:["pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.css"],

})

export class CadLocalEntregaComponent {
  end:Endereco;
  data:Data[]=[];
  constructor(private page: Page, private router: Router) {
    this.end = new Endereco();
    page.backgroundImage = "res://bg_app";
    
  }

  proximo(){
    console.log(Config.teste);
    Config.teste="Teste1"
    console.log("PRIME: "+Config.teste);
  }

  }

