import { Component } from "@angular/core";
import {Page} from "ui/page";

import {Router} from "@angular/router";

@Component({
  selector: "cadCpfProdutor",
  templateUrl:"pages/cadProdutor/cadCpfProdutor/cadCpfProdutor.html",
  styleUrls:["pages/cadProdutor/cadCpfProdutor/cadCpfProdutor.css"]
})

export class CadCpfProdutorComponent {
  constructor(page: Page, private router: Router) {
    page.backgroundImage = "res://bg_app";
  }
  proximo(){
    
  }
}

