"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("..");
var Echo = (function (_super) {
    tslib_1.__extends(Echo, _super);
    function Echo() {
        var _this = _super.call(this, 'echo') || this;
        var input = _this.input = new __1.AppInput();
        var output = _this.output = new __1.AppText();
        _this.appendChild(input);
        _this.appendChild(output);
        input.addEventListener('input', function () {
            output.text = input.value;
        }, false);
        return _this;
    }
    return Echo;
}(__1.AppElement));
exports.Echo = Echo;
var echo = new Echo();
echo.appendToDOM(document.body);
//# sourceMappingURL=echo.js.map