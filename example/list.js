"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("..");
var ListItem = (function (_super) {
    tslib_1.__extends(ListItem, _super);
    function ListItem(text) {
        var _this = _super.call(this, 'li') || this;
        var checkbox = _this.checkbox = new __1.AppInput('checkbox');
        var label = _this.label = new __1.AppElement('label', text);
        var button = _this.button = new __1.AppElement('button', 'X');
        _this.appendChild(checkbox);
        _this.appendChild(label);
        _this.appendChild(button);
        var self = _this;
        button.addEventListener('click', function () {
            self.remove();
        }, false);
        return _this;
    }
    return ListItem;
}(__1.AppElement));
exports.ListItem = ListItem;
var List = (function (_super) {
    tslib_1.__extends(List, _super);
    function List() {
        var _this = _super.call(this, 'list') || this;
        var input = _this.input = new __1.AppInput();
        var list = _this.list = new __1.AppElement('ul');
        _this.appendChild(input);
        _this.appendChild(list);
        input.addEventListener('change', function () {
            list.appendChild(new ListItem(input.value));
            input.value = '';
        }, false);
        return _this;
    }
    return List;
}(__1.AppElement));
exports.List = List;
var list = new List();
list.appendToDOM(document.body);
//# sourceMappingURL=list.js.map