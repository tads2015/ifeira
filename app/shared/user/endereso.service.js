"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Servisso para conexão com back-ending.
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var Sqlite = require("nativescript-sqlite");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        (new Sqlite("ifeira.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS endereco (id INTEGER PRIMARY KEY AUTOINCREMENT, )").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    //Login envia em jason o usuario e recebe a resposta em jason do back-ending
    UserService.prototype.login = function (endereco) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "endereco/cadLocalEntrega", JSON.stringify(endereco), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log("Entrou");
        })
            .catch(this.handleErrors);
    };
    //Tratamento de erros.
    UserService.prototype.handleErrors = function (error) {
        console.log("erro");
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kZXJlc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZGVyZXNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUUscUJBQXFCLENBQUUsQ0FBQztBQUc5QyxvQ0FBbUM7QUFHbkM7SUFJRSxxQkFBb0IsSUFBVTtRQUE5QixpQkFVQztRQVZtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEVBQThFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUM5RixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsNEVBQTRFO0lBQzVFLDJCQUFLLEdBQUwsVUFBTSxRQUFrQjtRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLDBCQUEwQixFQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxFQUN4QixFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkI7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELHNCQUFzQjtJQUN0QixrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFyQ1UsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUtlLFdBQUk7T0FKbkIsV0FBVyxDQWdEdkI7SUFBRCxrQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLy9TZXJ2aXNzbyBwYXJhIGNvbmV4w6NvIGNvbSBiYWNrLWVuZGluZy5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG52YXIgU3FsaXRlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIgKTtcclxuXHJcbmltcG9ydCB7IEVuZGVyZWNvIH0gZnJvbSBcIi4vZW5kZXJlY29cIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcclxuICAgIChuZXcgU3FsaXRlKFwiaWZlaXJhLmRiXCIpKS50aGVuKGRiID0+IHtcclxuICAgICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgZW5kZXJlY28gKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgKVwiKS50aGVuKGlkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9Mb2dpbiBlbnZpYSBlbSBqYXNvbiBvIHVzdWFyaW8gZSByZWNlYmUgYSByZXNwb3N0YSBlbSBqYXNvbiBkbyBiYWNrLWVuZGluZ1xyXG4gIGxvZ2luKGVuZGVyZWNvOiBFbmRlcmVjbykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcImVuZGVyZWNvL2NhZExvY2FsRW50cmVnYVwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeShlbmRlcmVjbyksXHJcbiAgICAgIHtoZWFkZXJzOiBoZWFkZXJzfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRW50cm91XCIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG4gIC8vVHJhdGFtZW50byBkZSBlcnJvcy5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVycm9cIik7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbi8qXHJcbiAgc2F2ZVRva2VuKHRva2VuOiBTdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiSU5TRVJUIElOVE8gdXN1YXJpbyAodG9rZW4pIFZBTFVFUyAoPylcIiwgW3Rva2VuXSkudGhlbihpZCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XHJcbiAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgfSk7XHJcbiAgfVxyXG4qL1xyXG59Il19