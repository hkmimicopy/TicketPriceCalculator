import { calculatePrice } from '../js/logic.js';

test('6歳未満は0円', () => {
  expect(calculatePrice(5)).toBe(0);
});

test('6-12歳は500円', () => {
  expect(calculatePrice(10)).toBe(500);
});

test('13-15歳は600円', () => {
  expect(calculatePrice(14)).toBe(600);
});

test('16-18歳は800円', () => {
  expect(calculatePrice(17)).toBe(800);
});

test('19歳以上は1000円', () => {
  expect(calculatePrice(20)).toBe(1000);
});