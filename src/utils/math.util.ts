/**
 * Returns a random number between min and max.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random number between min and max.
 */
export const getRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
};

/**
 * Returns a random item from an array.
 * @param items - The array of items to pick from.
 * @returns A random item from the array.
 */
export const getRandomItem = <T>(items: T[]): T => {
    return items[Math.floor(Math.random() * items.length)];
};

/**
 * Returns a random number between min and max, rounded to the nearest step.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @param step - The step value.
 * @returns A random number between min and max that is a multiple of step.
 */
export const getRandomSteppedNumber = (min: number, max: number, step: number): number => {
    const rawValue = Math.random() * (max - min) + min;
    return Math.round(rawValue / step) * step;
};

/**
 * Returns a random RPM (Rate Per Mile) formatted as a currency string.
 * @param min - The minimum RPM.
 * @param max - The maximum RPM.
 * @returns A string in the format "$X.XX".
 */
export const getRandomRPM = (min: number = 1.5, max: number = 3.2): string => {
    const rawValue = getRandomNumber(min, max);
    return `$${rawValue.toFixed(2)}`;
};
