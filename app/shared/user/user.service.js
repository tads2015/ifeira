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
        console.error(config_1.Config.apiUrl + "api/auth/login");
        console.log(JSON.stringify(user));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXdDO0FBQ3hDLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFFLHFCQUFxQixDQUFFLENBQUM7QUFHOUMsb0NBQW1DO0FBR25DO0lBSUUscUJBQW9CLElBQVU7UUFBOUIsaUJBVUM7UUFWbUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM1QixDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUM3QixFQUFFLENBQUMsT0FBTyxDQUFDLHVGQUF1RixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDdkcsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDRFQUE0RTtJQUM1RSwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNkLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLEVBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ3BCLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUNuQjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsc0JBQXNCO0lBQ3RCLGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixlQUFNLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtZQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDO0lBaERVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLZSxXQUFJO09BSm5CLFdBQVcsQ0FpRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vU2Vydmlzc28gcGFyYSBjb25leMOjbyBjb20gYmFjay1lbmRpbmcuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiICk7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApe1xyXG4gICAgKG5ldyBTcWxpdGUoXCJpZmVpcmEuZGJcIikpLnRoZW4oZGIgPT4ge1xyXG4gICAgICAgIGRiLmV4ZWNTUUwoXCJDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyB1c3VhcmlvIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIHRva2VuIFRFWFQpXCIpLnRoZW4oaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGI7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPUEVOIERCIEVSUk9SXCIsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvL0xvZ2luIGVudmlhIGVtIGphc29uIG8gdXN1YXJpbyBlIHJlY2ViZSBhIHJlc3Bvc3RhIGVtIGphc29uIGRvIGJhY2stZW5kaW5nXHJcbiAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoQ29uZmlnLmFwaVVybCArIFwiYXBpL2F1dGgvbG9naW5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcImFwaS9hdXRoL2xvZ2luXCIsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgICB7aGVhZGVyczogaGVhZGVyc31cclxuICAgIClcclxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVudHJvdVwiKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuICAvL1RyYXRhbWVudG8gZGUgZXJyb3MuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJlcnJvXCIpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICBzYXZlVG9rZW4odG9rZW4pe1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgQ29uZmlnLnRva2VuPXRva2VuO1xyXG4gICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKFwiSU5TRVJUIElOVE8gdXN1YXJpbyAodG9rZW4pIFZBTFVFUyAoPylcIiwgW3Rva2VuXSkudGhlbihpZCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XHJcbiAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgfSk7XHJcbiAgfVxyXG59Il19