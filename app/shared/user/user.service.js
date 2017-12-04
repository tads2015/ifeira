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
            db.execSQL("CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT)").then(function (id) {
                _this.database = db;
            }, function (error) {
                console.log("CREATE TABLE ERROR", error);
            });
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    //Login envia em jason o usuario e recebe a resposta em jason do back-ending
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "user/login", JSON.stringify(user), { headers: headers })
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
    UserService.prototype.saveToken = function (token) {
        console.log(token);
        config_1.Config.token = token;
        this.database.execSQL("INSERT INTO usuario (token) VALUES (?)", [token]).then(function (id) {
            console.log("INSERT RESULT", id);
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXdDO0FBQ3hDLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFFLHFCQUFxQixDQUFFLENBQUM7QUFHOUMsb0NBQW1DO0FBR25DO0lBSUUscUJBQW9CLElBQVU7UUFBOUIsaUJBVUM7UUFWbUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM1QixDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUM3QixFQUFFLENBQUMsT0FBTyxDQUFDLHVGQUF1RixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDdkcsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDRFQUE0RTtJQUM1RSwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNkLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxFQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNwQixFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDbkI7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELHNCQUFzQjtJQUN0QixrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLGVBQU0sQ0FBQyxLQUFLLEdBQUMsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUEvQ1UsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUtlLFdBQUk7T0FKbkIsV0FBVyxDQWdEdkI7SUFBRCxrQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLy9TZXJ2aXNzbyBwYXJhIGNvbmV4w6NvIGNvbSBiYWNrLWVuZGluZy5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG52YXIgU3FsaXRlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIgKTtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7XHJcbiAgICAobmV3IFNxbGl0ZShcImlmZWlyYS5kYlwiKSkudGhlbihkYiA9PiB7XHJcbiAgICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHVzdWFyaW8gKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgdG9rZW4gVEVYVClcIikudGhlbihpZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYjtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vTG9naW4gZW52aWEgZW0gamFzb24gbyB1c3VhcmlvIGUgcmVjZWJlIGEgcmVzcG9zdGEgZW0gamFzb24gZG8gYmFjay1lbmRpbmdcclxuICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblxyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgQ29uZmlnLmFwaVVybCArIFwidXNlci9sb2dpblwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgICAge2hlYWRlcnM6IGhlYWRlcnN9XHJcbiAgICApXHJcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5kbyhkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFbnRyb3VcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbiAgLy9UcmF0YW1lbnRvIGRlIGVycm9zLlxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb1wiKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRva2VuKHRva2VuOiBTdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgQ29uZmlnLnRva2VuPXRva2VuO1xyXG4gICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiSU5TRVJUIElOVE8gdXN1YXJpbyAodG9rZW4pIFZBTFVFUyAoPylcIiwgW3Rva2VuXSkudGhlbihpZCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XHJcbiAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgfSk7XHJcbiAgfVxyXG59Il19