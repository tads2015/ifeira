import { Component } from "@angular/core";
import {Page} from "ui/page";

@Component({
  selector: "locaisEntrega",
  templateUrl:"pages/cadProdutor/locaisEntrega/locaisEntrega.html",
  styleUrls:["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
})

export class LocaisEntregaComponent {

  constructor(page: Page) {
    page.backgroundImage = "res://bg_app";
  }

  proximo(){
  }

}

