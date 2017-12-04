"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
//import {DadosProdutor} from "../../../shared/dadosProdutor/dadosProdutor"
//import {DadosProdutorService} from "../../../shared/dadosProdutor/dadosProdutor.service";
var router_1 = require("@angular/router");
var cadProdutosComponent = (function () {
    function cadProdutosComponent(page, router) {
        this.router = router;
        page.backgroundImage = "res://bg_app";
    }
    cadProdutosComponent.prototype.concluir = function () {
    };
    cadProdutosComponent = __decorate([
        core_1.Component({
            selector: "cadProdutos",
            //providers: [DadosProdutorService],
            templateUrl: "pages/cadProdutor/cadProdutos/cadProdutos.html",
            styleUrls: ["pages/cadProdutor/cadProdutos/cadProdutos.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], cadProdutosComponent);
    return cadProdutosComponent;
}());
exports.cadProdutosComponent = cadProdutosComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FkUHJvZHV0b3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FkUHJvZHV0b3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwyRUFBMkU7QUFDM0UsMkZBQTJGO0FBRTNGLDBDQUF5QztBQVN6QztJQUVJLDhCQUFZLElBQVUsRUFBVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtJQUVBLENBQUM7SUFSUSxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLG9DQUFvQztZQUNwQyxXQUFXLEVBQUUsZ0RBQWdEO1lBQzdELFNBQVMsRUFBRSxDQUFDLCtDQUErQyxDQUFDO1NBQy9ELENBQUM7eUNBSW9CLFdBQUksRUFBa0IsZUFBTTtPQUZyQyxvQkFBb0IsQ0FTaEM7SUFBRCwyQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG4vL2ltcG9ydCB7RGFkb3NQcm9kdXRvcn0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9kYWRvc1Byb2R1dG9yL2RhZG9zUHJvZHV0b3JcIlxyXG4vL2ltcG9ydCB7RGFkb3NQcm9kdXRvclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGFkb3NQcm9kdXRvci9kYWRvc1Byb2R1dG9yLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY2FkUHJvZHV0b3NcIixcclxuICAgIC8vcHJvdmlkZXJzOiBbRGFkb3NQcm9kdXRvclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvY2FkUHJvZHV0b3IvY2FkUHJvZHV0b3MvY2FkUHJvZHV0b3MuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9jYWRQcm9kdXRvci9jYWRQcm9kdXRvcy9jYWRQcm9kdXRvcy5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBjYWRQcm9kdXRvc0NvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJyZXM6Ly9iZ19hcHBcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25jbHVpcigpe1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuIl19