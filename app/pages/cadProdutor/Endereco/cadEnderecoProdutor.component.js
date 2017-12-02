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
        this.end.apelido = 'IFPR';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxnQ0FBNkI7QUFFN0IsMERBQXVEO0FBUXZEO0lBSUUsc0NBQVksSUFBVTtRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFDRCw4Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQTtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBWkQ7UUFEQyxZQUFLLEVBQUU7a0NBQ0YsbUJBQVE7NkRBQUM7SUFGSiw0QkFBNEI7UUFOeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsV0FBVyxFQUFDLHFEQUFxRDtZQUNqRSxTQUFTLEVBQUMsQ0FBQyxvREFBb0QsQ0FBQztTQUNqRSxDQUFDO3lDQU1rQixXQUFJO09BSlgsNEJBQTRCLENBZXhDO0lBQUQsbUNBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHtFbmRlcmVjb30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRFbmRlcmVjb1Byb2R1dG9yXCIsXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvY2FkUHJvZHV0b3IvRW5kZXJlY28vY2FkRW5kZXJlY29Qcm9kdXRvci5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWRFbmRlcmVjb1Byb2R1dG9yQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGVuZCA6IEVuZGVyZWNvO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMuZW5kPW5ldyBFbmRlcmVjbygpO1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gIH0gIFxyXG4gIHByb3hpbW8oKXtcclxuICAgIHRoaXMuZW5kLmFwZWxpZG8gPSAnSUZQUidcclxuICAgIHRoaXMuZW5kLmNlcCA9ICcxMjAwMDAnXHJcbiAgICB0aGlzLmVuZC5iYWlycm8gPSAnQXJlYSAyJ1xyXG4gICAgdGhpcy5lbmQubG9jYWxpZGFkZSA9ICdUZWxlbWFjbydcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZW5kKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19