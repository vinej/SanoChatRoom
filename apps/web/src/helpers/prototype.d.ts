declare global {
  interface String {
    splitEqual(actiontype: string, sep: string): boolean;
  }
}

String.prototype.splitEqual = function (actiontype: string, sep: string): boolean {
  var res = this.split(sep)
  for (let f of res) {
    if (f === "*" || f == actiontype) {
      return true
    }
  }
  return false
}
export { }




