import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {Page} from "ui/page";
import {Endereco} from "../../../shared/user/endereco";
import { Config } from "../../../shared/config";
import {UsuarioS} from "../../../shared/userS/userS"

@Component({
  selector: "locaisEntrega",
  templateUrl:"pages/cadProdutor/locaisEntrega/locaisEntrega.html",
  styleUrls:["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
})

export class LocaisEntregaComponent {
  
  groceryList: Array<Object> = [];

  constructor(page: Page) {
    page.backgroundImage = "res://bg_app";
  }

    ngOnInit() {
      this.groceryList = UsuarioS.list;
    }

  proximo(){
    console.log("List: "+JSON.stringify(UsuarioS.list));
    console.log("Grocery: "+JSON.stringify(this.groceryList));
  }
}
