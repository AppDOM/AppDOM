"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AppNode_1 = require("./AppNode");
var AppElementNode = (function (_super) {
    tslib_1.__extends(AppElementNode, _super);
    function AppElementNode(tagName) {
        return _super.call(this, document.createElement(tagName)) || this;
    }
    Object.defineProperty(AppElementNode.prototype, "style", {
        get: function () {
            return this.element.style;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppElementNode.prototype, "title", {
        get: function () {
            return this.element.title;
        },
        set: function (val) {
            this.element.title = val;
        },
        enumerable: true,
        configurable: true
    });
    AppElementNode.prototype.addEventListener = function (evtName, listener, capture) {
        this.element.addEventListener(evtName, listener, capture);
        return this;
    };
    AppElementNode.prototype.removeEventListener = function (evtName, listener, capture) {
        this.element.removeEventListener(evtName, listener, capture);
        return this;
    };
    return AppElementNode;
}(AppNode_1.AppNode));
exports.AppElementNode = AppElementNode;
//# sourceMappingURL=AppElementNode.js.map