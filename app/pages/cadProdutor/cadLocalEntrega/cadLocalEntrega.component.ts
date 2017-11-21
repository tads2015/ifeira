import {Component } from "@angular/core";
import {NgModule } from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {stringify } from "@angular/core/src/util";

import {Data} from "../../../shared/user/data"
import {Endereco} from "../../../shared/user/endereco";
import {Enderecos} from "../../../shared/user/enderecos";
import {CadEnderecoProdutorComponent} from "../Endereco/cadEnderecoProdutor.component";
@Component({
  selector: "cadLocalEntrega",
  templateUrl:"pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.html",
  styleUrls:["pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.css"],

})

export class CadLocalEntregaComponent {
  end:Endereco;
  ends: Enderecos[];
  data:Data[]=[];
  constructor(private page: Page, private router: Router) {
    this.end = new Endereco();
    page.backgroundImage = "res://bg_app";
    
  }

  proximo(){
    var x:string;
    this.ends.push(
    )
  
  }

  }

