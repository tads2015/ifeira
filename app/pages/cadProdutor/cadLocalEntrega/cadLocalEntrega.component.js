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
        /*
        console.log(Config.teste);
        Config.teste="Teste1"
        console.log("PRIME: "+Config.teste);
        */
        console.log("Array: " + userS_1.UsuarioS.array);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkTG9jYWxFbnRyZWdhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZExvY2FsRW50cmVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUl2QyxxREFBb0Q7QUFDcEQsMERBQXVEO0FBU3ZEO0lBRUUsa0NBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFFeEMsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFDRTs7OztVQUlFO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBZlUsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBQyx3REFBd0Q7WUFDcEUsU0FBUyxFQUFDLENBQUMsdURBQXVELENBQUM7U0FFcEUsQ0FBQzt5Q0FJMEIsV0FBSSxFQUFrQixlQUFNO09BRjNDLHdCQUF3QixDQWlCbEM7SUFBRCwrQkFBQztDQUFBLEFBakJILElBaUJHO0FBakJVLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtzdHJpbmdpZnkgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvdXRpbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHtVc3VhcmlvU30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyUy91c2VyU1wiXHJcbmltcG9ydCB7RW5kZXJlY299IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlci9lbmRlcmVjb1wiO1xyXG5pbXBvcnQge0NhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnR9IGZyb20gXCIuLi9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRMb2NhbEVudHJlZ2FcIixcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL2NhZExvY2FsRW50cmVnYS9jYWRMb2NhbEVudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9jYWRMb2NhbEVudHJlZ2EvY2FkTG9jYWxFbnRyZWdhLmNzc1wiXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FkTG9jYWxFbnRyZWdhQ29tcG9uZW50IHtcclxuICBlbmQ6RW5kZXJlY287XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLmVuZCA9IG5ldyBFbmRlcmVjbygpO1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwcm94aW1vKCl7XHJcbiAgICAvKlxyXG4gICAgY29uc29sZS5sb2coQ29uZmlnLnRlc3RlKTtcclxuICAgIENvbmZpZy50ZXN0ZT1cIlRlc3RlMVwiXHJcbiAgICBjb25zb2xlLmxvZyhcIlBSSU1FOiBcIitDb25maWcudGVzdGUpO1xyXG4gICAgKi9cclxuICAgIGNvbnNvbGUubG9nKFwiQXJyYXk6IFwiK1VzdWFyaW9TLmFycmF5KTtcclxuICB9XHJcblxyXG4gIH1cclxuXHJcbiJdfQ==