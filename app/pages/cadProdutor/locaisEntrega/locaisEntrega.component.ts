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
      this.ListaApelido = UsuarioS.apelido;
    }

  pop(){
    this.ListaApelido.pop();
    UsuarioS.apelido.pop();
    UsuarioS.LEntrega.pop();
    //console.log("List: "+JSON.stringify(UsuarioS.apelido));
    console.log("Grocery: "+JSON.stringify(this.ListaApelido));
  }
  shift(){
    this.ListaApelido.shift();
    UsuarioS.apelido.shift();
    UsuarioS.LEntrega.shift();
  }
  splice(){
    this.ListaApelido.splice(0,2);
    UsuarioS.apelido.splice(0,2);
    UsuarioS.LEntrega.splice(0,2);
  }
  /*Ontap(i:string,y:object){
    var x: number;
    console.log("Teste name:"+y);
    console.log("Teste index:"+i);
    x = this.ListaApelido.findIndex(y);
    console.log(JSON.stringify(x));
    /*this.ListaApelido.splice(x);
    UsuarioS.apelido.splice(x);
    UsuarioS.LEntrega.splice(x);
  }*/
}
