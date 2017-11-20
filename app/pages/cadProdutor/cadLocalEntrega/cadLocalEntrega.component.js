"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var endereco_1 = require("../../../shared/user/endereco");
var CadLocalEntregaComponent = (function () {
    function CadLocalEntregaComponent(page, router) {
        this.page = page;
        this.router = router;
        this.data = [];
        this.end = new endereco_1.Endereco();
        page.backgroundImage = "res://bg_app";
    }
    CadLocalEntregaComponent.prototype.proximo = function () {
        console.log("Valores:");
        console.log(JSON.stringify(this.end));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkTG9jYWxFbnRyZWdhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZExvY2FsRW50cmVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUN2QywwREFBdUQ7QUFZdkQ7SUFHRSxrQ0FBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFEdEQsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUViLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFFeEMsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBYlUsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBQyx3REFBd0Q7WUFDcEUsU0FBUyxFQUFDLENBQUMsdURBQXVELENBQUM7U0FFcEUsQ0FBQzt5Q0FLMEIsV0FBSSxFQUFrQixlQUFNO09BSDNDLHdCQUF3QixDQWVsQztJQUFELCtCQUFDO0NBQUEsQUFmSCxJQWVHO0FBZlUsNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge05nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0VuZGVyZWNvfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuaW1wb3J0IHtDYWRFbmRlcmVjb1Byb2R1dG9yQ29tcG9uZW50fSBmcm9tIFwiLi4vRW5kZXJlY28vY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL3V0aWxcIjtcclxuaW1wb3J0IHtEYXRhfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZGF0YVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRMb2NhbEVudHJlZ2FcIixcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL2NhZExvY2FsRW50cmVnYS9jYWRMb2NhbEVudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9jYWRMb2NhbEVudHJlZ2EvY2FkTG9jYWxFbnRyZWdhLmNzc1wiXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FkTG9jYWxFbnRyZWdhQ29tcG9uZW50IHtcclxuICBlbmQ6RW5kZXJlY287XHJcbiAgZGF0YTpEYXRhW109W107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLmVuZCA9IG5ldyBFbmRlcmVjbygpO1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBwcm94aW1vKCl7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKFwiVmFsb3JlczpcIik7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmVuZCkpOyAgXHJcbiAgfVxyXG5cclxuICB9XHJcblxyXG4iXX0=