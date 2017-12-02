"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var userS_1 = require("../../../shared/userS/userS");
var LocaisEntregaComponent = (function () {
    function LocaisEntregaComponent(page) {
        this.ListaApelido = [];
        page.backgroundImage = "res://bg_app";
    }
    LocaisEntregaComponent.prototype.ngOnInit = function () {
        this.ListaApelido = userS_1.UsuarioS.apelido;
    };
    LocaisEntregaComponent.prototype.pop = function () {
        this.ListaApelido.pop();
        userS_1.UsuarioS.apelido.pop();
        userS_1.UsuarioS.LEntrega.pop();
        //console.log("List: "+JSON.stringify(UsuarioS.apelido));
        console.log("Grocery: " + JSON.stringify(this.ListaApelido));
    };
    LocaisEntregaComponent.prototype.shift = function () {
        this.ListaApelido.shift();
        userS_1.UsuarioS.apelido.shift();
        userS_1.UsuarioS.LEntrega.shift();
    };
    LocaisEntregaComponent.prototype.splice = function () {
        this.ListaApelido.splice(0, 2);
        userS_1.UsuarioS.apelido.splice(0, 2);
        userS_1.UsuarioS.LEntrega.splice(0, 2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWlzRW50cmVnYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhaXNFbnRyZWdhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBNkI7QUFHN0IscURBQW9EO0FBUXBEO0lBSUUsZ0NBQVksSUFBVTtRQUZ0QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVDLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFRLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7SUFFSCxvQ0FBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4QixnQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixnQkFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN4Qix5REFBeUQ7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0Qsc0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsZ0JBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELHVDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixnQkFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUE1QlUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUMsb0RBQW9EO1lBQ2hFLFNBQVMsRUFBQyxDQUFDLG1EQUFtRCxDQUFDO1NBQ2hFLENBQUM7eUNBTWtCLFdBQUk7T0FKWCxzQkFBc0IsQ0F1Q2xDO0lBQUQsNkJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0VuZGVyZWNvfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuaW1wb3J0IHtVc3VhcmlvU30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyUy91c2VyU1wiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2NhaXNFbnRyZWdhXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWlzRW50cmVnYUNvbXBvbmVudCB7XHJcbiAgXHJcbiAgTGlzdGFBcGVsaWRvOiBBcnJheTxPYmplY3Q+ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UpIHtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMuTGlzdGFBcGVsaWRvID0gVXN1YXJpb1MuYXBlbGlkbztcclxuICAgIH1cclxuXHJcbiAgcG9wKCl7XHJcbiAgICB0aGlzLkxpc3RhQXBlbGlkby5wb3AoKTtcclxuICAgIFVzdWFyaW9TLmFwZWxpZG8ucG9wKCk7XHJcbiAgICBVc3VhcmlvUy5MRW50cmVnYS5wb3AoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJMaXN0OiBcIitKU09OLnN0cmluZ2lmeShVc3VhcmlvUy5hcGVsaWRvKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdyb2Nlcnk6IFwiK0pTT04uc3RyaW5naWZ5KHRoaXMuTGlzdGFBcGVsaWRvKSk7XHJcbiAgfVxyXG4gIHNoaWZ0KCl7XHJcbiAgICB0aGlzLkxpc3RhQXBlbGlkby5zaGlmdCgpO1xyXG4gICAgVXN1YXJpb1MuYXBlbGlkby5zaGlmdCgpO1xyXG4gICAgVXN1YXJpb1MuTEVudHJlZ2Euc2hpZnQoKTtcclxuICB9XHJcbiAgc3BsaWNlKCl7XHJcbiAgICB0aGlzLkxpc3RhQXBlbGlkby5zcGxpY2UoMCwyKTtcclxuICAgIFVzdWFyaW9TLmFwZWxpZG8uc3BsaWNlKDAsMik7XHJcbiAgICBVc3VhcmlvUy5MRW50cmVnYS5zcGxpY2UoMCwyKTtcclxuICB9XHJcbiAgLypPbnRhcChpOnN0cmluZyx5Om9iamVjdCl7XHJcbiAgICB2YXIgeDogbnVtYmVyO1xyXG4gICAgY29uc29sZS5sb2coXCJUZXN0ZSBuYW1lOlwiK3kpO1xyXG4gICAgY29uc29sZS5sb2coXCJUZXN0ZSBpbmRleDpcIitpKTtcclxuICAgIHggPSB0aGlzLkxpc3RhQXBlbGlkby5maW5kSW5kZXgoeSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4KSk7XHJcbiAgICAvKnRoaXMuTGlzdGFBcGVsaWRvLnNwbGljZSh4KTtcclxuICAgIFVzdWFyaW9TLmFwZWxpZG8uc3BsaWNlKHgpO1xyXG4gICAgVXN1YXJpb1MuTEVudHJlZ2Euc3BsaWNlKHgpO1xyXG4gIH0qL1xyXG59XHJcbiJdfQ==