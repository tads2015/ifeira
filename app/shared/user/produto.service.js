"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var Sqlite = require("nativescript-sqlite");
var config_1 = require("../config");
var ProdutoService = (function () {
    function ProdutoService(http) {
        var _this = this;
        this.http = http;
        (new Sqlite("ifeira.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS produto (id INTEGER PRIMARY KEY AUTOINCREMENT, grupo_id INTEGER, descricao TEXT, validate DATE, numero_porcoes FLOAT, peso FLOAT, valor FLOAT, infoadd VARCHAR)").then(function (id) {
                _this.database = db;
                console.log("LEGAL");
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    ProdutoService.prototype.cadastroProdutos = function (produto) {
        this.saveProdutos(produto);
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "application/json");
        return this.http.post(config_1.Config.apiUrl + "/api/produtos", JSON.stringify(produto), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log("Entrou");
        })
            .catch(this.handleErrors);
    };
    //Tratamento de erros.
    ProdutoService.prototype.handleErrors = function (error) {
        console.log("erro");
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ProdutoService.prototype.saveProdutos = function (produtos) {
        console.log(produtos);
        this.database.execSQL("INSERT INTO produto (grupo_id, descricao, validade, numero_porcoes, peso, valor, infoadd) VALUES (?,?,?,?,?,?,?,?)", [produtos.grupo_id, produtos.descricao, produtos.validade, produtos.numero_porcoes, produtos.peso, produtos.valor, produtos.infoadd]).then(function (id) {
            console.log("INSERT RESULT", id);
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    ProdutoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProdutoService);
    return ProdutoService;
}());
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHV0by5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHV0by5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUUscUJBQXFCLENBQUUsQ0FBQztBQUc5QyxvQ0FBbUM7QUFHbkM7SUFJSSx3QkFBb0IsSUFBVTtRQUE5QixpQkFXRztRQVhpQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsNExBQTRMLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUM1TSxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUU1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLGVBQWUsRUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFDdkIsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQ25CO2FBQ0EsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxzQkFBc0I7SUFDdEIscUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLFFBQWlCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsb0hBQW9ILEVBQ3pJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUM1SSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBbERNLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FLaUIsV0FBSTtPQUpyQixjQUFjLENBbUQxQjtJQUFELHFCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbnZhciBTcWxpdGUgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIiApO1xyXG5cclxuaW1wb3J0IHsgUHJvZHV0byB9IGZyb20gXCIuLi9wcm9kdXRvcy9wcm9kdXRvXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2R1dG9TZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7XHJcbiAgICAgICAgKG5ldyBTcWxpdGUoXCJpZmVpcmEuZGJcIikpLnRoZW4oZGIgPT4ge1xyXG4gICAgICAgICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcHJvZHV0byAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBncnVwb19pZCBJTlRFR0VSLCBkZXNjcmljYW8gVEVYVCwgdmFsaWRhdGUgREFURSwgbnVtZXJvX3BvcmNvZXMgRkxPQVQsIHBlc28gRkxPQVQsIHZhbG9yIEZMT0FULCBpbmZvYWRkIFZBUkNIQVIpXCIpLnRoZW4oaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMRUdBTFwiKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhZGFzdHJvUHJvZHV0b3MocHJvZHV0bzogUHJvZHV0bykge1xyXG4gICAgICAgIHRoaXMuc2F2ZVByb2R1dG9zKHByb2R1dG8pO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIFxyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICBDb25maWcuYXBpVXJsICsgXCIvYXBpL3Byb2R1dG9zXCIsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShwcm9kdXRvKSxcclxuICAgICAgICAgIHtoZWFkZXJzOiBoZWFkZXJzfVxyXG4gICAgICAgIClcclxuICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVudHJvdVwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgICAgLy9UcmF0YW1lbnRvIGRlIGVycm9zLlxyXG4gICAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHNhdmVQcm9kdXRvcyhwcm9kdXRvczogUHJvZHV0byl7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHV0b3MpO1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcIklOU0VSVCBJTlRPIHByb2R1dG8gKGdydXBvX2lkLCBkZXNjcmljYW8sIHZhbGlkYWRlLCBudW1lcm9fcG9yY29lcywgcGVzbywgdmFsb3IsIGluZm9hZGQpIFZBTFVFUyAoPyw/LD8sPyw/LD8sPyw/KVwiLFxyXG4gICAgICAgICBbcHJvZHV0b3MuZ3J1cG9faWQsIHByb2R1dG9zLmRlc2NyaWNhbywgcHJvZHV0b3MudmFsaWRhZGUsIHByb2R1dG9zLm51bWVyb19wb3Jjb2VzLCBwcm9kdXRvcy5wZXNvLCBwcm9kdXRvcy52YWxvciwgcHJvZHV0b3MuaW5mb2FkZF0pLnRoZW4oaWQgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgICAgfVxyXG59Il19