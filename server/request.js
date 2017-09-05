"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var callback_1 = require("./callback");
var Request = (function () {
    function Request(event, context) {
        this.headers = {};
        this.payload = null;
        this.params = {};
        this.query = {};
        this.path = null;
        this.method = null;
        this.body = null;
        this.path = event.path;
        this.method = event.httpMethod;
        this.headers = event.headers;
        this.params = event.pathParameters;
        this.query = event.queryStringParameters;
        this.body = event.body;
        this.stageVariables = event.stageVariables;
        this.requestContext = event.requestContext;
        this.event = event;
        this.context = context;
        if (typeof event.body === 'string') {
            try {
                this.payload = JSON.parse(event.body);
            }
            catch (e) {
            }
        }
    }
    return Request;
}());
exports.Request = Request;
var Response = (function () {
    function Response(cb) {
        this._statusCode = 200;
        this._callback = callback_1.Callback(cb);
    }
    Object.defineProperty(Response.prototype, "body", {
        set: function (val) {
            if (typeof val === 'string') {
                this._body = val;
            }
            else if (typeof val === 'object') {
                this._body = JSON.stringify(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Response.prototype, "statusCode", {
        set: function (val) {
            if (typeof val === 'number') {
                this._statusCode = Math.floor(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Response.prototype, "headers", {
        set: function (val) {
            if (typeof val === 'object') {
                this._headers = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Response.prototype.setHeader = function (key, val) {
        if (typeof val === 'string') {
            this._headers[key] = val;
        }
    };
    Response.prototype.removeHeader = function (key) {
        delete this._headers[key];
    };
    Response.prototype.send = function (statusCode, body, headers) {
        if (body)
            this.body = body;
        if (headers)
            this.headers = headers;
        if (statusCode)
            this.statusCode = statusCode;
        return this._callback(null, {
            statusCode: this._statusCode,
            headers: this._headers,
            body: this._body,
        });
    };
    return Response;
}());
exports.Response = Response;
function Handler(handler) {
    return function (event, context, cb) {
        var request = new Request(event, context);
        var response = new Response(cb);
        try {
            return handler(request, response);
        }
        catch (e) {
            return callback_1.Callback(cb)(e, null);
        }
    };
}
exports.Handler = Handler;
//# sourceMappingURL=request.js.map