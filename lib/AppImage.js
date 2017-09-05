"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AppElementNode_1 = require("./AppElementNode");
var AppImage = (function (_super) {
    tslib_1.__extends(AppImage, _super);
    function AppImage(src, lowsrc) {
        var _this = _super.call(this, 'img') || this;
        if (lowsrc) {
            _this.lowsrc = lowsrc;
        }
        _this.src = src;
        return _this;
    }
    Object.defineProperty(AppImage.prototype, "src", {
        get: function () {
            return this.element.src;
        },
        set: function (val) {
            this.element.src = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppImage.prototype, "lowsrc", {
        get: function () {
            return this.element.lowsrc;
        },
        set: function (val) {
            this.element.lowsrc = val;
        },
        enumerable: true,
        configurable: true
    });
    return AppImage;
}(AppElementNode_1.AppElementNode));
exports.AppImage = AppImage;
//# sourceMappingURL=AppImage.js.map