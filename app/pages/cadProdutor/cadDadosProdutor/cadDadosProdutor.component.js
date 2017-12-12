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
        this.senha = "senha";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkRGFkb3NQcm9kdXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWREYWRvc1Byb2R1dG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBNkI7QUFDN0IsNkVBQXlFO0FBQ3pFLDZGQUF5RjtBQUV6RiwrQ0FBK0M7QUFDL0MsMENBQXVDO0FBRXZDLHFEQUFxRDtBQVNyRDtJQVFFLDBCQUEwQjtJQUMxQixtQ0FBWSxJQUFVLEVBQVUsTUFBYyxFQUFVLG9CQUEwQztRQUFsRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUxsRyx5QkFBeUI7UUFDekIsTUFBQyxHQUFHLENBQUMsQ0FBQztRQUtKLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDdkIsQ0FBQztJQUVELDhDQUFVLEdBQVY7UUFDRSw4REFBOEQ7UUFDOUQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7a0JBQzFCLEdBQUcsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztrQkFDOUIsR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2tCQUM5QixHQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFFLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFBO1lBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFDRCxrQ0FBa0M7SUFDbEMsMkNBQU8sR0FBUDtRQUFBLGlCQTBCQztRQXpCQyx1SEFBdUg7UUFDdkgsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDbEMsZ0JBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQTtZQUM5QyxnQkFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLFdBQVc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUVuRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQzFELFNBQVMsQ0FDUixVQUFDLElBQUk7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFFLE9BQU8sQ0FBQyxDQUFBLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDO29CQUNyRyxrQ0FBa0M7Z0JBQ3BDLENBQUM7Z0JBQUEsSUFBSSxDQUFBLENBQUM7b0JBQ0oscURBQXFEO2dCQUN2RCxDQUFDO1lBQ0gsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FDcEQsQ0FBQztRQUNKLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNFLHNDQUFzQztZQUN0QyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQXpEVSx5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFLENBQUMsNENBQW9CLENBQUM7WUFDakMsV0FBVyxFQUFDLDBEQUEwRDtZQUN0RSxTQUFTLEVBQUMsQ0FBQyx5REFBeUQsQ0FBQztTQUN0RSxDQUFDO3lDQVdrQixXQUFJLEVBQWtCLGVBQU0sRUFBZ0MsNENBQW9CO09BVHZGLHlCQUF5QixDQTBEckM7SUFBRCxnQ0FBQztDQUFBLEFBMURELElBMERDO0FBMURZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtEYWRvc1Byb2R1dG9yfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2RhZG9zUHJvZHV0b3IvZGFkb3NQcm9kdXRvclwiXHJcbmltcG9ydCB7RGFkb3NQcm9kdXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGFkb3NQcm9kdXRvci9kYWRvc1Byb2R1dG9yLnNlcnZpY2VcIjtcclxuXHJcbi8vIHBhcmEgcm90YSB2ZXJpZmljYXIgZm9ybWEgdXNhZGEgcGFyYSByb3V0ZWFyXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1VzdWFyaW9TfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXJTL3VzZXJTXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWREYWRvc1Byb2R1dG9yXCIsXHJcbiAgcHJvdmlkZXJzOiBbRGFkb3NQcm9kdXRvclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvY2FkUHJvZHV0b3IvY2FkRGFkb3NQcm9kdXRvci9jYWREYWRvc1Byb2R1dG9yLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvY2FkUHJvZHV0b3IvY2FkRGFkb3NQcm9kdXRvci9jYWREYWRvc1Byb2R1dG9yLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhZERhZG9zUHJvZHV0b3JDb21wb25lbnQge1xyXG5cclxuICBkYWRvczogRGFkb3NQcm9kdXRvcjtcclxuICBzZW5oYTogU3RyaW5nO1xyXG4gIC8vXCJuXCIgdXNhZG8gbmEgbWFzY2FyYUNQRlxyXG4gIG4gPSAwO1xyXG4gIFxyXG5cclxuICAvL1ZlcmlmaWNhciBSb3V0ZXIgZGlyZXRvIFxyXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGFkb3NQcm9kdXRvclNlcnZpY2U6IERhZG9zUHJvZHV0b3JTZXJ2aWNlKSB7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgICB0aGlzLmRhZG9zID0gbmV3IERhZG9zUHJvZHV0b3IoKTtcclxuICAgIHRoaXMuc2VuaGEgPSBcInNlbmhhXCI7XHJcbiAgfSBcclxuXHJcbiAgbWFzY2FyYUNQRigpe1xyXG4gICAgLy8gYXNzaW0gcXVlIG8gY3BmIGRpZ2l0YWRvIGF0aW5naXIgMTEgZGlnaXRvcyBlbnRyYSBhIG1hc2NhcmFcclxuICAgIGlmKHRoaXMuZGFkb3MuY3BmLmxlbmd0aCA9PSAxMSAmJiB0aGlzLm4gPT0gMCl7XHJcbiAgICB0aGlzLmRhZG9zLmNwZiA9IHRoaXMuZGFkb3MuY3BmLnN1YnN0cigwLDMpXHJcbiAgICAgICAgICAgICAgICAgICAgK1wiLlwiK3RoaXMuZGFkb3MuY3BmLnN1YnN0cigzLDMpXHJcbiAgICAgICAgICAgICAgICAgICAgK1wiLlwiK3RoaXMuZGFkb3MuY3BmLnN1YnN0cig2LDMpXHJcbiAgICAgICAgICAgICAgICAgICAgK1wiLVwiK3RoaXMuZGFkb3MuY3BmLnN1YnN0cig5LDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubiA9MTtcclxuICAgIGNvbnNvbGUubG9nKFwiUHJvZHV0b3I6IFwiK0pTT04uc3RyaW5naWZ5KHRoaXMuZGFkb3MuY3BmKSk7XHJcbiAgICB9IFxyXG4gICAgaWYodGhpcy5kYWRvcy5jcGYubGVuZ3RoPCAxMiAmJiB0aGlzLm4gPT0gMSl7XHJcbiAgICAgIHRoaXMuZGFkb3MuY3BmID0gXCJcIlxyXG4gICAgICAgdGhpcy5uPTA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIG7Do28gZXN0YSBzZSBjb25lY3RhbmRvIGNvbSBiYWNrXHJcbiAgcHJveGltbygpe1xyXG4gICAgLy8gc2Ugc2VuaGFzIGRpZ2l0YWRhcyBlc3RyaXRhbWVudGUgaWd1YWlzIHBvZGUgc2VndWlyIGVtIGZyZW50ZSBjb20gYm90w6NvIHByb3hpbW8gcG9yZW0gY29uZXjDo28gY29tIGJhY2sgZGV2ZSBlc3RhciBPS1xyXG4gICAgaWYodGhpcy5kYWRvcy5zZW5oYSA9PT0gdGhpcy5zZW5oYSl7XHJcbiAgICAgIFVzdWFyaW9TLmRwID0gdGhpcy5kYWRvcztcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhZEVuZGVyZWNvUHJvZHV0b3JcIl0pXHJcbiAgICAgIFVzdWFyaW9TLkRhZG9zUHJvZHV0b3IucHVzaCh0aGlzLmRhZG9zKTtcclxuICAgICAgICAvLyB2ZXIganNvblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHV0b3I6IFwiK0pTT04uc3RyaW5naWZ5KFVzdWFyaW9TLkRhZG9zUHJvZHV0b3IpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZGFkb3NQcm9kdXRvclNlcnZpY2UudmFsaWRhQ3BmUHJvZHV0b3IodGhpcy5kYWRvcy5jcGYpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3Vic2NyaWJlOiBcIisgZGF0YS5tZW5zYWdlbSk7XHJcbiAgICAgICAgICBpZihkYXRhLm1lbnNhZ2VtPT1cImZhbHNlXCIpe1xyXG4gICAgICAgICAgICBhbGVydChcIk8gY2FkYXN0cm8gbsOjbyBwb2RlIHNlciByZWFsaXphZG8hIFxcblxcbkVzdGUgQ1BGIG7Do28gY29uc3RhIG5hIGJhc2UgZGUgcHJvZHV0b3JlcyBvcmfDom5pY29zLlwiKTtcclxuICAgICAgICAgICAgLy8oKT0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pXHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8oKT0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jYWRFbmRlcmVjb1Byb2R1dG9yXCJdKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiBhbGVydChcIkVycm8gOlwiICsgdGhpcy5kYWRvcy5jcGYgKyBlcnJvcilcclxuICAgICAgKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleGliZSBhbGVydGEgY2FzbyBzZW5oYXMgZGlmZXJlbnRlc1xyXG4gICAgICAgICAgICBhbGVydChcIkNvbmZpcm1lIGNvcnJldGFtZW50ZSBzdWEgc2VuaGEgIVwiKTtcclxuICAgIH0gXHJcbiAgfVxyXG59XHJcbiJdfQ==