export const shuffleArray = <T>(args: T[]): T[] => {
  let array = args;
  
  for (let i = args.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return args;
};