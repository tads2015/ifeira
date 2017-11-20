import {Component ,Input } from "@angular/core";
import {NgModule } from "@angular/core";
import {Page} from "ui/page";
import {Router} from "@angular/router";
import {stringify } from "@angular/core/src/util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Data} from "../../../shared/user/data"
import {Endereco} from "../../../shared/user/endereco";
import {Enderecos} from "../../../shared/user/enderecos";
import {CadEnderecoProdutorComponent} from "../Endereco/cadEnderecoProdutor.component";
@Component({
  selector: "cadLocalEntrega",
  templateUrl:"pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.html",
  styleUrls:["pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.css"],

})

export class CadLocalEntregaComponent {
  @Input()
  end:Endereco;
  endForm: FormGroup;
  val: String = '';

  constructor(private fb: FormBuilder, private page: Page) { // <--- inject FormBuilder
   
    this.createForm();
    this.end = new Endereco();
    page.backgroundImage = "res://bg_app";
  }

  createForm() {
    this.endForm = this.fb.group({
      Apelido: ['Teste',Validators.required], // <--- the FormControl called "name"
    });
  }

  proximo(){
    var val:string
    val = this.endForm.get('Apelido').value;
    console.log(this.val);
    this.end.apelido = val;
    //console.log(JSON.stringify(this.endForm.value.Apelido));  
    console.log(JSON.stringify(this.end));
  }

  }

