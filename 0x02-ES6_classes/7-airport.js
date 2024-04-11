export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') throw new Error();
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(input) {
    this._name = input;
  }

  get code() {
    return this._code;
  }

  set code(input) {
    this._code = input;
  }

  get [Symbol.toStringTag]() {
    return this.code;
  }
}
