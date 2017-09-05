"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AppElementNode_1 = require("./AppElementNode");
var AppTextArea = (function (_super) {
    tslib_1.__extends(AppTextArea, _super);
    function AppTextArea(value) {
        var _this = _super.call(this, 'textarea') || this;
        _this.value = value;
        return _this;
    }
    Object.defineProperty(AppTextArea.prototype, "value", {
        get: function () {
            return this.element.value;
        },
        set: function (val) {
            this.element.value = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppTextArea.prototype, "defaultValue", {
        get: function () {
            return this.element.defaultValue;
        },
        set: function (val) {
            this.element.defaultValue = val;
        },
        enumerable: true,
        configurable: true
    });
    return AppTextArea;
}(AppElementNode_1.AppElementNode));
exports.AppTextArea = AppTextArea;
//# sourceMappingURL=AppTextArea.js.map