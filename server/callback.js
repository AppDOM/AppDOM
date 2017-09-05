"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calledback = (function () {
    function Calledback() {
    }
    return Calledback;
}());
exports.Calledback = Calledback;
exports.calledback = new Calledback();
function Callback(cb) {
    var called = false;
    return function (err, data) {
        if (called) {
            throw new Error('callback already called.');
        }
        called = true;
        cb(err, data);
        return exports.calledback;
    };
}
exports.Callback = Callback;
//# sourceMappingURL=callback.js.map