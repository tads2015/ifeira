import { Component } from "@angular/core";
import { Page } from "ui/page";

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

  constructor(private userService: UserService, private page: Page) {
    this.user = new User();
    page.backgroundImage = "~/images/fundo_app.jpeg";
  }

  login() {
    this.userService.login(this.user)
    .subscribe(
      (data) => console.log(JSON.stringify(data)),
      (err) => console.log(err)
    );
  }

  cadastrar() {
    // TODO: Próxima tela
  }
}