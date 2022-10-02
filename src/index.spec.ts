import { fibonacci } from './index';

describe('Fibonacci serries', () => {
  test('when the input is 0, it should return 0', () => {
    expect(fibonacci(0)).toEqual(0);
  });
});
