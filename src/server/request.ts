import {Callback, callback, Calledback} from './callback';

type dictionaryString = {[key: string]: string};

export class Request {
  headers : dictionaryString = {};
  payload : any = null;
  params : dictionaryString = {};
  query : dictionaryString = {};
  path : string|null = null;
  method : string|null = null;
  body : string|null = null;

  stageVariables: any;
  requestContext: any;

  event: any;
  context: any;

  constructor(event: any, context: any) {
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
      } catch(e) {
        //TODO warn about error
      }
    }
  }
}

export class Response {
  _callback: callback;
  _statusCode: number = 200;
  _headers: dictionaryString;
  _body: string;

  constructor(cb: callback) {
    this._callback = Callback(cb);
  }

  set body(val: object | string) {
    if (typeof val === 'string') {
      this._body = val;
    } else if (typeof val === 'object') {
      this._body = JSON.stringify(val);
    }
  }

  set statusCode(val: number) {
    if (typeof val === 'number') {
      this._statusCode = Math.floor(val);
    }
  }

  set headers(val: dictionaryString) {
    if (typeof val === 'object') {
      this._headers = val;
    }
  }

  setHeader(key: string, val: string) {
    if (typeof val === 'string') {
      this._headers[key] = val;
    }
  }

  removeHeader(key: string) {
    delete this._headers[key]
  }

  send(statusCode?: number, body?: object|string, headers?: dictionaryString) : Calledback {
    if (body) this.body = body;
    if (headers) this.headers = headers;
    if (statusCode) this.statusCode = statusCode;

    return this._callback(null, {
      statusCode: this._statusCode,
      headers: this._headers,
      body: this._body,
    });
  }
}

type handler = (req: Request, res: Response) => Calledback;

export function Handler(handler: handler) : (event: any, context: any, cb: callback) => Calledback {
  return (event: any, context: any, cb: callback) => {
    let request = new Request(event, context);
    let response = new Response(cb);
    try {
      return handler(request, response);
    } catch (e) {
      return Callback(cb)(e, null);
    }
  }
}
