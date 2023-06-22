export const findClosestValue = (array: HTMLElement[], value: number): Element | null => {
  let closestValue: Element | null = null;
  let minDifference = Infinity;

  for (let i = 0; i < array.length; i++) {
    const difference = Math.abs(array[i].offsetTop - value);
    if (difference < minDifference) {
      minDifference = difference;
      closestValue = array[i];
    }
  }

  return closestValue;
};