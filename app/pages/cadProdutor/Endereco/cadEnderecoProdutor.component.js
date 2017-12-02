"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var endereco_1 = require("../../../shared/user/endereco");
var CadEnderecoProdutorComponent = (function () {
    function CadEnderecoProdutorComponent(page) {
        this.end = new endereco_1.Endereco();
        page.backgroundImage = "res://bg_app";
    }
    CadEnderecoProdutorComponent.prototype.proximo = function () {
        this.end.cep = '120000';
        this.end.bairro = 'Area 2';
        this.end.localidade = 'Telemaco';
        console.log(JSON.stringify(this.end));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", endereco_1.Endereco)
    ], CadEnderecoProdutorComponent.prototype, "end", void 0);
    CadEnderecoProdutorComponent = __decorate([
        core_1.Component({
            selector: "cadEnderecoProdutor",
            templateUrl: "pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
            styleUrls: ["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], CadEnderecoProdutorComponent);
    return CadEnderecoProdutorComponent;
}());
exports.CadEnderecoProdutorComponent = CadEnderecoProdutorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBNkI7QUFFN0IsMERBQXVEO0FBUXZEO0lBSUUsc0NBQVksSUFBVTtRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFDRCw4Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFYRDtRQURDLFlBQUssRUFBRTtrQ0FDRixtQkFBUTs2REFBQztJQUZKLDRCQUE0QjtRQU54QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixXQUFXLEVBQUMscURBQXFEO1lBQ2pFLFNBQVMsRUFBQyxDQUFDLG9EQUFvRCxDQUFDO1NBQ2pFLENBQUM7eUNBTWtCLFdBQUk7T0FKWCw0QkFBNEIsQ0FjeEM7SUFBRCxtQ0FBQztDQUFBLEFBZEQsSUFjQztBQWRZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQge0VuZGVyZWNvfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY29cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNhZEVuZGVyZWNvUHJvZHV0b3JcIixcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL0VuZGVyZWNvL2NhZEVuZGVyZWNvUHJvZHV0b3IuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgZW5kIDogRW5kZXJlY287XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5lbmQ9bmV3IEVuZGVyZWNvKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfSAgXHJcbiAgcHJveGltbygpe1xyXG4gICAgdGhpcy5lbmQuY2VwID0gJzEyMDAwMCc7XHJcbiAgICB0aGlzLmVuZC5iYWlycm8gPSAnQXJlYSAyJ1xyXG4gICAgdGhpcy5lbmQubG9jYWxpZGFkZSA9ICdUZWxlbWFjbydcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZW5kKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19