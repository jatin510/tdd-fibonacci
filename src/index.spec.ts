import { fibonacci } from './index';

describe('Fibonacci serries', () => {
  test('when the input is 0, it should return 0', () => {
    expect(fibonacci(0)).toEqual(0);
  });

  test('when the input is 1, it should return 1', () => {
    expect(fibonacci(1)).toEqual(1);
  });
});
