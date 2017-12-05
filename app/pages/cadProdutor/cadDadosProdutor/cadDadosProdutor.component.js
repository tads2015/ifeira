"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var dadosProdutor_1 = require("../../../shared/dadosProdutor/dadosProdutor");
var dadosProdutor_service_1 = require("../../../shared/dadosProdutor/dadosProdutor.service");
// para rota verificar forma usada para routear
var router_1 = require("@angular/router");
var CadDadosProdutorComponent = (function () {
    //Verificar Router direto 
    function CadDadosProdutorComponent(page, router, dadosProdutorService) {
        this.router = router;
        this.dadosProdutorService = dadosProdutorService;
        page.backgroundImage = "res://bg_app";
        this.dados = new dadosProdutor_1.DadosProdutor();
    }
    CadDadosProdutorComponent.prototype.proximo = function () {
        this.dadosProdutorService.validaCpfProdutor(this.dados.cpf)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
        }, 
        /*() => this.router.navigate(["/Login"]);
         alert("dados Corretos");
        }*/
        function (error) { return alert("Erro"); });
    };
    CadDadosProdutorComponent = __decorate([
        core_1.Component({
            selector: "cadDadosProdutor",
            providers: [dadosProdutor_service_1.DadosProdutorService],
            templateUrl: "pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.html",
            styleUrls: ["pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, dadosProdutor_service_1.DadosProdutorService])
    ], CadDadosProdutorComponent);
    return CadDadosProdutorComponent;
}());
exports.CadDadosProdutorComponent = CadDadosProdutorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRGFkb3NQcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWREYWRvc1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBNkI7QUFDN0IsNkVBQXlFO0FBQ3pFLDZGQUF5RjtBQUV6RiwrQ0FBK0M7QUFDL0MsMENBQXVDO0FBU3ZDO0lBS0UsMEJBQTBCO0lBQzFCLG1DQUFZLElBQVUsRUFBVSxNQUFjLEVBQVUsb0JBQTBDO1FBQWxFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ2hHLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELDJDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDMUQsU0FBUyxDQUNSLFVBQUMsSUFBSTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRDs7V0FFRztRQUNILFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFiLENBQWEsQ0FDekIsQ0FBQztJQUVKLENBQUM7SUF2QlUseUJBQXlCO1FBUHJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFNBQVMsRUFBRSxDQUFDLDRDQUFvQixDQUFDO1lBQ2pDLFdBQVcsRUFBQywwREFBMEQ7WUFDdEUsU0FBUyxFQUFDLENBQUMseURBQXlELENBQUM7U0FDdEUsQ0FBQzt5Q0FRa0IsV0FBSSxFQUFrQixlQUFNLEVBQWdDLDRDQUFvQjtPQU52Rix5QkFBeUIsQ0F5Qm5DO0lBQUQsZ0NBQUM7Q0FBQSxBQXpCSCxJQXlCRztBQXpCVSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7RGFkb3NQcm9kdXRvcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9kYWRvc1Byb2R1dG9yL2RhZG9zUHJvZHV0b3JcIlxyXG5pbXBvcnQge0RhZG9zUHJvZHV0b3JTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2RhZG9zUHJvZHV0b3IvZGFkb3NQcm9kdXRvci5zZXJ2aWNlXCI7XHJcblxyXG4vLyBwYXJhIHJvdGEgdmVyaWZpY2FyIGZvcm1hIHVzYWRhIHBhcmEgcm91dGVhclxyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiY2FkRGFkb3NQcm9kdXRvclwiLFxyXG4gIHByb3ZpZGVyczogW0RhZG9zUHJvZHV0b3JTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL2NhZERhZG9zUHJvZHV0b3IvY2FkRGFkb3NQcm9kdXRvci5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOltcInBhZ2VzL2NhZFByb2R1dG9yL2NhZERhZG9zUHJvZHV0b3IvY2FkRGFkb3NQcm9kdXRvci5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWREYWRvc1Byb2R1dG9yQ29tcG9uZW50IHtcclxuXHJcbiAgZGFkb3M6IERhZG9zUHJvZHV0b3I7XHJcbiAgXHJcblxyXG4gIC8vVmVyaWZpY2FyIFJvdXRlciBkaXJldG8gXHJcbiAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBkYWRvc1Byb2R1dG9yU2VydmljZTogRGFkb3NQcm9kdXRvclNlcnZpY2UpIHtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICAgIHRoaXMuZGFkb3MgPSBuZXcgRGFkb3NQcm9kdXRvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJveGltbygpe1xyXG4gICAgdGhpcy5kYWRvc1Byb2R1dG9yU2VydmljZS52YWxpZGFDcGZQcm9kdXRvcih0aGlzLmRhZG9zLmNwZilcclxuICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICB9LFxyXG4gICAgICAvKigpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9Mb2dpblwiXSk7XHJcbiAgICAgICBhbGVydChcImRhZG9zIENvcnJldG9zXCIpO1xyXG4gICAgICB9Ki9cclxuICAgICAgKGVycm9yKSA9PiBhbGVydChcIkVycm9cIilcclxuICAgICk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIH1cclxuXHJcbiJdfQ==