"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Serviço para conexão com back-ending.
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var Sqlite = require("nativescript-sqlite");
var EnderecoService = (function () {
    function EnderecoService(http) {
        this.http = http;
    }
    EnderecoService.prototype.buscaCEP = function (cep) {
        return this.http.get("https://viacep.com.br/ws/" + cep + "/json/")
            .timeout(10000)
            .map(function (res) { return res.json(); })
            .do(function (data) {
            return data;
        })
            .catch(this.handleErrors);
    };
    EnderecoService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    EnderecoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EnderecoService);
    return EnderecoService;
}());
exports.EnderecoService = EnderecoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kZXJlY28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZGVyZWNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFDdkMsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUMvQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUUscUJBQXFCLENBQUUsQ0FBQztBQU05QztJQUNFLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFFLENBQUM7SUFFakMsa0NBQVEsR0FBUixVQUFTLEdBQVc7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7YUFDakUsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNkLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBaEJVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJO09BRG5CLGVBQWUsQ0FpQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vU2VydmnDp28gcGFyYSBjb25leMOjbyBjb20gYmFjay1lbmRpbmcuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiICk7XHJcblxyXG5pbXBvcnQgeyBFbmRlcmVjbyB9IGZyb20gXCIuL2VuZGVyZWNvXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEVuZGVyZWNvU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXt9XHJcblxyXG4gIGJ1c2NhQ0VQKGNlcDogU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHBzOi8vdmlhY2VwLmNvbS5ici93cy9cIiArIGNlcCArIFwiL2pzb24vXCIpXHJcbiAgICAudGltZW91dCgxMDAwMClcclxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcbn0iXX0=