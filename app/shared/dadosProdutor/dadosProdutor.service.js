"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// imports do tutorial 
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs//Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var DadosProdutorService = (function () {
    function DadosProdutorService(http) {
        this.http = http;
    }
    DadosProdutorService.prototype.validaCpfProdutor = function (cpf) {
        //alert("Cpf do maluco: " + dados.cpf); só para teste pode apagar
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(config_1.Config.apiUrl + "api/cnpo/check", // caminho back 
        "{\"cpf\":\"" + cpf + "\"}", { headers: headers })
            .map(function (response) { return response.json(); }) //transforma resposta em json
            .do(function (data) {
            //Config.token = data.Result.access_token;
            console.log(data);
        })
            .catch(this.handleErrors);
    };
    DadosProdutorService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    DadosProdutorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DadosProdutorService);
    return DadosProdutorService;
}());
exports.DadosProdutorService = DadosProdutorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFkb3NQcm9kdXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFkb3NQcm9kdXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHVCQUF1QjtBQUN2QixzQ0FBd0Q7QUFDeEQsK0JBQXNDO0FBQ3RDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0Isb0NBQW1DO0FBR25DO0lBRUksOEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUUsQ0FBQztJQUVqQyxnREFBaUIsR0FBakIsVUFBa0IsR0FBVztRQUV6QixpRUFBaUU7UUFFakUsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsRUFBQyxnQkFBZ0I7UUFDakQsYUFBYSxHQUFDLEdBQUcsR0FBQyxLQUFLLEVBQ3ZCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUN0QjthQUNBLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyw2QkFBNkI7YUFDOUQsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNKLDBDQUEwQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUEzQlEsb0JBQW9CO1FBRGhDLGlCQUFVLEVBQUU7eUNBR2lCLFdBQUk7T0FGckIsb0JBQW9CLENBNEJoQztJQUFELDJCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vLyBpbXBvcnRzIGRvIHR1dG9yaWFsIFxyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy8vUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBEYWRvc1Byb2R1dG9yIH0gZnJvbSBcIi4vZGFkb3NQcm9kdXRvclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7IFxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGFkb3NQcm9kdXRvclNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7fVxyXG4gIFxyXG4gICAgdmFsaWRhQ3BmUHJvZHV0b3IoY3BmOiBTdHJpbmcpIHtcclxuXHJcbiAgICAgICAgLy9hbGVydChcIkNwZiBkbyBtYWx1Y286IFwiICsgZGFkb3MuY3BmKTsgc8OzIHBhcmEgdGVzdGUgcG9kZSBhcGFnYXJcclxuICAgICAgICBcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArIFwiYXBpL2NucG8vY2hlY2tcIiwvLyBjYW1pbmhvIGJhY2sgXHJcbiAgICAgICAgICAgIFwie1xcXCJjcGZcXFwiOlxcXCJcIitjcGYrXCJcXFwifVwiLFxyXG4gICAgICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnN9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKSAvL3RyYW5zZm9ybWEgcmVzcG9zdGEgZW0ganNvblxyXG4gICAgICAgIC5kbyhkYXRhID0+IHtcclxuICAgICAgICAgICAgLy9Db25maWcudG9rZW4gPSBkYXRhLlJlc3VsdC5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICB9XHJcbn0iXX0=