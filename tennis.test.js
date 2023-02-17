import { Tennis } from 'tennis';

describe('score', function () {
  let tennis = new Tennis('Joey', 'Tom');
  beforeEach(() => {
    tennis = new Tennis('Joey', 'Tom');
  });

  function scoreShouldBe(expected) {
    expect(tennis.score()).toBe(expected);
  }

  it('should be love all', function () {
    scoreShouldBe('love all');
  });

  it('should be fifteen love', function () {
    givenFirstPlayerScore(1);
    scoreShouldBe('fifteen love');
  });

  function givenFirstPlayerScore(times) {
    for (let i = 0; i < times; i++) {
      tennis.firstPlayerScore();
    }
  }

  it('should be thirty love', function () {
    givenFirstPlayerScore(2);
    scoreShouldBe('thirty love');
  });

  it('should be forty love', function () {
    givenFirstPlayerScore(3);
    scoreShouldBe('forty love');
  });

  it('should be love fifteen', function () {
    givenSecondPlayerScore(1);
    scoreShouldBe('love fifteen');
  });

  function givenSecondPlayerScore(times) {
    for (let i = 0; i < times; i++) {
      tennis.secondPlayerScore();
    }
  }

  it('should be love thirty', function () {
    givenSecondPlayerScore(2);
    scoreShouldBe('love thirty');
  });

  it('should be fifteen all', function () {
    givenFirstPlayerScore(1);
    givenSecondPlayerScore(1);
    scoreShouldBe('fifteen all');
  });

  it('should be thirty all', function () {
    givenFirstPlayerScore(2);
    givenSecondPlayerScore(2);
    scoreShouldBe('thirty all');
  });

  function givenDeuce() {
    givenFirstPlayerScore(3);
    givenSecondPlayerScore(3);
  }

  it('should be deuce', function () {
    givenDeuce();
    scoreShouldBe('deuce');
  });

  it('should be first player adv', function () {
    givenDeuce();
    givenFirstPlayerScore(1);
    scoreShouldBe('Joey adv');
  });

  it('should be second player adv', function () {
    givenDeuce();
    givenSecondPlayerScore(1);
    scoreShouldBe('Tom adv');
  });

  it('should be second player win', function () {
    givenDeuce();
    givenSecondPlayerScore(2);
    scoreShouldBe('Tom win');
  });
});
