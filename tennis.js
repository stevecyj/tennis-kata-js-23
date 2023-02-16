export class Tennis {
  constructor(firstPlayerName) {
    this.firstPlayerName = firstPlayerName;

  }

  firstPlayerScoreTimes = 0;

  scoreLookup = {
    0: 'love',
    1: 'fifteen',
    2: 'thirty',
    3: 'forty',
  };
  secondPlayerScoreTimes = 0;

  firstPlayerName;

  score() {
    if (this.isScoreDifferent()) {
      if (this.firstPlayerScoreTimes > 3) {
        if (this.firstPlayerScoreTimes - this.secondPlayerScoreTimes === 1) {
          return this.firstPlayerName + ' adv';
        }
      }
      return this.lookupScore();
    }
    if (this.isDeuce()) {
      return this.deuce();
    }
    return this.sameScore();
  }

  isScoreDifferent() {
    return this.secondPlayerScoreTimes !== this.firstPlayerScoreTimes;
  }

  lookupScore() {
    return `${this.scoreLookup[this.firstPlayerScoreTimes]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
  }

  isDeuce() {
    return this.firstPlayerScoreTimes >= 3;
  }

  deuce() {
    return 'deuce';
  }

  sameScore() {
    return `${this.scoreLookup[this.firstPlayerScoreTimes]} all`;
  }

  firstPlayerScore() {
    this.firstPlayerScoreTimes++;
  }

  secondPlayerScore() {
    this.secondPlayerScoreTimes++;
  }
}
