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
        userS_1.UsuarioS.LEntrega.push(this.end);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkTG9jYWxFbnRyZWdhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZExvY2FsRW50cmVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUl2QyxxREFBb0Q7QUFDcEQsMERBQXVEO0FBU3ZEO0lBRUUsa0NBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFFeEMsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFDRSxnQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFWVSx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFDLHdEQUF3RDtZQUNwRSxTQUFTLEVBQUMsQ0FBQyx1REFBdUQsQ0FBQztTQUVwRSxDQUFDO3lDQUkwQixXQUFJLEVBQWtCLGVBQU07T0FGM0Msd0JBQXdCLENBWWxDO0lBQUQsK0JBQUM7Q0FBQSxBQVpILElBWUc7QUFaVSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7c3RyaW5naWZ5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL3V0aWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7VXN1YXJpb1N9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlclMvdXNlclNcIlxyXG5pbXBvcnQge0VuZGVyZWNvfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuaW1wb3J0IHtCdXNjYUNlcENvbXBvbmVudH0gZnJvbSBcIi4uL0J1c2NhQ2VwL0J1c2NhQ2VwLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRMb2NhbEVudHJlZ2FcIixcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL2NhZExvY2FsRW50cmVnYS9jYWRMb2NhbEVudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9jYWRMb2NhbEVudHJlZ2EvY2FkTG9jYWxFbnRyZWdhLmNzc1wiXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FkTG9jYWxFbnRyZWdhQ29tcG9uZW50IHtcclxuICBlbmQ6RW5kZXJlY287XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLmVuZCA9IG5ldyBFbmRlcmVjbygpO1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwcm94aW1vKCl7XHJcbiAgICBVc3VhcmlvUy5MRW50cmVnYS5wdXNoKHRoaXMuZW5kKTtcclxuICB9XHJcblxyXG4gIH1cclxuXHJcbiJdfQ==