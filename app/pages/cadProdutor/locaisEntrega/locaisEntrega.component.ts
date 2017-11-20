import { Component } from "@angular/core";
import {Page} from "ui/page";
import {Endereco} from "../../../shared/user/endereco";

@Component({
  selector: "locaisEntrega",
  templateUrl:"pages/cadProdutor/locaisEntrega/locaisEntrega.html",
  styleUrls:["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
})

export class LocaisEntregaComponent {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  batata = "Concluir";
  constructor(page: Page) {
    
    page.backgroundImage = "res://bg_app";
  }

  proximo(){
  }
}

