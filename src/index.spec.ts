import { fibonacci } from './index';

describe('Fibonacci serries', () => {
  test('when the input is 0, it should return 0', () => {
    expect(fibonacci(0)).toEqual(0);
  });

  test('when the input is 1, it should return 1', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test('when the input is 2,3,4 respectively it should return 1,2,3 respectively', () => {
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
  });

  test('when the input is 5 return 5', () => {
    expect(fibonacci(5)).toEqual(5);
  });

  test('when the input is 6 return 8', () => {
    expect(fibonacci(6)).toEqual(8);
  });
});
