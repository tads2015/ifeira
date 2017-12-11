"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
//import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
var activityIndicatorModule = require("tns-core-modules/ui/activity-indicator");
var userS_1 = require("../../../shared/userS/userS");
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
        userS_1.UsuarioS.EnderecoProdutor = this.endereco;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFDL0IsNkVBQTZFO0FBQzdFLGdGQUFrRjtBQUVsRixxREFBb0Q7QUFDcEQsMERBQXlEO0FBQ3pELDBFQUF3RTtBQVN4RTtJQUtFLHNDQUFvQixJQUFVLEVBQVUsZUFBZ0M7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUh4RSxjQUFTLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsOENBQU8sR0FBUDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUN4RSxnQkFBUSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQVpVLDRCQUE0QjtRQVB4QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzVCLFdBQVcsRUFBQyxxREFBcUQ7WUFDakUsU0FBUyxFQUFDLENBQUMsb0RBQW9ELENBQUM7U0FDakUsQ0FBQzt5Q0FPMEIsV0FBSSxFQUEyQixrQ0FBZTtPQUw3RCw0QkFBNEIsQ0FjeEM7SUFBRCxtQ0FBQztDQUFBLEFBZEQsSUFjQztBQWRZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XHJcbmltcG9ydCAqIGFzIGFjdGl2aXR5SW5kaWNhdG9yTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiO1xyXG5cclxuaW1wb3J0IHtVc3VhcmlvU30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyUy91c2VyU1wiXHJcbmltcG9ydCB7IEVuZGVyZWNvIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcbmltcG9ydCB7IEVuZGVyZWNvU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlci9lbmRlcmVjby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRFbmRlcmVjb1Byb2R1dG9yXCIsXHJcbiAgcHJvdmlkZXJzOiBbRW5kZXJlY29TZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL0VuZGVyZWNvL2NhZEVuZGVyZWNvUHJvZHV0b3IuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnQge1xyXG4gIGVuZGVyZWNvOiBFbmRlcmVjbztcclxuICBpbmRpY2F0b3IgPSBuZXcgYWN0aXZpdHlJbmRpY2F0b3JNb2R1bGUuQWN0aXZpdHlJbmRpY2F0b3IoKTtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGVuZGVyZWNvU2VydmljZTogRW5kZXJlY29TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmVuZGVyZWNvID0gbmV3IEVuZGVyZWNvKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfVxyXG4gIHByb3hpbW8oKXtcclxuICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IENhZEVuZGVyZWNvUHJvZHV0b3I6XCIrSlNPTi5zdHJpbmdpZnkodGhpcy5lbmRlcmVjbykpXHJcbiAgICBVc3VhcmlvUy5FbmRlcmVjb1Byb2R1dG9yID0gdGhpcy5lbmRlcmVjbztcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=