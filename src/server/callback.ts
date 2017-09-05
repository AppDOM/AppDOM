export class Calledback {}

export const calledback = new Calledback();

export type callbackFunc = (err: any, data: any) => void;
export type callback = (err: any, data: any) => Calledback;

export function Callback(cb: callbackFunc) : callback {
  var called = false;
  return (err: any, data: any) => {
    if (called) {
      throw new Error('callback already called.');
    }
    called = true;
    cb(err, data);

    return calledback;
  }
}
