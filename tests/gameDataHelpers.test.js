import helpers from '../client/src/gameDataHelpers';

describe('getSalePrice', () => {

  it('returns a string', () => {
    const result = helpers.getSalePrice('', '');
    expect(typeof result).toBe('string');
  });
  it('returns the correct price in the form x.xx', () => {
    const result1 = helpers.getSalePrice('100.00', '90');
    const result2 = helpers.getSalePrice('100.00', '33');
    expect(result1).toBe('10.00');
    expect(result2).toBe('67.00');
  });
});

describe('toPascalCase', () => {
  it('returns a string', () => {
    const result = helpers.toPascalCase('Practical capability');
    expect(typeof result).toBe('string');
  });
  it('returns the correct output', () => {
    const result1 = helpers.toPascalCase('Practical capability');
    const result2 = helpers.toPascalCase('Practical capability - deserunt omnis velit');
    expect(result1).toBe('Practical Capability');
    expect(result2).toBe('Practical Capability - Deserunt Omnis Velit');
  })
});

describe('getTotalCost', () => {
  it('returns a string of form $x.xx', () => {
    const result = helpers.getTotalCost([{price: '1.00'}]);
    expect(result).toBe('$1.00');
  });
  it('returns the correct output', () => {
    const result1 = helpers.getTotalCost([{ price: '1.00' }, { price: '2.00' }, { price: '3.00' }]);
    const result2 = helpers.getTotalCost([{ price: '100.00' }, { price: '1.00' }]);
    expect(result1).toBe('$6.00');
    expect(result2).toBe('$101.00');
  });
});

describe('getDLCCost', () => {
  it('returns a string', () => {
    const result = helpers.getDLCCost('0.00');
    expect(typeof result).toBe('string');
  });
  it(`returns 'Free' if cost is 0`, () => {
    const result = helpers.getDLCCost('0.00');
    expect(result).toBe('Free');
  });
  it(`returns correct output in form $x.xx if cost not 0`, () => {
    const result = helpers.getDLCCost('45.00');
    expect(result).toBe('$45.00');
  });
});

describe('formatDate', () => {
  it('returns a string', () => {

  });
  it('returns the correct date and formatting', () => {
    const result = helpers.formatDate('2017-11-08T08:00:00Z');
    expect(typeof result).toBe('string');
  });
  it('returns the correct output', () => {
    const result1 = helpers.formatDate('2017-11-08T08:00:00Z');
    const result2 = helpers.formatDate('2019-04-27T07:00:00Z');
    expect(result1).toBe('Nov 8, 2017');
    expect(result2).toBe('Apr 27, 2019');
  });
});