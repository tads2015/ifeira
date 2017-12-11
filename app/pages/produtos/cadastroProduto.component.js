"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var produto_1 = require("../../shared/produtos/produto");
var produto_service_1 = require("../../shared/user/produto.service");
var errosProduto_1 = require("./errosProduto");
var CadastroProdutoComponent = (function () {
    function CadastroProdutoComponent(produtoService, page, router) {
        this.produtoService = produtoService;
        this.page = page;
        this.router = router;
        this.produto = new produto_1.Produto();
        this.errosProduto = new errosProduto_1.ErrosProduto();
        page.backgroundImage = "res://bg_app";
    }
    CadastroProdutoComponent.prototype.enviar = function () {
        if (this.produto.descricao == "") {
            this.errosProduto.descricao = "Descrição não pode ser nula.";
            return false;
        }
        this.produtoService.cadastroProdutos(this.produto)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            //this.router.navigate(["/CadastroProduto"]);
        }, function (err) {
            console.log(err);
            alert("Erro ao cadastrar produto");
        });
    };
    CadastroProdutoComponent.prototype.validade = function () {
    };
    CadastroProdutoComponent = __decorate([
        core_1.Component({
            selector: "cadProduto",
            providers: [produto_service_1.ProdutoService],
            templateUrl: "pages/produtos/cadastroProduto.html",
            styleUrls: ["pages/produtos/cadastroProduto.css"]
        }),
        __metadata("design:paramtypes", [produto_service_1.ProdutoService, page_1.Page, router_1.Router])
    ], CadastroProdutoComponent);
    return CadastroProdutoComponent;
}());
exports.CadastroProdutoComponent = CadastroProdutoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkYXN0cm9Qcm9kdXRvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZGFzdHJvUHJvZHV0by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUN2Qyx5REFBd0Q7QUFDeEQscUVBQW1FO0FBRW5FLCtDQUE4QztBQVM5QztJQU1FLGtDQUFvQixjQUE4QixFQUFVLElBQVUsRUFBVSxNQUFjO1FBQTFFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzVGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUMsOEJBQThCLENBQUM7WUFDM0QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFHRCxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDakQsU0FBUyxDQUNSLFVBQUMsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRWxDLDZDQUE2QztRQUMvQyxDQUFDLEVBQ0QsVUFBQyxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQ0YsQ0FBQztJQUNGLENBQUM7SUFHSCwyQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQW5DVSx3QkFBd0I7UUFQcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDM0IsV0FBVyxFQUFDLHFDQUFxQztZQUNqRCxTQUFTLEVBQUMsQ0FBQyxvQ0FBb0MsQ0FBQztTQUNqRCxDQUFDO3lDQVFvQyxnQ0FBYyxFQUFnQixXQUFJLEVBQWtCLGVBQU07T0FObkYsd0JBQXdCLENBb0NwQztJQUFELCtCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQcm9kdXRvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm9kdXRvcy9wcm9kdXRvXCI7XHJcbmltcG9ydCB7IFByb2R1dG9TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3Byb2R1dG8uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFcnJvc1Byb2R1dG8gfSBmcm9tIFwiLi9lcnJvc1Byb2R1dG9cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNhZFByb2R1dG9cIixcclxuICBwcm92aWRlcnM6IFtQcm9kdXRvU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9wcm9kdXRvcy9jYWRhc3Ryb1Byb2R1dG8uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9wcm9kdXRvcy9jYWRhc3Ryb1Byb2R1dG8uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FkYXN0cm9Qcm9kdXRvQ29tcG9uZW50e1xyXG5cclxuICAvL2RhdGUgPSBuZXcgRGF0ZSgnMjAxNS0wNS0wNScpO1xyXG5cclxuIHByb2R1dG86IFByb2R1dG87XHJcbiBlcnJvc1Byb2R1dG86IEVycm9zUHJvZHV0bztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1dG9TZXJ2aWNlOiBQcm9kdXRvU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLnByb2R1dG8gPSBuZXcgUHJvZHV0bygpO1xyXG4gICAgdGhpcy5lcnJvc1Byb2R1dG8gPSBuZXcgRXJyb3NQcm9kdXRvKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfVxyXG5cclxuICBlbnZpYXIoKXtcclxuICAgIGlmKHRoaXMucHJvZHV0by5kZXNjcmljYW8gPT0gXCJcIil7XHJcbiAgICAgIHRoaXMuZXJyb3NQcm9kdXRvLmRlc2NyaWNhbz1cIkRlc2NyacOnw6NvIG7Do28gcG9kZSBzZXIgbnVsYS5cIjtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0aGlzLnByb2R1dG9TZXJ2aWNlLmNhZGFzdHJvUHJvZHV0b3ModGhpcy5wcm9kdXRvKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgIFxyXG4gICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL0NhZGFzdHJvUHJvZHV0b1wiXSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGFsZXJ0KFwiRXJybyBhbyBjYWRhc3RyYXIgcHJvZHV0b1wiKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gIHZhbGlkYWRlKCl7XHJcbiAgfVxyXG59Il19