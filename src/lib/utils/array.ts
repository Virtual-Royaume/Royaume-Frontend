export const shuffleArray = <T>(args: T[]): T[] => {
  const array = args;

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

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