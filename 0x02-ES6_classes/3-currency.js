export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error();
    this._code = code;
    this._name = name;
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

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
