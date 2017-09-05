import {Handler, Request, Response} from './request';

export const handler = Handler((request: Request, response: Response) => {
  if (request.query['some'])
    return response.send(200, {some: 'data'});
  else if (request.query['someOther'])
    return response.send(200, {someOther: 'data'});

  return response.send(400, {errorMessage: 'something went wrong'});
});
