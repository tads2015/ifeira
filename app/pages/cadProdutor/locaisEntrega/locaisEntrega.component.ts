import { Component } from "@angular/core";
import {Page} from "ui/page";
import {Endereco} from "../../../shared/user/endereco";

@Component({
  selector: "locaisEntrega",
  templateUrl:"pages/cadProdutor/locaisEntrega/locaisEntrega.html",
  styleUrls:["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
})

export class LocaisEntregaComponent {
  enderecos: Endereco[];
  constructor(page: Page) {

    page.backgroundImage = "res://bg_app";
  }

  proximo(){
  }

}

