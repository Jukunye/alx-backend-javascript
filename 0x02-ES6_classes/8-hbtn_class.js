export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](val) {
    if (val === 'string') {
      return this._location;
    }
    if (val === 'number') {
      return this._size;
    }
    return this;
  }
}
