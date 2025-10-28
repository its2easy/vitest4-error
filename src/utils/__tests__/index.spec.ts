// need few test files to trigger an error

import { describe, it, expect } from 'vitest';

import {
    isEmpty,
    areAllDivisibleByFive,
    getNumbersFromDosageString,
} from '@/utils';

describe('isEmpty', () => {
  it('returns true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns true for empty strings (including whitespace)', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  it('returns true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('returns true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns false for non-empty strings', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  it('returns false for non-empty arrays', () => {
    expect(isEmpty([1])).toBe(false);
  });

  it('returns false for non-empty objects', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  it('returns false for numbers and booleans', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});

describe('areAllDivisibleByFive()', () => {
    it('returns the correct result', () => {
        expect(areAllDivisibleByFive([])).toBe(true); // Array.every returns true for [] so does this function

        expect(areAllDivisibleByFive([1])).toBe(false);
        expect(areAllDivisibleByFive([1, 5])).toBe(false);
        expect(areAllDivisibleByFive([377])).toBe(false);
        expect(areAllDivisibleByFive([5.5])).toBe(false);

        expect(areAllDivisibleByFive([5])).toBe(true);
        expect(areAllDivisibleByFive([5, 1565])).toBe(true);
        expect(areAllDivisibleByFive([5, 445, -5])).toBe(true);
    });
});

describe('getNumbersFromDosageString()', () => {
    it('returns the correct result', () => {
        expect(getNumbersFromDosageString('150+50+0+')).toStrictEqual([150, 50]);
        expect(getNumbersFromDosageString('150')).toStrictEqual([150]);
        expect(getNumbersFromDosageString('0')).toStrictEqual([]);
        expect(getNumbersFromDosageString('')).toStrictEqual([]);
        expect(getNumbersFromDosageString(' ')).toStrictEqual([]);
        expect(getNumbersFromDosageString('   ')).toStrictEqual([]);
        expect(getNumbersFromDosageString('150 + 50 ')).toStrictEqual([150, 50]);
        expect(getNumbersFromDosageString('+')).toStrictEqual([]);
        expect(getNumbersFromDosageString(' + ')).toStrictEqual([]);
        expect(getNumbersFromDosageString('+0+250+ ')).toStrictEqual([250]);
    });
});
