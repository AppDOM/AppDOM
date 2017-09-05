function test() {
  setTimeout(()=>{throw 'test';}, 900)

}

export const n = test();
