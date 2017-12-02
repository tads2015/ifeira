"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var userS_1 = require("../../../shared/userS/userS");
var LocaisEntregaComponent = (function () {
    function LocaisEntregaComponent(page) {
        this.groceryList = [];
        page.backgroundImage = "res://bg_app";
    }
    LocaisEntregaComponent.prototype.ngOnInit = function () {
        this.groceryList = userS_1.UsuarioS.list;
    };
    LocaisEntregaComponent.prototype.proximo = function () {
        console.log("List: " + JSON.stringify(userS_1.UsuarioS.list));
        console.log("Grocery: " + JSON.stringify(this.groceryList));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWlzRW50cmVnYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhaXNFbnRyZWdhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBNkI7QUFHN0IscURBQW9EO0FBUXBEO0lBSUUsZ0NBQVksSUFBVTtRQUZ0QixnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVDLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFSCx3Q0FBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBZlUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUMsb0RBQW9EO1lBQ2hFLFNBQVMsRUFBQyxDQUFDLG1EQUFtRCxDQUFDO1NBQ2hFLENBQUM7eUNBTWtCLFdBQUk7T0FKWCxzQkFBc0IsQ0FnQmxDO0lBQUQsNkJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge0VuZGVyZWNvfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9jb25maWdcIjtcclxuaW1wb3J0IHtVc3VhcmlvU30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyUy91c2VyU1wiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2NhaXNFbnRyZWdhXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWlzRW50cmVnYUNvbXBvbmVudCB7XHJcbiAgXHJcbiAgZ3JvY2VyeUxpc3Q6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocGFnZTogUGFnZSkge1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgdGhpcy5ncm9jZXJ5TGlzdCA9IFVzdWFyaW9TLmxpc3Q7XHJcbiAgICB9XHJcblxyXG4gIHByb3hpbW8oKXtcclxuICAgIGNvbnNvbGUubG9nKFwiTGlzdDogXCIrSlNPTi5zdHJpbmdpZnkoVXN1YXJpb1MubGlzdCkpO1xyXG4gICAgY29uc29sZS5sb2coXCJHcm9jZXJ5OiBcIitKU09OLnN0cmluZ2lmeSh0aGlzLmdyb2NlcnlMaXN0KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==