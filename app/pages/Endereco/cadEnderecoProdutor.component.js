"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
//import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
var activityIndicatorModule = require("tns-core-modules/ui/activity-indicator");
var endereco_1 = require("../../shared/user/endereco");
var endereco_service_1 = require("../../shared/user/endereco.service");
var CadEnderecoProdutorComponent = (function () {
    function CadEnderecoProdutorComponent(page, enderecoService) {
        this.page = page;
        this.enderecoService = enderecoService;
        this.indicator = new activityIndicatorModule.ActivityIndicator();
        this.isLoading = false;
        this.endereco = new endereco_1.Endereco();
        page.backgroundImage = "res://bg_app";
    }
    CadEnderecoProdutorComponent.prototype.proximo = function () {
    };
    CadEnderecoProdutorComponent = __decorate([
        core_1.Component({
            selector: "cadEnderecoProdutor",
            providers: [endereco_service_1.EnderecoService],
            templateUrl: "pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
            styleUrls: ["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, endereco_service_1.EnderecoService])
    ], CadEnderecoProdutorComponent);
    return CadEnderecoProdutorComponent;
}());
exports.CadEnderecoProdutorComponent = CadEnderecoProdutorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFDL0IsNkVBQTZFO0FBQzdFLGdGQUFrRjtBQUVsRix1REFBc0Q7QUFDdEQsdUVBQXFFO0FBU3JFO0lBS0Usc0NBQW9CLElBQVUsRUFBVSxlQUFnQztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSHhFLGNBQVMsR0FBRyxJQUFJLHVCQUF1QixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFDRCw4Q0FBTyxHQUFQO0lBRUEsQ0FBQztJQVhVLDRCQUE0QjtRQVB4QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzVCLFdBQVcsRUFBQyxxREFBcUQ7WUFDakUsU0FBUyxFQUFDLENBQUMsb0RBQW9ELENBQUM7U0FDakUsQ0FBQzt5Q0FPMEIsV0FBSSxFQUEyQixrQ0FBZTtPQUw3RCw0QkFBNEIsQ0FheEM7SUFBRCxtQ0FBQztDQUFBLEFBYkQsSUFhQztBQWJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XHJcbmltcG9ydCAqIGFzIGFjdGl2aXR5SW5kaWNhdG9yTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiO1xyXG5cclxuaW1wb3J0IHsgRW5kZXJlY28gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuaW1wb3J0IHsgRW5kZXJlY29TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNhZEVuZGVyZWNvUHJvZHV0b3JcIixcclxuICBwcm92aWRlcnM6IFtFbmRlcmVjb1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvY2FkUHJvZHV0b3IvRW5kZXJlY28vY2FkRW5kZXJlY29Qcm9kdXRvci5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOltcInBhZ2VzL2NhZFByb2R1dG9yL0VuZGVyZWNvL2NhZEVuZGVyZWNvUHJvZHV0b3IuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FkRW5kZXJlY29Qcm9kdXRvckNvbXBvbmVudCB7XHJcbiAgZW5kZXJlY286IEVuZGVyZWNvO1xyXG4gIGluZGljYXRvciA9IG5ldyBhY3Rpdml0eUluZGljYXRvck1vZHVsZS5BY3Rpdml0eUluZGljYXRvcigpO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZW5kZXJlY29TZXJ2aWNlOiBFbmRlcmVjb1NlcnZpY2UpIHtcclxuICAgIHRoaXMuZW5kZXJlY28gPSBuZXcgRW5kZXJlY28oKTtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICB9XHJcbiAgcHJveGltbygpe1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=