"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var dadosProdutor_1 = require("../../../shared/dadosProdutor/dadosProdutor");
var dadosProdutor_service_1 = require("../../../shared/dadosProdutor/dadosProdutor.service");
// para rota verificar forma usada para routear
var router_1 = require("@angular/router");
var userS_1 = require("../../../shared/userS/userS");
var CadDadosProdutorComponent = (function () {
    //Verificar Router direto 
    function CadDadosProdutorComponent(page, router, dadosProdutorService) {
        this.router = router;
        this.dadosProdutorService = dadosProdutorService;
        //"n" usado na mascaraCPF
        this.n = 0;
        page.backgroundImage = "res://bg_app";
        this.dados = new dadosProdutor_1.DadosProdutor();
        this.senha = "1234";
    }
    CadDadosProdutorComponent.prototype.mascaraCPF = function () {
        // assim que o cpf digitado atingir 11 digitos entra a mascara
        if (this.dados.cpf.length == 11 && this.n == 0) {
            this.dados.cpf = this.dados.cpf.substr(0, 3)
                + "." + this.dados.cpf.substr(3, 3)
                + "." + this.dados.cpf.substr(6, 3)
                + "-" + this.dados.cpf.substr(9, 2);
            this.n = 1;
            console.log("Produtor: " + JSON.stringify(this.dados.cpf));
        }
        if (this.dados.cpf.length < 12 && this.n == 1) {
            this.dados.cpf = "";
            this.n = 0;
        }
    };
    // não esta se conectando com back
    CadDadosProdutorComponent.prototype.proximo = function () {
        var _this = this;
        // se senhas digitadas estritamente iguais pode seguir em frente com botão proximo porem conexão com back deve estar OK
        if (this.dados.senha === this.senha) {
            userS_1.UsuarioS.dp = this.dados;
            this.router.navigate(["/cadEnderecoProdutor"]);
            userS_1.UsuarioS.DadosProdutor.push(this.dados);
            // ver json
            console.log("Produtor: " + JSON.stringify(userS_1.UsuarioS.DadosProdutor));
            this.dadosProdutorService.validaCpfProdutor(this.dados.cpf)
                .subscribe(function (data) {
                console.log("subscribe: " + data.mensagem);
                if (data.mensagem == "false") {
                    alert("O cadastro não pode ser realizado! \n\nEste CPF não consta na base de produtores orgânicos.");
                    //()=> this.router.navigate(["/"])
                }
                else {
                    //()=> this.router.navigate(["/cadEnderecoProdutor"])
                }
            }, function (error) { return alert("Erro :" + _this.dados.cpf + error); });
        }
        else {
            // exibe alerta caso senhas diferentes
            alert("Confirme corretamente sua senha !");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRGFkb3NQcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWREYWRvc1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBNkI7QUFDN0IsNkVBQXlFO0FBQ3pFLDZGQUF5RjtBQUV6RiwrQ0FBK0M7QUFDL0MsMENBQXVDO0FBRXZDLHFEQUFxRDtBQVNyRDtJQVFFLDBCQUEwQjtJQUMxQixtQ0FBWSxJQUFVLEVBQVUsTUFBYyxFQUFVLG9CQUEwQztRQUFsRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUxsRyx5QkFBeUI7UUFDekIsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUtKLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUVELDhDQUFVLEdBQVY7UUFDRSw4REFBOEQ7UUFDOUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7a0JBQzFCLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztrQkFDOUIsR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2tCQUM5QixHQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFBO1lBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFDRCxrQ0FBa0M7SUFDbEMsMkNBQU8sR0FBUDtRQUFBLGlCQTBCQztRQXpCQyx1SEFBdUg7UUFDdkgsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDbEMsZ0JBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQTtZQUM5QyxnQkFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLFdBQVc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUVuRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQzFELFNBQVMsQ0FDUixVQUFDLElBQUk7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFFLE9BQU8sQ0FBQyxDQUFBLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDO29CQUNyRyxrQ0FBa0M7Z0JBQ3BDLENBQUM7Z0JBQUEsSUFBSSxDQUFBLENBQUM7b0JBQ0oscURBQXFEO2dCQUN2RCxDQUFDO1lBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FDcEQsQ0FBQztRQUNKLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNFLHNDQUFzQztZQUN0QyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQXpEVSx5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsNENBQW9CLENBQUM7WUFDakMsV0FBVyxFQUFDLDBEQUEwRDtZQUN0RSxTQUFTLEVBQUMsQ0FBQyx5REFBeUQsQ0FBQztTQUN0RSxDQUFDO3lDQVdrQixXQUFJLEVBQWtCLGVBQU0sRUFBZ0MsNENBQW9CO09BVHZGLHlCQUF5QixDQTBEckM7SUFBRCxnQ0FBQztDQUFBLEFBMURELElBMERDO0FBMURZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtEYWRvc1Byb2R1dG9yfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2RhZG9zUHJvZHV0b3IvZGFkb3NQcm9kdXRvclwiXHJcbmltcG9ydCB7RGFkb3NQcm9kdXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGFkb3NQcm9kdXRvci9kYWRvc1Byb2R1dG9yLnNlcnZpY2VcIjtcclxuXHJcbi8vIHBhcmEgcm90YSB2ZXJpZmljYXIgZm9ybWEgdXNhZGEgcGFyYSByb3V0ZWFyXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1VzdWFyaW9TfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXJTL3VzZXJTXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWREYWRvc1Byb2R1dG9yXCIsXHJcbiAgcHJvdmlkZXJzOiBbRGFkb3NQcm9kdXRvclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvY2FkUHJvZHV0b3IvY2FkRGFkb3NQcm9kdXRvci9jYWREYWRvc1Byb2R1dG9yLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvY2FkUHJvZHV0b3IvY2FkRGFkb3NQcm9kdXRvci9jYWREYWRvc1Byb2R1dG9yLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZERhZG9zUHJvZHV0b3JDb21wb25lbnQge1xyXG5cclxuICBkYWRvczogRGFkb3NQcm9kdXRvcjtcclxuICBzZW5oYTogU3RyaW5nO1xyXG4gIC8vXCJuXCIgdXNhZG8gbmEgbWFzY2FyYUNQRlxyXG4gIG4gPSAwO1xyXG4gIFxyXG5cclxuICAvL1ZlcmlmaWNhciBSb3V0ZXIgZGlyZXRvIFxyXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGFkb3NQcm9kdXRvclNlcnZpY2U6IERhZG9zUHJvZHV0b3JTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgICB0aGlzLmRhZG9zID0gbmV3IERhZG9zUHJvZHV0b3IoKTtcclxuICAgIHRoaXMuc2VuaGEgPSBcIjEyMzRcIjtcclxuICB9IFxyXG5cclxuICBtYXNjYXJhQ1BGKCl7XHJcbiAgICAvLyBhc3NpbSBxdWUgbyBjcGYgZGlnaXRhZG8gYXRpbmdpciAxMSBkaWdpdG9zIGVudHJhIGEgbWFzY2FyYVxyXG4gICAgaWYodGhpcy5kYWRvcy5jcGYubGVuZ3RoID09IDExICYmIHRoaXMubiA9PSAwKXtcclxuICAgIHRoaXMuZGFkb3MuY3BmID0gdGhpcy5kYWRvcy5jcGYuc3Vic3RyKDAsMylcclxuICAgICAgICAgICAgICAgICAgICArXCIuXCIrdGhpcy5kYWRvcy5jcGYuc3Vic3RyKDMsMylcclxuICAgICAgICAgICAgICAgICAgICArXCIuXCIrdGhpcy5kYWRvcy5jcGYuc3Vic3RyKDYsMylcclxuICAgICAgICAgICAgICAgICAgICArXCItXCIrdGhpcy5kYWRvcy5jcGYuc3Vic3RyKDksMik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uID0xO1xyXG4gICAgY29uc29sZS5sb2coXCJQcm9kdXRvcjogXCIrSlNPTi5zdHJpbmdpZnkodGhpcy5kYWRvcy5jcGYpKTtcclxuICAgIH0gXHJcbiAgICBpZih0aGlzLmRhZG9zLmNwZi5sZW5ndGg8IDEyICYmIHRoaXMubiA9PSAxKXtcclxuICAgICAgdGhpcy5kYWRvcy5jcGYgPSBcIlwiXHJcbiAgICAgICB0aGlzLm49MDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gbsOjbyBlc3RhIHNlIGNvbmVjdGFuZG8gY29tIGJhY2tcclxuICBwcm94aW1vKCl7XHJcbiAgICAvLyBzZSBzZW5oYXMgZGlnaXRhZGFzIGVzdHJpdGFtZW50ZSBpZ3VhaXMgcG9kZSBzZWd1aXIgZW0gZnJlbnRlIGNvbSBib3TDo28gcHJveGltbyBwb3JlbSBjb25leMOjbyBjb20gYmFjayBkZXZlIGVzdGFyIE9LXHJcbiAgICBpZih0aGlzLmRhZG9zLnNlbmhhID09PSB0aGlzLnNlbmhhKXtcclxuICAgICAgVXN1YXJpb1MuZHAgPSB0aGlzLmRhZG9zO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2FkRW5kZXJlY29Qcm9kdXRvclwiXSlcclxuICAgICAgVXN1YXJpb1MuRGFkb3NQcm9kdXRvci5wdXNoKHRoaXMuZGFkb3MpO1xyXG4gICAgICAgIC8vIHZlciBqc29uXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9kdXRvcjogXCIrSlNPTi5zdHJpbmdpZnkoVXN1YXJpb1MuRGFkb3NQcm9kdXRvcikpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kYWRvc1Byb2R1dG9yU2VydmljZS52YWxpZGFDcGZQcm9kdXRvcih0aGlzLmRhZG9zLmNwZilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdWJzY3JpYmU6IFwiKyBkYXRhLm1lbnNhZ2VtKTtcclxuICAgICAgICAgIGlmKGRhdGEubWVuc2FnZW09PVwiZmFsc2VcIil7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiTyBjYWRhc3RybyBuw6NvIHBvZGUgc2VyIHJlYWxpemFkbyEgXFxuXFxuRXN0ZSBDUEYgbsOjbyBjb25zdGEgbmEgYmFzZSBkZSBwcm9kdXRvcmVzIG9yZ8Oibmljb3MuXCIpO1xyXG4gICAgICAgICAgICAvLygpPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLygpPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhZEVuZGVyZWNvUHJvZHV0b3JcIl0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiRXJybyA6XCIgKyB0aGlzLmRhZG9zLmNwZiArIGVycm9yKVxyXG4gICAgICApO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGV4aWJlIGFsZXJ0YSBjYXNvIHNlbmhhcyBkaWZlcmVudGVzXHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQ29uZmlybWUgY29ycmV0YW1lbnRlIHN1YSBzZW5oYSAhXCIpO1xyXG4gICAgfSBcclxuICB9XHJcbn1cclxuIl19