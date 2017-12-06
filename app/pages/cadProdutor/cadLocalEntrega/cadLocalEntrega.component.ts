import {Component } from "@angular/core";
import {NgModule } from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {stringify } from "@angular/core/src/util";
import { Config } from "../../../shared/config";

import {UsuarioS} from "../../../shared/userS/userS"
import {Endereco} from "../../../shared/user/endereco";
import {CadEnderecoProdutorComponent} from "../Endereco/cadEnderecoProdutor.component";
@Component({
  selector: "cadLocalEntrega",
  templateUrl:"pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.html",
  styleUrls:["pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.css"],

})

export class CadLocalEntregaComponent {
  end:Endereco;
  constructor(private page: Page, private router: Router) {
    this.end = new Endereco();
    page.backgroundImage = "res://bg_app";
    
  }

  proximo(){
    UsuarioS.LEntrega.push(this.end);
  }

  }

