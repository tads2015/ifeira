import { Component } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
    selector: "cadProdutos",
    templateUrl: "pages/cadProdutor/cadProdutos/cadProdutos.html",
    styleUrls: ["pages/cadProdutor/cadProdutos/cadProdutos.css"]
})

export class cadProdutosComponent {

    constructor(page: Page, private router: Router) {
        page.backgroundImage = "res://bg_app";
    }

    concluir(){

    }
}

