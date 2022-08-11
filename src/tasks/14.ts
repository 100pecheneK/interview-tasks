declare global {
  interface Function {
    bbind<T extends Function>(this: T, thisArg: any, ...args: any[]): any
  }
}

Function.prototype.bbind = function (thisArg, ...args: any) {
  return (...args2: any) => {
    const id = Date.now().toString() + Math.random()
    thisArg[id] = this
    const bindedFn = thisArg[id](...args.concat(args2))
    delete thisArg[id]
    return bindedFn
  }
}

export default { bbind: Function.prototype.bbind }
