"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var userS_1 = require("../../../shared/userS/userS");
var LocaisEntregaComponent = (function () {
    function LocaisEntregaComponent(page) {
        this.ListaApelido = [];
        page.backgroundImage = "res://bg_app";
    }
    LocaisEntregaComponent.prototype.ngOnInit = function () {
        this.ListaApelido = userS_1.UsuarioS.LEntrega;
    };
    /*
      pop(){
        UsuarioS.LEntrega.pop();
      }
      shift(){
        UsuarioS.LEntrega.shift();
      }*/
    LocaisEntregaComponent.prototype.Onclick = function (event) {
        userS_1.UsuarioS.LEntrega.splice(event.index, 1);
        //this.ListaApelido = UsuarioS.LEntrega;
    };
    LocaisEntregaComponent = __decorate([
        core_1.Component({
            selector: "locaisEntrega",
            templateUrl: "pages/cadProdutor/locaisEntrega/locaisEntrega.html",
            styleUrls: ["pages/cadProdutor/locaisEntrega/locaisEntrega.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], LocaisEntregaComponent);
    return LocaisEntregaComponent;
}());
exports.LocaisEntregaComponent = LocaisEntregaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWlzRW50cmVnYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhaXNFbnRyZWdhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnQ0FBNkI7QUFHN0IscURBQW9EO0FBUXBEO0lBSUUsZ0NBQVksSUFBVTtRQUZ0QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3hDLENBQUM7SUFDSDs7Ozs7O1NBTUs7SUFDSCx3Q0FBTyxHQUFQLFVBQVEsS0FBSztRQUNYLGdCQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLHdDQUF3QztJQUMxQyxDQUFDO0lBckJVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFDLG9EQUFvRDtZQUNoRSxTQUFTLEVBQUMsQ0FBQyxtREFBbUQsQ0FBQztTQUNoRSxDQUFDO3lDQU1rQixXQUFJO09BSlgsc0JBQXNCLENBc0JsQztJQUFELDZCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtFbmRlcmVjb30gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC91c2VyL2VuZGVyZWNvXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvY29uZmlnXCI7XHJcbmltcG9ydCB7VXN1YXJpb1N9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdXNlclMvdXNlclNcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibG9jYWlzRW50cmVnYVwiLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvY2FkUHJvZHV0b3IvbG9jYWlzRW50cmVnYS9sb2NhaXNFbnRyZWdhLmh0bWxcIixcclxuICBzdHlsZVVybHM6W1wicGFnZXMvY2FkUHJvZHV0b3IvbG9jYWlzRW50cmVnYS9sb2NhaXNFbnRyZWdhLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2Fpc0VudHJlZ2FDb21wb25lbnQge1xyXG4gIFxyXG4gIExpc3RhQXBlbGlkbzogQXJyYXk8T2JqZWN0PiA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYWdlOiBQYWdlKSB7XHJcbiAgICBwYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfYXBwXCI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuTGlzdGFBcGVsaWRvID0gVXN1YXJpb1MuTEVudHJlZ2E7XHJcbiAgfVxyXG4vKlxyXG4gIHBvcCgpe1xyXG4gICAgVXN1YXJpb1MuTEVudHJlZ2EucG9wKCk7XHJcbiAgfVxyXG4gIHNoaWZ0KCl7XHJcbiAgICBVc3VhcmlvUy5MRW50cmVnYS5zaGlmdCgpO1xyXG4gIH0qL1xyXG4gIE9uY2xpY2soZXZlbnQpe1xyXG4gICAgVXN1YXJpb1MuTEVudHJlZ2Euc3BsaWNlKGV2ZW50LmluZGV4LDEpO1xyXG4gICAgLy90aGlzLkxpc3RhQXBlbGlkbyA9IFVzdWFyaW9TLkxFbnRyZWdhO1xyXG4gIH1cclxufVxyXG4iXX0=