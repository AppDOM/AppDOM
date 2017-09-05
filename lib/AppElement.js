"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AppText_1 = require("./AppText");
var AppElementNode_1 = require("./AppElementNode");
var AppElement = (function (_super) {
    tslib_1.__extends(AppElement, _super);
    function AppElement(tagName, children) {
        var _this = _super.call(this, tagName) || this;
        _this.children = [];
        if (Array.isArray(children)) {
            try {
                for (var children_1 = tslib_1.__values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                    var child = children_1_1.value;
                    _this.appendChild(child);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (children) {
            _this.appendChild(new AppText_1.AppText(children));
        }
        return _this;
        var e_1, _a;
    }
    Object.defineProperty(AppElement.prototype, "elementChildren", {
        get: function () {
            var children = this.children.filter(function (child) { return child instanceof AppElementNode_1.AppElementNode; });
            return children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppElement.prototype, "firstChild", {
        get: function () {
            var children = this.children;
            return children[0] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppElement.prototype, "lastChild", {
        get: function () {
            var children = this.children;
            return children[children.length - 1] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppElement.prototype, "firstElementChild", {
        get: function () {
            var children = this.elementChildren;
            return children[0] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppElement.prototype, "lastElementChild", {
        get: function () {
            var children = this.elementChildren;
            return children[children.length - 1] || null;
        },
        enumerable: true,
        configurable: true
    });
    AppElement.prototype.removeChild = function (child) {
        this.element.removeChild(child.element);
        var pos = this.children.indexOf(child);
        this.children.splice(pos, 1);
        child.parent = null;
        return this;
    };
    AppElement.prototype.appendChild = function (child) {
        this.element.appendChild(child.element);
        this.children.push(child);
        child.parent = this;
        return this;
    };
    return AppElement;
}(AppElementNode_1.AppElementNode));
exports.AppElement = AppElement;
//# sourceMappingURL=AppElement.js.map