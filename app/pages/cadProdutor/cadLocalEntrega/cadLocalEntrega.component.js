"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var config_1 = require("../../../shared/config");
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
        console.log(config_1.Config.teste);
        config_1.Config.teste = "Teste1";
        console.log("PRIME: " + config_1.Config.teste);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkTG9jYWxFbnRyZWdhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZExvY2FsRW50cmVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUV2QyxpREFBZ0Q7QUFHaEQsMERBQXVEO0FBU3ZEO0lBR0Usa0NBQW9CLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRHRELFNBQUksR0FBUSxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBRXhDLENBQUM7SUFFRCwwQ0FBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsZUFBTSxDQUFDLEtBQUssR0FBQyxRQUFRLENBQUE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFiVSx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFDLHdEQUF3RDtZQUNwRSxTQUFTLEVBQUMsQ0FBQyx1REFBdUQsQ0FBQztTQUVwRSxDQUFDO3lDQUswQixXQUFJLEVBQWtCLGVBQU07T0FIM0Msd0JBQXdCLENBZWxDO0lBQUQsK0JBQUM7Q0FBQSxBQWZILElBZUc7QUFmVSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7c3RyaW5naWZ5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL3V0aWxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7RGF0YX0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2RhdGFcIlxyXG5pbXBvcnQge0VuZGVyZWNvfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuaW1wb3J0IHtDYWRFbmRlcmVjb1Byb2R1dG9yQ29tcG9uZW50fSBmcm9tIFwiLi4vRW5kZXJlY28vY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY2FkTG9jYWxFbnRyZWdhXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9jYWRMb2NhbEVudHJlZ2EvY2FkTG9jYWxFbnRyZWdhLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvY2FkUHJvZHV0b3IvY2FkTG9jYWxFbnRyZWdhL2NhZExvY2FsRW50cmVnYS5jc3NcIl0sXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZExvY2FsRW50cmVnYUNvbXBvbmVudCB7XHJcbiAgZW5kOkVuZGVyZWNvO1xyXG4gIGRhdGE6RGF0YVtdPVtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5lbmQgPSBuZXcgRW5kZXJlY28oKTtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHJveGltbygpe1xyXG4gICAgY29uc29sZS5sb2coQ29uZmlnLnRlc3RlKTtcclxuICAgIENvbmZpZy50ZXN0ZT1cIlRlc3RlMVwiXHJcbiAgICBjb25zb2xlLmxvZyhcIlBSSU1FOiBcIitDb25maWcudGVzdGUpO1xyXG4gIH1cclxuXHJcbiAgfVxyXG5cclxuIl19