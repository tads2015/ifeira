import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {Page} from "ui/page";
import {Endereco} from "../../../shared/user/endereco";
import { Config } from "../../../shared/config";

@Component({
  selector: "locaisEntrega",
  templateUrl:"pages/cadProdutor/locaisEntrega/locaisEntrega.html",
  styleUrls:["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
})

export class LocaisEntregaComponent {

  batata = "Concluir";
  heroes: Array<Object> = [];
  constructor(page: Page) {
    
    page.backgroundImage = "res://bg_app";
  }
  
  
  proximo(){
  /*  console.log(Config.teste);
    Config.teste="Teste2"
    console.log("FINAL: "+Config.teste);
    */
  }
}
