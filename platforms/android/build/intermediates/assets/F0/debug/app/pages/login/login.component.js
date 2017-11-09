"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(userService, page, router) {
        this.userService = userService;
        this.page = page;
        this.router = router;
        this.user = new user_1.User();
        page.backgroundImage = "res://bg_app";
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFFekMsK0NBQThDO0FBQzlDLCtEQUE2RDtBQVE3RDtJQUdFLHdCQUFvQixXQUF3QixFQUFVLElBQVUsRUFBVSxNQUFjO1FBQXBFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDdEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FDUixVQUFDLElBQUk7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUNELFVBQUMsR0FBRztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNFLHFCQUFxQjtJQUN2QixDQUFDO0lBekJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUlpQywwQkFBVyxFQUFnQixXQUFJLEVBQWtCLGVBQU07T0FIN0UsY0FBYyxDQTBCMUI7SUFBRCxxQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIHVzZXI6IFVzZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfVxyXG5cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgLnN1YnNjcmliZShcclxuICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5zYXZlVG9rZW4oZGF0YS5qd3QpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9DYWRhc3Ryb1Byb2R1dG9cIl0pO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBhbGVydChcIlVzdcOhcmlvIGUvb3Ugc2VuaGEgaW52w6FsaWRvLlwiKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNhZGFzdHJhcigpIHtcclxuICAgIC8vIFRPRE86IFByw7N4aW1hIHRlbGFcclxuICB9XHJcbn0iXX0=