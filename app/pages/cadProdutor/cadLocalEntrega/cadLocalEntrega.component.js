"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var userS_1 = require("../../../shared/userS/userS");
var endereco_1 = require("../../../shared/user/endereco");
var CadLocalEntregaComponent = (function () {
    function CadLocalEntregaComponent(page, router) {
        this.page = page;
        this.router = router;
        this.end = new endereco_1.Endereco();
        page.backgroundImage = "res://bg_app";
    }
    CadLocalEntregaComponent.prototype.proximo = function () {
        userS_1.UsuarioS.teste = "OK";
        userS_1.UsuarioS.LocaisEntrega;
        /*
        console.log(Config.teste);
        Config.teste="Teste1"
        console.log("PRIME: "+Config.teste);
        */
        console.log("Array: " + userS_1.UsuarioS.teste);
    };
    CadLocalEntregaComponent = __decorate([
        core_1.Component({
            selector: "cadLocalEntrega",
            templateUrl: "pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.html",
            styleUrls: ["pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.css"],
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], CadLocalEntregaComponent);
    return CadLocalEntregaComponent;
}());
exports.CadLocalEntregaComponent = CadLocalEntregaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkTG9jYWxFbnRyZWdhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZExvY2FsRW50cmVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUl2QyxxREFBb0Q7QUFDcEQsMERBQXVEO0FBU3ZEO0lBRUUsa0NBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFFeEMsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFDRSxnQkFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDckIsZ0JBQVEsQ0FBQyxhQUFhLENBQUE7UUFDdEI7Ozs7VUFJRTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLGdCQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQWpCVSx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFDLHdEQUF3RDtZQUNwRSxTQUFTLEVBQUMsQ0FBQyx1REFBdUQsQ0FBQztTQUVwRSxDQUFDO3lDQUkwQixXQUFJLEVBQWtCLGVBQU07T0FGM0Msd0JBQXdCLENBbUJsQztJQUFELCtCQUFDO0NBQUEsQUFuQkgsSUFtQkc7QUFuQlUsNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge3N0cmluZ2lmeSB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy91dGlsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge1VzdWFyaW9TfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXJTL3VzZXJTXCJcclxuaW1wb3J0IHtFbmRlcmVjb30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcbmltcG9ydCB7Q2FkRW5kZXJlY29Qcm9kdXRvckNvbXBvbmVudH0gZnJvbSBcIi4uL0VuZGVyZWNvL2NhZEVuZGVyZWNvUHJvZHV0b3IuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNhZExvY2FsRW50cmVnYVwiLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvY2FkUHJvZHV0b3IvY2FkTG9jYWxFbnRyZWdhL2NhZExvY2FsRW50cmVnYS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOltcInBhZ2VzL2NhZFByb2R1dG9yL2NhZExvY2FsRW50cmVnYS9jYWRMb2NhbEVudHJlZ2EuY3NzXCJdLFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWRMb2NhbEVudHJlZ2FDb21wb25lbnQge1xyXG4gIGVuZDpFbmRlcmVjbztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMuZW5kID0gbmV3IEVuZGVyZWNvKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHByb3hpbW8oKXtcclxuICAgIFVzdWFyaW9TLnRlc3RlID0gXCJPS1wiXHJcbiAgICBVc3VhcmlvUy5Mb2NhaXNFbnRyZWdhXHJcbiAgICAvKlxyXG4gICAgY29uc29sZS5sb2coQ29uZmlnLnRlc3RlKTtcclxuICAgIENvbmZpZy50ZXN0ZT1cIlRlc3RlMVwiXHJcbiAgICBjb25zb2xlLmxvZyhcIlBSSU1FOiBcIitDb25maWcudGVzdGUpO1xyXG4gICAgKi9cclxuICAgIGNvbnNvbGUubG9nKFwiQXJyYXk6IFwiK1VzdWFyaW9TLnRlc3RlKVxyXG4gIH1cclxuXHJcbiAgfVxyXG5cclxuIl19