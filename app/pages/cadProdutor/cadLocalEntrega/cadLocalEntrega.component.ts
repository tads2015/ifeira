import { Component } from "@angular/core";
import {Page} from "ui/page";
import {Endereco} from "../../../shared/user/endereco"

@Component({
  selector: "cadLocalEntrega",
  templateUrl:"pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.html",
  styleUrls:["pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.css"]
})

export class CadLocalEntregaComponent {
  endereco:Endereco;
  constructor(page: Page) {
    this.endereco = new Endereco();
    page.backgroundImage = "res://bg_app";
  }

  proximo(){

  }

  }

