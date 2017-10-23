"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(userService, page) {
        this.userService = userService;
        this.page = page;
        this.user = new user_1.User();
        page.backgroundImage = "~/images/fundo_app.jpeg";
    }
    LoginComponent.prototype.login = function () {
        this.userService.login(this.user)
            .subscribe(function (data) { return console.log(JSON.stringify(data)); }, function (err) { return console.log(err); });
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
        __metadata("design:paramtypes", [user_service_1.UserService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQUUvQiwrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBUTdEO0lBR0Usd0JBQW9CLFdBQXdCLEVBQVUsSUFBVTtRQUE1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQXlCLENBQUM7SUFDbkQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FDUixVQUFDLElBQUksSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFqQyxDQUFpQyxFQUMzQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNFLHFCQUFxQjtJQUN2QixDQUFDO0lBbEJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUlpQywwQkFBVyxFQUFnQixXQUFJO09BSHJELGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibG9naW5cIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgdXNlcjogVXNlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJ+L2ltYWdlcy9mdW5kb19hcHAuanBlZ1wiO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgIChkYXRhKSA9PiBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSksXHJcbiAgICAgIChlcnIpID0+IGNvbnNvbGUubG9nKGVycilcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjYWRhc3RyYXIoKSB7XHJcbiAgICAvLyBUT0RPOiBQcsOzeGltYSB0ZWxhXHJcbiAgfVxyXG59Il19