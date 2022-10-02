export function fibonacci(index: number): number {
  if (index < 2) {
    return index;
  } else {
    return fibonacci(index - 1) + fibonacci(index - 2);
  }
}
