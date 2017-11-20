//Pagina executada em seguida da main.ts
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
//Import das rotas do aplicativo
import { routes, navigatableComponents } from "./app.routing";

//import mascara
import { MaskedTextFieldModule } from "nativescript-masked-text-field/angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    ReactiveFormsModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    MaskedTextFieldModule,
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}