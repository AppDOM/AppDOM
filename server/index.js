"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
exports.handler = request_1.Handler(function (request, response) {
    if (request.query['some'])
        return response.send(200, { some: 'data' });
    else if (request.query['someOther'])
        return response.send(200, { someOther: 'data' });
    return response.send(400, { errorMessage: 'something went wrong' });
});
//# sourceMappingURL=index.js.map