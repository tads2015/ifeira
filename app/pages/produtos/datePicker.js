"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var nativescript_modal_datetimepicker_1 = require("nativescript-modal-datetimepicker");
var DatePickerModel = (function (_super) {
    __extends(DatePickerModel, _super);
    function DatePickerModel() {
        var _this = _super.call(this) || this;
        _this.modalDatetimepicker = new nativescript_modal_datetimepicker_1.ModalDatetimepicker();
        return _this;
    }
    DatePickerModel.prototype.selectDate = function () {
        var _this = this;
        this.modalDatetimepicker.pickDate({
            title: "Configurable Title",
            theme: "dark",
            startingDate: new Date('2017-10-01'),
            maxDate: new Date(),
            minDate: new Date('2017-09-19')
        }).then(function (result) {
            if (result) {
                _this.set("date", "Date is: " + result.day + "-" + result.month + "-" + result.year);
            }
            else {
                _this.set("date", false);
            }
        })
            .catch(function (error) {
            console.log("Error: " + error);
        });
    };
    ;
    DatePickerModel.prototype.selectTime = function () {
        var _this = this;
        this.modalDatetimepicker.pickTime({
            theme: "light",
            minTime: {
                hour: 7,
                minute: 0
            },
            maxTime: {
                hour: 15,
                minute: 30
            }
        }).then(function (result) {
            if (result) {
                _this.set("time", "Time is: " + result.hour + ":" + result.minute);
            }
            else {
                _this.set("time", false);
            }
        })
            .catch(function (error) {
            console.log("Error: " + error);
        });
    };
    ;
    return DatePickerModel;
}(observable_1.Observable));
exports.DatePickerModel = DatePickerModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZVBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGVQaWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFDOUQsdUZBQXVGO0FBRXZGO0lBQXFDLG1DQUFVO0lBSzNDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBREcsS0FBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksdURBQW1CLEVBQUUsQ0FBQzs7SUFDekQsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBZ0I7WUFDN0MsS0FBSyxFQUFFLG9CQUFvQjtZQUMzQixLQUFLLEVBQUUsTUFBTTtZQUNiLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEMsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDbEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVU7WUFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNULEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQUEsQ0FBQztJQUVGLG9DQUFVLEdBQVY7UUFBQSxpQkFxQkM7UUFwQkcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBZ0I7WUFDN0MsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsTUFBTSxFQUFFLENBQUM7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsRUFBRTtnQkFDUixNQUFNLEVBQUUsRUFBRTthQUNiO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVU7WUFDZixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNULEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQUEsQ0FBQztJQUNOLHNCQUFDO0FBQUQsQ0FBQyxBQW5ERCxDQUFxQyx1QkFBVSxHQW1EOUM7QUFuRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBNb2RhbERhdGV0aW1lcGlja2VyLCBQaWNrZXJPcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW1vZGFsLWRhdGV0aW1lcGlja2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIHB1YmxpYyBkYXRlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGltZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBtb2RhbERhdGV0aW1lcGlja2VyOiBNb2RhbERhdGV0aW1lcGlja2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbERhdGV0aW1lcGlja2VyID0gbmV3IE1vZGFsRGF0ZXRpbWVwaWNrZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3REYXRlKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxEYXRldGltZXBpY2tlci5waWNrRGF0ZSg8UGlja2VyT3B0aW9ucz57XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpZ3VyYWJsZSBUaXRsZVwiLFxyXG4gICAgICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0aW5nRGF0ZTogbmV3IERhdGUoJzIwMTctMTAtMDEnKSxcclxuICAgICAgICAgICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUoJzIwMTctMDktMTknKVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoXCJkYXRlXCIsIFwiRGF0ZSBpczogXCIgKyByZXN1bHQuZGF5ICsgXCItXCIgKyByZXN1bHQubW9udGggKyBcIi1cIiArIHJlc3VsdC55ZWFyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwiZGF0ZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNlbGVjdFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbERhdGV0aW1lcGlja2VyLnBpY2tUaW1lKDxQaWNrZXJPcHRpb25zPntcclxuICAgICAgICAgICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgICAgICAgICAgbWluVGltZToge1xyXG4gICAgICAgICAgICAgICAgaG91cjogNyxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXhUaW1lOiB7XHJcbiAgICAgICAgICAgICAgICBob3VyOiAxNSxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdDphbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoXCJ0aW1lXCIsIFwiVGltZSBpczogXCIgKyByZXN1bHQuaG91ciArIFwiOlwiICsgcmVzdWx0Lm1pbnV0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldChcInRpbWVcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG4iXX0=