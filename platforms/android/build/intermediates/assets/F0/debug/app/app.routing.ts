import { LoginComponent } from "./pages/login/login.component";
import { CadastroProdutoComponent } from "./pages/produtos/cadastroProduto.component";

import {CadCpfProdutorComponent} from "./pages/cadProdutor/cadCpfProdutor/cadCpfProdutor.component";
import {CadDadosProdutorComponent} from "./pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.component";
import {CadEnderecoProdutorComponent} from "./pages/cadProdutor/Endereco/cadEnderecoProdutor.component";
import {CadLocalEntregaComponent} from "./pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.component";
import {LocaisEntregaComponent} from "./pages/cadProdutor/locaisEntrega/locaisEntrega.component";


export const routes = [
  { path: "login", component: LoginComponent },
  { path: "CadastroProduto", component: CadastroProdutoComponent },

  //{ path: "cadCpfProdutor", component: CadCpfProdutorComponent},
  { path: "cadDadosProdutor", component: CadDadosProdutorComponent},
  { path: "cadEnderecoProdutor", component: CadEnderecoProdutorComponent},
  { path: "cadLocalEntrega", component: CadLocalEntregaComponent},
  { path: "locaisEntrega", component: LocaisEntregaComponent},

  { path: "", component: CadCpfProdutorComponent},
  
];

export const navigatableComponents = [
  LoginComponent,
  CadastroProdutoComponent,

  CadCpfProdutorComponent,
  CadDadosProdutorComponent,
  CadEnderecoProdutorComponent,
  CadLocalEntregaComponent,
  LocaisEntregaComponent,

];