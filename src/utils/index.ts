export function isEmpty(value: unknown): boolean {
  if (value == null) return true; // null or undefined
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

export function areAllDivisibleByFive(numbers: number[]): boolean {
    return numbers.every((num) => Number.isInteger(num) && num % 5 === 0);
}

export function getNumbersFromDosageString(dosageString: string): number[] {
    return dosageString
        .split('+')
        .filter((n) => n && n !== '0' && n.trim() !== '' && !Number.isNaN(Number(n)))
        .map((n) => Number(n)); // "150+50+0+" => [150, 50]
}
