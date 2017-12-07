"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
//import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
var activityIndicatorModule = require("tns-core-modules/ui/activity-indicator");
var endereco_1 = require("../../../shared/user/endereco");
var endereco_service_1 = require("../../../shared/user/endereco.service");
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
        console.log("Result CadEnderecoProdutor:" + JSON.stringify(this.endereco));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFDL0IsNkVBQTZFO0FBQzdFLGdGQUFrRjtBQUVsRiwwREFBeUQ7QUFDekQsMEVBQXdFO0FBU3hFO0lBS0Usc0NBQW9CLElBQVUsRUFBVSxlQUFnQztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSHhFLGNBQVMsR0FBRyxJQUFJLHVCQUF1QixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFDRCw4Q0FBTyxHQUFQO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFYVSw0QkFBNEI7UUFQeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM1QixXQUFXLEVBQUMscURBQXFEO1lBQ2pFLFNBQVMsRUFBQyxDQUFDLG9EQUFvRCxDQUFDO1NBQ2pFLENBQUM7eUNBTzBCLFdBQUksRUFBMkIsa0NBQWU7T0FMN0QsNEJBQTRCLENBYXhDO0lBQUQsbUNBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuLy9pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiO1xyXG5pbXBvcnQgKiBhcyBhY3Rpdml0eUluZGljYXRvck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcclxuXHJcbmltcG9ydCB7IEVuZGVyZWNvIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcbmltcG9ydCB7IEVuZGVyZWNvU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlci9lbmRlcmVjby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRFbmRlcmVjb1Byb2R1dG9yXCIsXHJcbiAgcHJvdmlkZXJzOiBbRW5kZXJlY29TZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL0VuZGVyZWNvL2NhZEVuZGVyZWNvUHJvZHV0b3IuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnQge1xyXG4gIGVuZGVyZWNvOiBFbmRlcmVjbztcclxuICBpbmRpY2F0b3IgPSBuZXcgYWN0aXZpdHlJbmRpY2F0b3JNb2R1bGUuQWN0aXZpdHlJbmRpY2F0b3IoKTtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGVuZGVyZWNvU2VydmljZTogRW5kZXJlY29TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmVuZGVyZWNvID0gbmV3IEVuZGVyZWNvKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfVxyXG4gIHByb3hpbW8oKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IENhZEVuZGVyZWNvUHJvZHV0b3I6XCIrSlNPTi5zdHJpbmdpZnkodGhpcy5lbmRlcmVjbykpXHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19