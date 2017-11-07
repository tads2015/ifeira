//Primeiro arquivo a ser executado.
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

//"{startPageActionBarHidden: true}" seta a barra de menu para ficar escondida na tela principal.
platformNativeScriptDynamic({startPageActionBarHidden: true}).bootstrapModule(AppModule);