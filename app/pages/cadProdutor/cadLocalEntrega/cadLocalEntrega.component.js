"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var forms_1 = require("@angular/forms");
var endereco_1 = require("../../../shared/user/endereco");
var CadLocalEntregaComponent = (function () {
    function CadLocalEntregaComponent(fb, page) {
        this.fb = fb;
        this.page = page;
        this.val = '';
        this.createForm();
        this.end = new endereco_1.Endereco();
        page.backgroundImage = "res://bg_app";
    }
    CadLocalEntregaComponent.prototype.createForm = function () {
        this.endForm = this.fb.group({
            Apelido: ['Teste', forms_1.Validators.required],
        });
    };
    CadLocalEntregaComponent.prototype.proximo = function () {
        var val;
        val = this.endForm.get('Apelido').value;
        console.log(this.val);
        this.end.apelido = val;
        //console.log(JSON.stringify(this.endForm.value.Apelido));  
        console.log(JSON.stringify(this.end));
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", endereco_1.Endereco)
    ], CadLocalEntregaComponent.prototype, "end", void 0);
    CadLocalEntregaComponent = __decorate([
        core_1.Component({
            selector: "cadLocalEntrega",
            templateUrl: "pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.html",
            styleUrls: ["pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.css"],
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, page_1.Page])
    ], CadLocalEntregaComponent);
    return CadLocalEntregaComponent;
}());
exports.CadLocalEntregaComponent = CadLocalEntregaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkTG9jYWxFbnRyZWdhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhZExvY2FsRW50cmVnYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFFaEQsZ0NBQTZCO0FBRzdCLHdDQUFvRTtBQUdwRSwwREFBdUQ7QUFVdkQ7SUFNRSxrQ0FBb0IsRUFBZSxFQUFVLElBQVU7UUFBbkMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGdkQsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUlmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw2Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFDRSxJQUFJLEdBQVUsQ0FBQTtRQUNkLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLDREQUE0RDtRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQXhCRDtRQURDLFlBQUssRUFBRTtrQ0FDSixtQkFBUTt5REFBQztJQUZGLHdCQUF3QjtRQVBwQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUMsd0RBQXdEO1lBQ3BFLFNBQVMsRUFBQyxDQUFDLHVEQUF1RCxDQUFDO1NBRXBFLENBQUM7eUNBUXdCLG1CQUFXLEVBQWdCLFdBQUk7T0FONUMsd0JBQXdCLENBNEJsQztJQUFELCtCQUFDO0NBQUEsQUE1QkgsSUE0Qkc7QUE1QlUsNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQgLElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtzdHJpbmdpZnkgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvdXRpbFwiO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtEYXRhfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL3VzZXIvZGF0YVwiXHJcbmltcG9ydCB7RW5kZXJlY299IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlci9lbmRlcmVjb1wiO1xyXG5pbXBvcnQge0VuZGVyZWNvc30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvc1wiO1xyXG5pbXBvcnQge0NhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnR9IGZyb20gXCIuLi9FbmRlcmVjby9jYWRFbmRlcmVjb1Byb2R1dG9yLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJjYWRMb2NhbEVudHJlZ2FcIixcclxuICB0ZW1wbGF0ZVVybDpcInBhZ2VzL2NhZFByb2R1dG9yL2NhZExvY2FsRW50cmVnYS9jYWRMb2NhbEVudHJlZ2EuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczpbXCJwYWdlcy9jYWRQcm9kdXRvci9jYWRMb2NhbEVudHJlZ2EvY2FkTG9jYWxFbnRyZWdhLmNzc1wiXSxcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FkTG9jYWxFbnRyZWdhQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGVuZDpFbmRlcmVjbztcclxuICBlbmRGb3JtOiBGb3JtR3JvdXA7XHJcbiAgdmFsOiBTdHJpbmcgPSAnJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcGFnZTogUGFnZSkgeyAvLyA8LS0tIGluamVjdCBGb3JtQnVpbGRlclxyXG4gICBcclxuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xyXG4gICAgdGhpcy5lbmQgPSBuZXcgRW5kZXJlY28oKTtcclxuICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLmVuZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgQXBlbGlkbzogWydUZXN0ZScsVmFsaWRhdG9ycy5yZXF1aXJlZF0sIC8vIDwtLS0gdGhlIEZvcm1Db250cm9sIGNhbGxlZCBcIm5hbWVcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm94aW1vKCl7XHJcbiAgICB2YXIgdmFsOnN0cmluZ1xyXG4gICAgdmFsID0gdGhpcy5lbmRGb3JtLmdldCgnQXBlbGlkbycpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2codGhpcy52YWwpO1xyXG4gICAgdGhpcy5lbmQuYXBlbGlkbyA9IHZhbDtcclxuICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5lbmRGb3JtLnZhbHVlLkFwZWxpZG8pKTsgIFxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5lbmQpKTtcclxuICB9XHJcblxyXG4gIH1cclxuXHJcbiJdfQ==