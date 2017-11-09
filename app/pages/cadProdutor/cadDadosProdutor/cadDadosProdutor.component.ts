import { Component } from "@angular/core";
import {Page} from "ui/page";

@Component({
  selector: "cadDadosProdutor",
  templateUrl:"pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.html",
  styleUrls:["pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.css"]
})

export class CadDadosProdutorComponent {

  constructor(page: Page) {
    page.backgroundImage = "res://bg_app";
  }

  proximo(){

  }

  }

