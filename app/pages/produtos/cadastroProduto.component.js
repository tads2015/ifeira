"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var produto_1 = require("../../shared/produtos/produto");
var produto_service_1 = require("../../shared/user/produto.service");
var CadastroProdutoComponent = (function () {
    function CadastroProdutoComponent(produtoService, page, router) {
        this.produtoService = produtoService;
        this.page = page;
        this.router = router;
        this.produto = new produto_1.Produto();
        page.backgroundImage = "res://bg_app";
    }
    CadastroProdutoComponent.prototype.enviar = function () {
        var _this = this;
        this.produtoService.cadastroProdutos(this.produto)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.produtoService.saveProdutos(data.jwt);
        }, function (err) {
            console.log(err);
            alert("erro");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkYXN0cm9Qcm9kdXRvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZGFzdHJvUHJvZHV0by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUN2Qyx5REFBd0Q7QUFDeEQscUVBQW1FO0FBU25FO0lBS0Usa0NBQW9CLGNBQThCLEVBQVUsSUFBVSxFQUFVLE1BQWM7UUFBMUUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2pELFNBQVMsQ0FDUixVQUFDLElBQUk7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELDJDQUFRLEdBQVI7SUFDQSxDQUFDO0lBekJVLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUMzQixXQUFXLEVBQUMscUNBQXFDO1lBQ2pELFNBQVMsRUFBQyxDQUFDLG9DQUFvQyxDQUFDO1NBQ2pELENBQUM7eUNBT29DLGdDQUFjLEVBQWdCLFdBQUksRUFBa0IsZUFBTTtPQUxuRix3QkFBd0IsQ0EwQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb2R1dG8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb2R1dG9zL3Byb2R1dG9cIjtcclxuaW1wb3J0IHsgUHJvZHV0b1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvcHJvZHV0by5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRQcm9kdXRvXCIsXHJcbiAgcHJvdmlkZXJzOiBbUHJvZHV0b1NlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvcHJvZHV0b3MvY2FkYXN0cm9Qcm9kdXRvLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvcHJvZHV0b3MvY2FkYXN0cm9Qcm9kdXRvLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZGFzdHJvUHJvZHV0b0NvbXBvbmVudHtcclxuXHJcbiAgLy9kYXRlID0gbmV3IERhdGUoJzIwMTUtMDUtMDUnKTtcclxuXHJcbiBwcm9kdXRvOiBQcm9kdXRvO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHV0b1NlcnZpY2U6IFByb2R1dG9TZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMucHJvZHV0byA9IG5ldyBQcm9kdXRvKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfVxyXG5cclxuICBlbnZpYXIoKXtcclxuICAgIHRoaXMucHJvZHV0b1NlcnZpY2UuY2FkYXN0cm9Qcm9kdXRvcyh0aGlzLnByb2R1dG8pXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICB0aGlzLnByb2R1dG9TZXJ2aWNlLnNhdmVQcm9kdXRvcyhkYXRhLmp3dCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGFsZXJ0KFwiZXJyb1wiKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYWRlKCl7XHJcbiAgfVxyXG59Il19