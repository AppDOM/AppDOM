"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AppElementNode_1 = require("./AppElementNode");
var AppInput = (function (_super) {
    tslib_1.__extends(AppInput, _super);
    function AppInput(type) {
        if (type === void 0) { type = 'text'; }
        var _this = _super.call(this, 'input') || this;
        _this.element.type = type;
        return _this;
    }
    Object.defineProperty(AppInput.prototype, "value", {
        get: function () {
            return this.element.value;
        },
        set: function (val) {
            this.element.value = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppInput.prototype, "defaultValue", {
        get: function () {
            return this.element.defaultValue;
        },
        set: function (val) {
            this.element.defaultValue = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppInput.prototype, "checked", {
        get: function () {
            return this.element.checked;
        },
        set: function (val) {
            this.element.checked = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppInput.prototype, "defaultChecked", {
        get: function () {
            return this.element.defaultChecked;
        },
        set: function (val) {
            this.element.defaultChecked = val;
        },
        enumerable: true,
        configurable: true
    });
    return AppInput;
}(AppElementNode_1.AppElementNode));
exports.AppInput = AppInput;
//# sourceMappingURL=AppInput.js.map