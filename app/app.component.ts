//Component principal
import {Component} from "@angular/core";

//***Verificar se existe real necessidade, pois tbm é chamado em app.routing.ts
import {LoginComponent} from "./pages/login/login.component";
//O component que sera utlizado é definido em app.routing.ts
@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})

export class AppComponent{
  
}

