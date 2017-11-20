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
            providers: [endereco_service_1.EnderecoService],
            templateUrl: "pages/cadProdutor/Endereco/cadEnderecoProdutor.html",
            styleUrls: ["pages/cadProdutor/Endereco/cadEnderecoProdutor.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, endereco_service_1.EnderecoService])
    ], CadEnderecoProdutorComponent);
    return CadEnderecoProdutorComponent;
}());
exports.CadEnderecoProdutorComponent = CadEnderecoProdutorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFFL0IsMERBQXlEO0FBQ3pELDBFQUF3RTtBQVN4RTtJQUdFLHNDQUFvQixJQUFVLEVBQVUsZUFBZ0M7UUFBcEQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN0RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDL0MsU0FBUyxDQUNSLFVBQUMsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFDLEdBQUc7UUFFSixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCw4Q0FBTyxHQUFQO0lBRUEsQ0FBQztJQXRCVSw0QkFBNEI7UUFQeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM1QixXQUFXLEVBQUMscURBQXFEO1lBQ2pFLFNBQVMsRUFBQyxDQUFDLG9EQUFvRCxDQUFDO1NBQ2pFLENBQUM7eUNBSzBCLFdBQUksRUFBMkIsa0NBQWU7T0FIN0QsNEJBQTRCLENBd0J4QztJQUFELG1DQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBFbmRlcmVjbyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlci9lbmRlcmVjb1wiO1xyXG5pbXBvcnQgeyBFbmRlcmVjb1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY28uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY2FkRW5kZXJlY29Qcm9kdXRvclwiLFxyXG4gIHByb3ZpZGVyczogW0VuZGVyZWNvU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvY2FkUHJvZHV0b3IvRW5kZXJlY28vY2FkRW5kZXJlY29Qcm9kdXRvci5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWRFbmRlcmVjb1Byb2R1dG9yQ29tcG9uZW50IHtcclxuICBlbmRlcmVjbzogRW5kZXJlY287XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBlbmRlcmVjb1NlcnZpY2U6IEVuZGVyZWNvU2VydmljZSkge1xyXG4gICAgdGhpcy5lbmRlcmVjbyA9IG5ldyBFbmRlcmVjbygpO1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gIH1cclxuXHJcbiAgYnVzY2FDRVAoKXtcclxuICAgIHRoaXMuZW5kZXJlY29TZXJ2aWNlLmJ1c2NhQ0VQKHRoaXMuZW5kZXJlY28uY2VwKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnIpID0+IHtcclxuXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm94aW1vKCl7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==