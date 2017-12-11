"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Componente de login.
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    //Constructor starta a tela principal de login
    function LoginComponent(userService, page, router) {
        this.userService = userService;
        this.page = page;
        this.router = router;
        this.user = new user_1.User();
        page.backgroundImage = "res://bg_app";
    }
    //Executa a função de validação de usuario dentro do user.service.ts
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.userService.saveToken(data.jwt);
            _this.router.navigate(["/CadastroProduto"]);
        }, function (err) {
            console.log(err);
            alert("Usuário e/ou senha inválido.");
        });
    };
    LoginComponent.prototype.cadastrar = function () {
        // TODO: Próxima tela
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            providers: [user_service_1.UserService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, page_1.Page, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0JBQXNCO0FBQ3RCLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBRXpDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFRN0Q7SUFHRSw4Q0FBOEM7SUFFOUMsd0JBQW9CLFdBQXdCLEVBQVUsSUFBVSxFQUFVLE1BQWM7UUFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN0RixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVELG9FQUFvRTtJQUNwRSw4QkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FDUixVQUFDLElBQUk7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNFLHFCQUFxQjtJQUN2QixDQUFDO0lBNUJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQU1pQywwQkFBVyxFQUFnQixXQUFJLEVBQWtCLGVBQU07T0FMN0UsY0FBYyxDQTZCMUI7SUFBRCxxQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnRlIGRlIGxvZ2luLlxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibG9naW5cIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgLy9kZWNsYXJhIG9iamV0byB1c2VyLlxyXG4gIHVzZXI6IFVzZXI7XHJcbiAgLy9Db25zdHJ1Y3RvciBzdGFydGEgYSB0ZWxhIHByaW5jaXBhbCBkZSBsb2dpblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgcGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2FwcFwiO1xyXG4gIH1cclxuICBcclxuICAvL0V4ZWN1dGEgYSBmdW7Dp8OjbyBkZSB2YWxpZGHDp8OjbyBkZSB1c3VhcmlvIGRlbnRybyBkbyB1c2VyLnNlcnZpY2UudHNcclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5zYXZlVG9rZW4oZGF0YS5qd3QpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9DYWRhc3Ryb1Byb2R1dG9cIl0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBhbGVydChcIlVzdcOhcmlvIGUvb3Ugc2VuaGEgaW52w6FsaWRvLlwiKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNhZGFzdHJhcigpIHtcclxuICAgIC8vIFRPRE86IFByw7N4aW1hIHRlbGFcclxuICB9XHJcbn0iXX0=