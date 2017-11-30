"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var config_1 = require("../../../shared/config");
var LocaisEntregaComponent = (function () {
    function LocaisEntregaComponent(page) {
        this.batata = "Concluir";
        this.heroes = [];
        page.backgroundImage = "res://bg_app";
    }
    LocaisEntregaComponent.prototype.proximo = function () {
        console.log(config_1.Config.teste);
        config_1.Config.teste = "Teste2";
        console.log("FINAL: " + config_1.Config.teste);
    };
    LocaisEntregaComponent = __decorate([
        core_1.Component({
            selector: "locaisEntrega",
            templateUrl: "pages/cadProdutor/locaisEntrega/locaisEntrega.html",
            styleUrls: ["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], LocaisEntregaComponent);
    return LocaisEntregaComponent;
}());
exports.LocaisEntregaComponent = LocaisEntregaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWlzRW50cmVnYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhaXNFbnRyZWdhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBNkI7QUFFN0IsaURBQWdEO0FBUWhEO0lBSUUsZ0NBQVksSUFBVTtRQUZ0QixXQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBR3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFHRCx3Q0FBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsZUFBTSxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFkVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBQyxvREFBb0Q7WUFDaEUsU0FBUyxFQUFDLENBQUMsbURBQW1ELENBQUM7U0FDaEUsQ0FBQzt5Q0FNa0IsV0FBSTtPQUpYLHNCQUFzQixDQWVsQztJQUFELDZCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtFbmRlcmVjb30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2NhaXNFbnRyZWdhXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWlzRW50cmVnYUNvbXBvbmVudCB7XHJcblxyXG4gIGJhdGF0YSA9IFwiQ29uY2x1aXJcIjtcclxuICBoZXJvZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlKSB7XHJcbiAgICBcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgcHJveGltbygpe1xyXG4gICAgY29uc29sZS5sb2coQ29uZmlnLnRlc3RlKTtcclxuICAgIENvbmZpZy50ZXN0ZT1cIlRlc3RlMlwiXHJcbiAgICBjb25zb2xlLmxvZyhcIkZJTkFMOiBcIitDb25maWcudGVzdGUpO1xyXG4gIH1cclxufVxyXG4iXX0=