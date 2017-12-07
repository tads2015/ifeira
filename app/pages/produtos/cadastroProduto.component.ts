import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import { Produto } from "../../shared/produtos/produto";
import { ProdutoService } from "../../shared/user/produto.service";

@Component({
  selector: "cadProduto",
  providers: [ProdutoService],
  templateUrl:"pages/produtos/cadastroProduto.html",
  styleUrls:["pages/produtos/cadastroProduto.css"]
})

export class CadastroProdutoComponent{

  //date = new Date('2015-05-05');

 produto: Produto;
  constructor(private produtoService: ProdutoService, private page: Page, private router: Router) {
    this.produto = new Produto();
    page.backgroundImage = "res://bg_app";
  }

  enviar(){
    this.produtoService.cadastroProdutos(this.produto)
    .subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.produtoService.saveProdutos(data.jwt);
      },
      (err) => {
        console.log(err);
        alert("erro");
      }
    );
  }

  validade(){
  }
}