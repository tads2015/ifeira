import { Component } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
  selector: "login",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login.css"]
})
export class LoginComponent {
  user: User;

  constructor(private userService: UserService, private page: Page, private router: Router) {
    this.user = new User();
    page.backgroundImage = "res://bg_app";
  }

  login() {
    this.userService.login(this.user)
    .subscribe(
      (data) => {
        console.log(JSON.stringify(data));
        this.userService.saveToken(data.jwt);
        this.router.navigate(["/CadastroProduto"]);
      },
      (err) => {
        console.log(err);
        alert("Usuário e/ou senha inválido.");
      }
    );
  }

  cadastrar() {
    // TODO: Próxima tela
  }
}