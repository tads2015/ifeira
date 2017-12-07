"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
//import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
//import * as activityIndicatorModule from "tns-core-modules/ui/activity-indicator";
var endereco_1 = require("../../../shared/user/endereco");
var endereco_service_1 = require("../../../shared/user/endereco.service");
var BuscaCepComponent = (function () {
    function BuscaCepComponent(page, enderecoService) {
        this.page = page;
        this.enderecoService = enderecoService;
        //indicator = new activityIndicatorModule.ActivityIndicator();
        this.isLoading = false;
        this.endereco = new endereco_1.Endereco();
        page.backgroundImage = "res://bg_app";
    }
    BuscaCepComponent.prototype.buscaCEP = function () {
        var _this = this;
        if (this.endereco.cep.length == 8) {
            this.isLoading = true;
            this.enderecoService.buscaCEP(this.endereco.cep)
                .subscribe(function (data) {
                //console.log("Result BuscaCep:"+JSON.stringify(data));
                //console.log(data.logradouro);
                //this.endereco.cep = data.cep;
                _this.endereco.logradouro = data.logradouro;
                _this.endereco.bairro = data.bairro;
                _this.endereco.localidade = data.localidade;
                _this.endereco.UF = data.uf;
                //this.indicator;
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
    BuscaCepComponent.prototype.proximo = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", endereco_1.Endereco)
    ], BuscaCepComponent.prototype, "endereco", void 0);
    BuscaCepComponent = __decorate([
        core_1.Component({
            selector: "BuscaCep",
            providers: [endereco_service_1.EnderecoService],
            templateUrl: "pages/cadProdutor/BuscaCep/BuscaCep.html",
            styleUrls: ["pages/cadProdutor/BuscaCep/BuscaCep.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, endereco_service_1.EnderecoService])
    ], BuscaCepComponent);
    return BuscaCepComponent;
}());
exports.BuscaCepComponent = BuscaCepComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVzY2FDZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVzY2FDZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELGdDQUErQjtBQUMvQiw2RUFBNkU7QUFDN0Usb0ZBQW9GO0FBRXBGLDBEQUF5RDtBQUN6RCwwRUFBd0U7QUFTeEU7SUFNRSwyQkFBb0IsSUFBVSxFQUFVLGVBQWdDO1FBQXBELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIeEUsOERBQThEO1FBQzlELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFHekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQTBCQztRQXpCQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztpQkFDL0MsU0FBUyxDQUNSLFVBQUMsSUFBSTtnQkFDSCx1REFBdUQ7Z0JBQ3ZELCtCQUErQjtnQkFDL0IsK0JBQStCO2dCQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUMzQyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUMzQixpQkFBaUI7Z0JBQ2pCLHdDQUF3QztnQkFDeEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxFQUNELFVBQUMsR0FBRztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztnQkFDbEUsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUM7UUFDVCxDQUFDO0lBQ0gsQ0FBQztJQUVELG1DQUFPLEdBQVA7SUFFQSxDQUFDO0lBdkNEO1FBREMsWUFBSyxFQUFFO2tDQUNFLG1CQUFRO3VEQUFDO0lBRlIsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1lBQzVCLFdBQVcsRUFBQywwQ0FBMEM7WUFDdEQsU0FBUyxFQUFDLENBQUMseUNBQXlDLENBQUM7U0FDdEQsQ0FBQzt5Q0FRMEIsV0FBSSxFQUEyQixrQ0FBZTtPQU43RCxpQkFBaUIsQ0EyQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbi8vaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcclxuLy9pbXBvcnQgKiBhcyBhY3Rpdml0eUluZGljYXRvck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcclxuXHJcbmltcG9ydCB7IEVuZGVyZWNvIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcbmltcG9ydCB7IEVuZGVyZWNvU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlci9lbmRlcmVjby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJCdXNjYUNlcFwiLFxyXG4gIHByb3ZpZGVyczogW0VuZGVyZWNvU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6XCJwYWdlcy9jYWRQcm9kdXRvci9CdXNjYUNlcC9CdXNjYUNlcC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOltcInBhZ2VzL2NhZFByb2R1dG9yL0J1c2NhQ2VwL0J1c2NhQ2VwLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1c2NhQ2VwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGVuZGVyZWNvOiBFbmRlcmVjbztcclxuICAvL2luZGljYXRvciA9IG5ldyBhY3Rpdml0eUluZGljYXRvck1vZHVsZS5BY3Rpdml0eUluZGljYXRvcigpO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZW5kZXJlY29TZXJ2aWNlOiBFbmRlcmVjb1NlcnZpY2UpIHtcclxuICAgIHRoaXMuZW5kZXJlY28gPSBuZXcgRW5kZXJlY28oKTtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICB9XHJcblxyXG4gIGJ1c2NhQ0VQKCl7XHJcbiAgICBpZih0aGlzLmVuZGVyZWNvLmNlcC5sZW5ndGggPT0gOCl7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5lbmRlcmVjb1NlcnZpY2UuYnVzY2FDRVAodGhpcy5lbmRlcmVjby5jZXApXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSZXN1bHQgQnVzY2FDZXA6XCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhLmxvZ3JhZG91cm8pO1xyXG4gICAgICAgICAgLy90aGlzLmVuZGVyZWNvLmNlcCA9IGRhdGEuY2VwO1xyXG4gICAgICAgICAgdGhpcy5lbmRlcmVjby5sb2dyYWRvdXJvID0gZGF0YS5sb2dyYWRvdXJvO1xyXG4gICAgICAgICAgdGhpcy5lbmRlcmVjby5iYWlycm8gPSBkYXRhLmJhaXJybztcclxuICAgICAgICAgIHRoaXMuZW5kZXJlY28ubG9jYWxpZGFkZSA9IGRhdGEubG9jYWxpZGFkZTtcclxuICAgICAgICAgIHRoaXMuZW5kZXJlY28uVUYgPSBkYXRhLnVmO1xyXG4gICAgICAgICAgLy90aGlzLmluZGljYXRvcjtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lbmRlcmVjby5sb2dyYWRvdXJvKTtcclxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgYWxlcnQoXCJFcnJvIGFvIGJ1c2NhciBDRVAuIEluc2lyYSBzdWFzIGluZm9ybWHDp8O1ZXMgbWFudWFsbWVudGUhXCIpO1xyXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm94aW1vKCl7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==