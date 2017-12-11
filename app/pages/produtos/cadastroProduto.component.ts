import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import { Produto } from "../../shared/produtos/produto";
import { ProdutoService } from "../../shared/user/produto.service";
import { Config } from "../../shared/config";
import { ErrosProduto } from "./errosProduto";

@Component({
  selector: "cadProduto",
  providers: [ProdutoService],
  templateUrl:"pages/produtos/cadastroProduto.html",
  styleUrls:["pages/produtos/cadastroProduto.css"]
})

export class CadastroProdutoComponent{

  
  //date = new Date('2015-05-05');

 produto: Produto;
 errosProduto: ErrosProduto;
  constructor(private produtoService: ProdutoService, private page: Page, private router: Router) {
    this.produto = new Produto();
    this.errosProduto = new ErrosProduto();
    page.backgroundImage = "res://bg_app";
  }

  enviar(){
    if(this.produto.descricao == ""){
      alert("Erro ao cad");
      return;
    }


    this.produtoService.cadastroProdutos(this.produto)
    .subscribe(
      (data) => {
        console.log(JSON.stringify(data));
      
        //this.router.navigate(["/CadastroProduto"]);
      },
      (err) => {
        console.log(err);
        alert("Erro ao cadastrar produto");
      }
    );
    }


  validade(){
  }
}