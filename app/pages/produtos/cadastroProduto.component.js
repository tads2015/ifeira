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
        //page.actionBarHidden = false;
    }
    CadastroProdutoComponent.prototype.concluir = function () {
        console.log("Teste");
        console.log(JSON.stringify(this.produto));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkYXN0cm9Qcm9kdXRvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZGFzdHJvUHJvZHV0by5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsZ0NBQTZCO0FBQzdCLDBDQUF1QztBQUN2Qyx5REFBd0Q7QUFDeEQscUVBQW1FO0FBU25FO0lBS0Usa0NBQW9CLGNBQThCLEVBQVUsSUFBVSxFQUFVLE1BQWM7UUFBMUUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN0QywrQkFBK0I7SUFDakMsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtJQUNBLENBQUM7SUFqQlUsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1lBQzNCLFdBQVcsRUFBQyxxQ0FBcUM7WUFDakQsU0FBUyxFQUFDLENBQUMsb0NBQW9DLENBQUM7U0FDakQsQ0FBQzt5Q0FPb0MsZ0NBQWMsRUFBZ0IsV0FBSSxFQUFrQixlQUFNO09BTG5GLHdCQUF3QixDQWtCcEM7SUFBRCwrQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUHJvZHV0byB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvZHV0b3MvcHJvZHV0b1wiO1xyXG5pbXBvcnQgeyBQcm9kdXRvU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci9wcm9kdXRvLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImNhZFByb2R1dG9cIixcclxuICBwcm92aWRlcnM6IFtQcm9kdXRvU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9wcm9kdXRvcy9jYWRhc3Ryb1Byb2R1dG8uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9wcm9kdXRvcy9jYWRhc3Ryb1Byb2R1dG8uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FkYXN0cm9Qcm9kdXRvQ29tcG9uZW50e1xyXG5cclxuICAvL2RhdGUgPSBuZXcgRGF0ZSgnMjAxNS0wNS0wNScpO1xyXG5cclxuIHByb2R1dG86IFByb2R1dG87XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdXRvU2VydmljZTogUHJvZHV0b1NlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5wcm9kdXRvID0gbmV3IFByb2R1dG8oKTtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICAgIC8vcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGNvbmNsdWlyKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRlc3RlXCIpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9kdXRvKSk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGFkZSgpe1xyXG4gIH1cclxufSJdfQ==