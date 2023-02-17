export class Tennis {
  constructor(firstPlayerName, secondPlayer) {
    this.firstPlayerName = firstPlayerName;
    this.secondPlayer = secondPlayer;
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

  secondPlayer;

  score() {
    return this.isScoreDifferent()
      ? this.isReady()
        ? this.advState()
        : this.lookupScore()
      : this.isDeuce()
      ? this.deuce()
      : this.sameScore();
  }

  advState() {
    if (this.isAdv()) {
      return this.advScore();
    }
    return this.winScore();
  }

  advScore() {
    return `${this.advPlayer()} adv`;
  }

  winScore() {
    return `${this.advPlayer()} win`;
  }

  isReady() {
    return this.firstPlayerScoreTimes > 3 || this.secondPlayerScoreTimes > 3;
  }

  isAdv() {
    return Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1;
  }

  advPlayer() {
    return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes ? this.firstPlayerName : this.secondPlayer;
  }

  isScoreDifferent() {
    return this.secondPlayerScoreTimes !== this.firstPlayerScoreTimes;
  }

  lookupScore() {
    return `${this.scoreLookup[[this.firstPlayerScoreTimes]]} ${this.scoreLookup[this.secondPlayerScoreTimes]}`;
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
