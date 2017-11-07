"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Componente de cadastro.
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var page_1 = require("ui/page");
var UsuarioComponent = (function () {
    //Constructor starta a tela principal de login
    function UsuarioComponent(userService, page) {
        this.userService = userService;
        this.page = page;
        this.user = new user_1.User();
        page.backgroundImage = "~/images/fundo_app.jpeg";
    }
    UsuarioComponent = __decorate([
        core_1.Component({
            selector: "cadastro",
            providers: [user_service_1.UserService],
            templateUrl: "pages/usuario/usuario.html",
            styleUrls: ["pages/usuario/usuario.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, page_1.Page])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUF5QjtBQUN6QixzQ0FBMEM7QUFDMUMsK0NBQThDO0FBQzlDLCtEQUE2RDtBQUM3RCxnQ0FBK0I7QUFRL0I7SUFHSSw4Q0FBOEM7SUFDOUMsMEJBQW9CLFdBQXdCLEVBQVUsSUFBVTtRQUE1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQXlCLENBQUM7SUFDbkQsQ0FBQztJQVBRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBS21DLDBCQUFXLEVBQWdCLFdBQUk7T0FKdkQsZ0JBQWdCLENBUTVCO0lBQUQsdUJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvL0NvbXBvbmVudGUgZGUgY2FkYXN0cm8uXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRhc3Ryb1wiLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcclxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy91c3VhcmlvL3VzdWFyaW8uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdXN1YXJpby91c3VhcmlvLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXN1YXJpb0NvbXBvbmVudCB7XHJcbiAgICAvL2RlY2xhcmEgb2JqZXRvIHVzZXIuXHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgLy9Db25zdHJ1Y3RvciBzdGFydGEgYSB0ZWxhIHByaW5jaXBhbCBkZSBsb2dpblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwifi9pbWFnZXMvZnVuZG9fYXBwLmpwZWdcIjtcclxuICAgIH1cclxufSJdfQ==