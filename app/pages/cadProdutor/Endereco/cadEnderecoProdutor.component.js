"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var endereco_1 = require("../../../shared/user/endereco");
var endereco_service_1 = require("../../../shared/user/endereco.service");
var CadEnderecoProdutorComponent = (function () {
    function CadEnderecoProdutorComponent(page, enderecoService) {
        this.page = page;
        this.enderecoService = enderecoService;
        this.endereco = new endereco_1.Endereco();
        page.backgroundImage = "res://bg_app";
    }
    CadEnderecoProdutorComponent.prototype.buscaCEP = function () {
        this.enderecoService.buscaCEP(this.endereco.cep)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
        }, function (err) {
        });
    };
    CadEnderecoProdutorComponent.prototype.proximo = function () {
    };
    CadEnderecoProdutorComponent = __decorate([
        core_1.Component({
            selector: "cadEnderecoProdutor",
            templateUrl: "pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
            styleUrls: ["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, endereco_service_1.EnderecoService])
    ], CadEnderecoProdutorComponent);
    return CadEnderecoProdutorComponent;
}());
exports.CadEnderecoProdutorComponent = CadEnderecoProdutorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFFL0IsMERBQXlEO0FBQ3pELDBFQUF3RTtBQVF4RTtJQUdFLHNDQUFvQixJQUFVLEVBQVUsZUFBZ0M7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDL0MsU0FBUyxDQUNSLFVBQUMsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFDLEdBQUc7UUFFSixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCw4Q0FBTyxHQUFQO0lBRUEsQ0FBQztJQXRCVSw0QkFBNEI7UUFOeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFDLHFEQUFxRDtZQUNqRSxTQUFTLEVBQUMsQ0FBQyxvREFBb0QsQ0FBQztTQUNqRSxDQUFDO3lDQUswQixXQUFJLEVBQTJCLGtDQUFlO09BSDdELDRCQUE0QixDQXdCeEM7SUFBRCxtQ0FBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgRW5kZXJlY28gfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuaW1wb3J0IHsgRW5kZXJlY29TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNhZEVuZGVyZWNvUHJvZHV0b3JcIixcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL0VuZGVyZWNvL2NhZEVuZGVyZWNvUHJvZHV0b3IuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnQge1xyXG4gIGVuZGVyZWNvOiBFbmRlcmVjbztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGVuZGVyZWNvU2VydmljZTogRW5kZXJlY29TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmVuZGVyZWNvID0gbmV3IEVuZGVyZWNvKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfVxyXG5cclxuICBidXNjYUNFUCgpe1xyXG4gICAgdGhpcy5lbmRlcmVjb1NlcnZpY2UuYnVzY2FDRVAodGhpcy5lbmRlcmVjby5jZXApXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycikgPT4ge1xyXG5cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3hpbW8oKXtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19