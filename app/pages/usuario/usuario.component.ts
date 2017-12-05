//Componente de cadastro.
import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Page } from "ui/page";

@Component({
  selector: "cadastro",
  providers: [UserService],
  templateUrl: "pages/usuario/usuario.html",
  styleUrls: ["pages/usuario/usuario.css"]
})
export class UsuarioComponent {
    //declara objeto user.
    user: User;
    //Constructor starta a tela principal de login
    constructor(private userService: UserService, private page: Page) {
      this.user = new User();
      page.backgroundImage = "~/images/fundo_app.jpeg";
    }
}