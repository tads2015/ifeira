"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Pagina onde é definido as rotas
var login_component_1 = require("./pages/login/login.component");
var cadastroProduto_component_1 = require("./pages/produtos/cadastroProduto.component");
var cadCpfProdutor_component_1 = require("./pages/cadProdutor/cadCpfProdutor/cadCpfProdutor.component");
var cadDadosProdutor_component_1 = require("./pages/cadProdutor/cadDadosProdutor/cadDadosProdutor.component");
var cadEnderecoProdutor_component_1 = require("./pages/cadProdutor/Endereco/cadEnderecoProdutor.component");
var cadLocalEntrega_component_1 = require("./pages/cadProdutor/cadLocalEntrega/cadLocalEntrega.component");
var locaisEntrega_component_1 = require("./pages/cadProdutor/locaisEntrega/locaisEntrega.component");
exports.routes = [
    //Path vazio para que a primeira pagina utilize LoginComponent.
    { path: "Login", component: login_component_1.LoginComponent },
    { path: "CadastroProduto", component: cadastroProduto_component_1.CadastroProdutoComponent },
    { path: "", component: cadCpfProdutor_component_1.CadCpfProdutorComponent },
    { path: "cadDadosProdutor", component: cadDadosProdutor_component_1.CadDadosProdutorComponent },
    { path: "cadEnderecoProdutor", component: cadEnderecoProdutor_component_1.CadEnderecoProdutorComponent },
    { path: "cadLocalEntrega", component: cadLocalEntrega_component_1.CadLocalEntregaComponent },
    { path: "locaisEntrega", component: locaisEntrega_component_1.LocaisEntregaComponent },
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    cadastroProduto_component_1.CadastroProdutoComponent,
    cadCpfProdutor_component_1.CadCpfProdutorComponent,
    cadDadosProdutor_component_1.CadDadosProdutorComponent,
    cadEnderecoProdutor_component_1.CadEnderecoProdutorComponent,
    cadLocalEntrega_component_1.CadLocalEntregaComponent,
    locaisEntrega_component_1.LocaisEntregaComponent,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFpQztBQUNqQyxpRUFBK0Q7QUFDL0Qsd0ZBQXNGO0FBRXRGLHdHQUFvRztBQUNwRyw4R0FBMEc7QUFDMUcsNEdBQXdHO0FBQ3hHLDJHQUF1RztBQUN2RyxxR0FBaUc7QUFHcEYsUUFBQSxNQUFNLEdBQUc7SUFDcEIsK0RBQStEO0lBQy9ELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsb0RBQXdCLEVBQUU7SUFFaEUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBQztJQUMvQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsc0RBQXlCLEVBQUM7SUFDakUsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLDREQUE0QixFQUFDO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxvREFBd0IsRUFBQztJQUMvRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGdEQUFzQixFQUFDO0NBRzVELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLGdDQUFjO0lBQ2Qsb0RBQXdCO0lBRXhCLGtEQUF1QjtJQUN2QixzREFBeUI7SUFDekIsNERBQTRCO0lBQzVCLG9EQUF3QjtJQUN4QixnREFBc0I7Q0FFdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vUGFnaW5hIG9uZGUgw6kgZGVmaW5pZG8gYXMgcm90YXNcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FkYXN0cm9Qcm9kdXRvQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvcHJvZHV0b3MvY2FkYXN0cm9Qcm9kdXRvLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHtDYWRDcGZQcm9kdXRvckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvY2FkUHJvZHV0b3IvY2FkQ3BmUHJvZHV0b3IvY2FkQ3BmUHJvZHV0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2FkRGFkb3NQcm9kdXRvckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvY2FkUHJvZHV0b3IvY2FkRGFkb3NQcm9kdXRvci9jYWREYWRvc1Byb2R1dG9yLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2NhZFByb2R1dG9yL0VuZGVyZWNvL2NhZEVuZGVyZWNvUHJvZHV0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2FkTG9jYWxFbnRyZWdhQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9jYWRQcm9kdXRvci9jYWRMb2NhbEVudHJlZ2EvY2FkTG9jYWxFbnRyZWdhLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0xvY2Fpc0VudHJlZ2FDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2NhZFByb2R1dG9yL2xvY2Fpc0VudHJlZ2EvbG9jYWlzRW50cmVnYS5jb21wb25lbnRcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIC8vUGF0aCB2YXppbyBwYXJhIHF1ZSBhIHByaW1laXJhIHBhZ2luYSB1dGlsaXplIExvZ2luQ29tcG9uZW50LlxyXG4gIHsgcGF0aDogXCJMb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcIkNhZGFzdHJvUHJvZHV0b1wiLCBjb21wb25lbnQ6IENhZGFzdHJvUHJvZHV0b0NvbXBvbmVudCB9LFxyXG5cclxuICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogQ2FkQ3BmUHJvZHV0b3JDb21wb25lbnR9LFxyXG4gIHsgcGF0aDogXCJjYWREYWRvc1Byb2R1dG9yXCIsIGNvbXBvbmVudDogQ2FkRGFkb3NQcm9kdXRvckNvbXBvbmVudH0sXHJcbiAgeyBwYXRoOiBcImNhZEVuZGVyZWNvUHJvZHV0b3JcIiwgY29tcG9uZW50OiBDYWRFbmRlcmVjb1Byb2R1dG9yQ29tcG9uZW50fSxcclxuICB7IHBhdGg6IFwiY2FkTG9jYWxFbnRyZWdhXCIsIGNvbXBvbmVudDogQ2FkTG9jYWxFbnRyZWdhQ29tcG9uZW50fSxcclxuICB7IHBhdGg6IFwibG9jYWlzRW50cmVnYVwiLCBjb21wb25lbnQ6IExvY2Fpc0VudHJlZ2FDb21wb25lbnR9LFxyXG5cclxuICBcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXHJcbiAgTG9naW5Db21wb25lbnQsXHJcbiAgQ2FkYXN0cm9Qcm9kdXRvQ29tcG9uZW50LFxyXG5cclxuICBDYWRDcGZQcm9kdXRvckNvbXBvbmVudCxcclxuICBDYWREYWRvc1Byb2R1dG9yQ29tcG9uZW50LFxyXG4gIENhZEVuZGVyZWNvUHJvZHV0b3JDb21wb25lbnQsXHJcbiAgQ2FkTG9jYWxFbnRyZWdhQ29tcG9uZW50LFxyXG4gIExvY2Fpc0VudHJlZ2FDb21wb25lbnQsXHJcblxyXG5dOyJdfQ==