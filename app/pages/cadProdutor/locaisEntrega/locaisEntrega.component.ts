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
  
  ListaApelido: Array<Object> = [];

  constructor(page: Page) {
    page.backgroundImage = "res://bg_app";
  }

  ngOnInit() {
    this.ListaApelido = UsuarioS.LEntrega;
  }
/*
  pop(){
    UsuarioS.LEntrega.pop();
  }
  shift(){
    UsuarioS.LEntrega.shift();
  }*/
  Onclick(event){
    UsuarioS.LEntrega.splice(event.index,1);
    //this.ListaApelido = UsuarioS.LEntrega;
  }
}
