export declare class Calledback {
}
export declare const calledback: Calledback;
export declare type callbackFunc = (err: any, data: any) => void;
export declare type callback = (err: any, data: any) => Calledback;
export declare function Callback(cb: callbackFunc): callback;
