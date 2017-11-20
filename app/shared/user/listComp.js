"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleFormComp = (function () {
    function SimpleFormComp() {
    }
    SimpleFormComp.prototype.onSubmit = function (f) {
        console.log(f.value); // { first: '', last: '' }
        console.log(f.valid); // false
    };
    SimpleFormComp = __decorate([
        core_1.Component({
            selector: 'example-app',
            template: "\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n      <input name=\"first\" ngModel required #first=\"ngModel\">\n      <input name=\"last\" ngModel>\n      <button>Submit</button>\n    </form>\n    \n    <p>First name value: {{ first.value }}</p>\n    <p>First name valid: {{ first.valid }}</p>\n    <p>Form value: {{ f.value | json }}</p>\n    <p>Form valid: {{ f.valid }}</p>\n  ",
        })
    ], SimpleFormComp);
    return SimpleFormComp;
}());
exports.SimpleFormComp = SimpleFormComp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdENvbXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0Q29tcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQWtCeEM7SUFBQTtJQUtBLENBQUM7SUFKQyxpQ0FBUSxHQUFSLFVBQVMsQ0FBUztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLDBCQUEwQjtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLFFBQVE7SUFDakMsQ0FBQztJQUpVLGNBQWM7UUFmMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxrWkFXVDtTQUNGLENBQUM7T0FDVyxjQUFjLENBSzFCO0lBQUQscUJBQUM7Q0FBQSxBQUxELElBS0M7QUFMWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtOZ0Zvcm19IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuIFxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2V4YW1wbGUtYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiBub3ZhbGlkYXRlPlxyXG4gICAgICA8aW5wdXQgbmFtZT1cImZpcnN0XCIgbmdNb2RlbCByZXF1aXJlZCAjZmlyc3Q9XCJuZ01vZGVsXCI+XHJcbiAgICAgIDxpbnB1dCBuYW1lPVwibGFzdFwiIG5nTW9kZWw+XHJcbiAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDxwPkZpcnN0IG5hbWUgdmFsdWU6IHt7IGZpcnN0LnZhbHVlIH19PC9wPlxyXG4gICAgPHA+Rmlyc3QgbmFtZSB2YWxpZDoge3sgZmlyc3QudmFsaWQgfX08L3A+XHJcbiAgICA8cD5Gb3JtIHZhbHVlOiB7eyBmLnZhbHVlIHwganNvbiB9fTwvcD5cclxuICAgIDxwPkZvcm0gdmFsaWQ6IHt7IGYudmFsaWQgfX08L3A+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUZvcm1Db21wIHtcclxuICBvblN1Ym1pdChmOiBOZ0Zvcm0pIHtcclxuICAgIGNvbnNvbGUubG9nKGYudmFsdWUpOyAgLy8geyBmaXJzdDogJycsIGxhc3Q6ICcnIH1cclxuICAgIGNvbnNvbGUubG9nKGYudmFsaWQpOyAgLy8gZmFsc2VcclxuICB9XHJcbn0iXX0=