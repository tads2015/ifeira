import { LoginComponent } from "./pages/login/login.component";
import { CadastroProdutoComponent } from "./pages/produtos/cadastroProduto.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "CadastroProduto", component: CadastroProdutoComponent }
];

export const navigatableComponents = [
  LoginComponent,
  CadastroProdutoComponent
];