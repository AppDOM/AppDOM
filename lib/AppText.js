"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AppNode_1 = require("./AppNode");
var AppText = (function (_super) {
    tslib_1.__extends(AppText, _super);
    function AppText(text) {
        if (text === void 0) { text = ''; }
        return _super.call(this, document.createTextNode(text)) || this;
    }
    Object.defineProperty(AppText.prototype, "text", {
        get: function () {
            return this.element.textContent;
        },
        set: function (val) {
            this.element.textContent = val;
        },
        enumerable: true,
        configurable: true
    });
    return AppText;
}(AppNode_1.AppNode));
exports.AppText = AppText;
//# sourceMappingURL=AppText.js.map