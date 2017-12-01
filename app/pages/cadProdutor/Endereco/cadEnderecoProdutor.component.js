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
    CadEnderecoProdutorComponent.prototype.buscaCEP = function () {
        var _this = this;
        if (this.endereco.cep.length == 8) {
            this.isLoading = true;
            this.enderecoService.buscaCEP(this.endereco.cep)
                .subscribe(function (data) {
                console.log(JSON.stringify(data));
                //console.log(data.logradouro);
                //this.endereco.cep = data.cep;
                _this.endereco.logradouro = data.logradouro;
                _this.endereco.bairro = data.bairro;
                _this.endereco.localidade = data.localidade;
                _this.endereco.UF = data.uf;
                _this.indicator;
                //console.log(this.endereco.logradouro);
                _this.isLoading = false;
            }, function (err) {
                console.log(err);
                alert("Erro ao buscar CEP. Insira suas informações manualmente!");
                _this.isLoading = false;
            });
        }
        else {
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRW5kZXJlY29Qcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFDL0IsNkVBQTZFO0FBQzdFLGdGQUFrRjtBQUVsRiwwREFBeUQ7QUFDekQsMEVBQXdFO0FBU3hFO0lBS0Usc0NBQW9CLElBQVUsRUFBVSxlQUFnQztRQUFwRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSHhFLGNBQVMsR0FBRyxJQUFJLHVCQUF1QixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUd6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBUSxHQUFSO1FBQUEsaUJBMEJDO1FBekJDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2lCQUMvQyxTQUFTLENBQ1IsVUFBQyxJQUFJO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQywrQkFBK0I7Z0JBQy9CLCtCQUErQjtnQkFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFNBQVMsQ0FBQztnQkFDZix3Q0FBd0M7Z0JBQ3hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsRUFDRCxVQUFDLEdBQUc7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7Z0JBQ2xFLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDO1FBQ1QsQ0FBQztJQUNILENBQUM7SUFFRCw4Q0FBTyxHQUFQO0lBRUEsQ0FBQztJQXhDVSw0QkFBNEI7UUFQeEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM1QixXQUFXLEVBQUMscURBQXFEO1lBQ2pFLFNBQVMsRUFBQyxDQUFDLG9EQUFvRCxDQUFDO1NBQ2pFLENBQUM7eUNBTzBCLFdBQUksRUFBMkIsa0NBQWU7T0FMN0QsNEJBQTRCLENBMEN4QztJQUFELG1DQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbi8vaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcclxuaW1wb3J0ICogYXMgYWN0aXZpdHlJbmRpY2F0b3JNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XHJcblxyXG5pbXBvcnQgeyBFbmRlcmVjbyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlci9lbmRlcmVjb1wiO1xyXG5pbXBvcnQgeyBFbmRlcmVjb1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZW5kZXJlY28uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY2FkRW5kZXJlY29Qcm9kdXRvclwiLFxyXG4gIHByb3ZpZGVyczogW0VuZGVyZWNvU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvY2FkUHJvZHV0b3IvRW5kZXJlY28vY2FkRW5kZXJlY29Qcm9kdXRvci5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWRFbmRlcmVjb1Byb2R1dG9yQ29tcG9uZW50IHtcclxuICBlbmRlcmVjbzogRW5kZXJlY287XHJcbiAgaW5kaWNhdG9yID0gbmV3IGFjdGl2aXR5SW5kaWNhdG9yTW9kdWxlLkFjdGl2aXR5SW5kaWNhdG9yKCk7XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBlbmRlcmVjb1NlcnZpY2U6IEVuZGVyZWNvU2VydmljZSkge1xyXG4gICAgdGhpcy5lbmRlcmVjbyA9IG5ldyBFbmRlcmVjbygpO1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gIH1cclxuXHJcbiAgYnVzY2FDRVAoKXtcclxuICAgIGlmKHRoaXMuZW5kZXJlY28uY2VwLmxlbmd0aCA9PSA4KXtcclxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmVuZGVyZWNvU2VydmljZS5idXNjYUNFUCh0aGlzLmVuZGVyZWNvLmNlcClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLmxvZ3JhZG91cm8pO1xyXG4gICAgICAgICAgLy90aGlzLmVuZGVyZWNvLmNlcCA9IGRhdGEuY2VwO1xyXG4gICAgICAgICAgdGhpcy5lbmRlcmVjby5sb2dyYWRvdXJvID0gZGF0YS5sb2dyYWRvdXJvO1xyXG4gICAgICAgICAgdGhpcy5lbmRlcmVjby5iYWlycm8gPSBkYXRhLmJhaXJybztcclxuICAgICAgICAgIHRoaXMuZW5kZXJlY28ubG9jYWxpZGFkZSA9IGRhdGEubG9jYWxpZGFkZTtcclxuICAgICAgICAgIHRoaXMuZW5kZXJlY28uVUYgPSBkYXRhLnVmO1xyXG4gICAgICAgICAgdGhpcy5pbmRpY2F0b3I7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZW5kZXJlY28ubG9ncmFkb3Vybyk7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIGFsZXJ0KFwiRXJybyBhbyBidXNjYXIgQ0VQLiBJbnNpcmEgc3VhcyBpbmZvcm1hw6fDtWVzIG1hbnVhbG1lbnRlIVwiKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJveGltbygpe1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=