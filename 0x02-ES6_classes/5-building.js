export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error();
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(input) {
    this._sqft = input;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }
}
