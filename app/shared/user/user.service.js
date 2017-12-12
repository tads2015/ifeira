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
        return this.http.post(config_1.Config.apiUrl + "api/auth/login", JSON.stringify(user), { headers: headers })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXdDO0FBQ3hDLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFFLHFCQUFxQixDQUFFLENBQUM7QUFHOUMsb0NBQW1DO0FBR25DO0lBSUUscUJBQW9CLElBQVU7UUFBOUIsaUJBVUM7UUFWbUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM1QixDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUM3QixFQUFFLENBQUMsT0FBTyxDQUFDLHVGQUF1RixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDdkcsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDRFQUE0RTtJQUM1RSwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNkLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ3BCLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNuQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsc0JBQXNCO0lBQ3RCLGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsZUFBTSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsd0NBQXdDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQS9DVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS2UsV0FBSTtPQUpuQixXQUFXLENBZ0R2QjtJQUFELGtCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlcnZpc3NvIHBhcmEgY29uZXjDo28gY29tIGJhY2stZW5kaW5nLlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbnZhciBTcWxpdGUgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIiApO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXtcclxuICAgIChuZXcgU3FsaXRlKFwiaWZlaXJhLmRiXCIpKS50aGVuKGRiID0+IHtcclxuICAgICAgICBkYi5leGVjU1FMKFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgdXN1YXJpbyAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCB0b2tlbiBURVhUKVwiKS50aGVuKGlkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy9Mb2dpbiBlbnZpYSBlbSBqYXNvbiBvIHVzdWFyaW8gZSByZWNlYmUgYSByZXNwb3N0YSBlbSBqYXNvbiBkbyBiYWNrLWVuZGluZ1xyXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuXHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJhcGkvYXV0aC9sb2dpblwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgICAge2hlYWRlcnM6IGhlYWRlcnN9XHJcbiAgICApXHJcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5kbyhkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJFbnRyb3VcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbiAgLy9UcmF0YW1lbnRvIGRlIGVycm9zLlxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXJyb1wiKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRva2VuKHRva2VuOiBTdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgQ29uZmlnLnRva2VuPXRva2VuO1xyXG4gICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiSU5TRVJUIElOVE8gdXN1YXJpbyAodG9rZW4pIFZBTFVFUyAoPylcIiwgW3Rva2VuXSkudGhlbihpZCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XHJcbiAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgfSk7XHJcbiAgfVxyXG59Il19