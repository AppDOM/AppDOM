"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppNode = (function () {
    function AppNode(element) {
        this.parent = null;
        if (element instanceof HTMLElement || element instanceof Text) {
            this.element = element;
        }
        else {
            throw new Error('Cannot construct AppNode');
        }
    }
    AppNode.prototype.remove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        return this;
    };
    AppNode.prototype.insertBefore = function (sibling) {
        var parent = sibling.parent;
        if (parent) {
            this.remove();
            parent.element.insertBefore(this.element, sibling.element);
            var pos = parent.children.indexOf(sibling);
            parent.children.splice(pos, 0, this);
            this.parent = parent;
        }
        return this;
    };
    AppNode.prototype.insertAfter = function (sibling) {
        var parent = sibling.parent;
        if (parent) {
            this.remove();
            parent.element.insertBefore(this.element, sibling.element.nextSibling);
            var pos = parent.children.indexOf(sibling);
            parent.children.splice(pos + 1, 0, this);
            this.parent = parent;
        }
        return this;
    };
    AppNode.prototype.appendToDOM = function (dom) {
        dom.appendChild(this.element);
        return this;
    };
    return AppNode;
}());
exports.AppNode = AppNode;
//# sourceMappingURL=AppNode.js.map