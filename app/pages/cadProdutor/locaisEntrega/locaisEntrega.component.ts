import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {Page} from "ui/page";
import {Endereco} from "../../../shared/user/endereco";
import {Enderecos} from "../../../shared/user/enderecos";

@Component({
  selector: "locaisEntrega",
  templateUrl:"pages/cadProdutor/locaisEntrega/locaisEntrega.html",
  styleUrls:["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
})

export class LocaisEntregaComponent {

  batata = "Concluir";
  heroes: Array<Object> = [];
  groceryList: Array<Enderecos> = [];
  constructor(page: Page,private groceryListService: GroceryListService) {
    
    page.backgroundImage = "res://bg_app";
  }
  
  
    ngOnInit() {
      this.groceryListService.load()
        .subscribe(loadedGroceries => {
          loadedGroceries.forEach((groceryObject) => {
            this.groceryList.unshift(groceryObject);
          });
        });
    }
  proximo(){
  }
}
