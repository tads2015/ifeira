"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var LocaisEntregaComponent = (function () {
    function LocaisEntregaComponent(page) {
        this.batata = "Concluir";
        this.heroes = [];
        page.backgroundImage = "res://bg_app";
    }
    LocaisEntregaComponent.prototype.ngOnInit = function () {
        this.heroes.push({ name: "Apples" });
        this.heroes.push({ name: "Bananas" });
        this.heroes.push({ name: "Oranges" });
    };
    LocaisEntregaComponent.prototype.proximo = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWlzRW50cmVnYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhaXNFbnRyZWdhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBNkI7QUFTN0I7SUFJRSxnQ0FBWSxJQUFVO1FBRnRCLFdBQU0sR0FBRyxVQUFVLENBQUM7UUFDcEIsV0FBTSxHQUFrQixFQUFFLENBQUM7UUFHekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUNDLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0gsd0NBQU8sR0FBUDtJQUNBLENBQUM7SUFkVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBQyxvREFBb0Q7WUFDaEUsU0FBUyxFQUFDLENBQUMsbURBQW1ELENBQUM7U0FDaEUsQ0FBQzt5Q0FNa0IsV0FBSTtPQUpYLHNCQUFzQixDQWVsQztJQUFELDZCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtFbmRlcmVjb30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsb2NhaXNFbnRyZWdhXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9sb2NhaXNFbnRyZWdhL2xvY2Fpc0VudHJlZ2EuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWlzRW50cmVnYUNvbXBvbmVudCB7XHJcblxyXG4gIGJhdGF0YSA9IFwiQ29uY2x1aXJcIjtcclxuICBoZXJvZXM6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlKSB7XHJcbiAgICBcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgdGhpcy5oZXJvZXMucHVzaCh7IG5hbWU6IFwiQXBwbGVzXCIgfSk7XHJcbiAgICAgIHRoaXMuaGVyb2VzLnB1c2goeyBuYW1lOiBcIkJhbmFuYXNcIiB9KTtcclxuICAgICAgdGhpcy5oZXJvZXMucHVzaCh7IG5hbWU6IFwiT3Jhbmdlc1wiIH0pO1xyXG4gICAgfVxyXG4gIHByb3hpbW8oKXtcclxuICB9XHJcbn1cclxuIl19