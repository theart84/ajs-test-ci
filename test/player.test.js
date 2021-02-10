import checkHealth from '../src/player';

test('Передаем значение больше 50', () => {
  expect(checkHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});
test('Передаем значение 30', () => {
  expect(checkHealth({ name: 'Маг', health: 30 })).toBe('wounded');
});
test('Передаем значение меньше 15', () => {
  expect(checkHealth({ name: 'Маг', health: 10 })).toBe('critical');
});
test('Передаем значение равное 15', () => {
  expect(checkHealth({ name: 'Маг', health: 15 })).toBe('wounded');
});
test('Передаем значение равное 50', () => {
  expect(checkHealth({ name: 'Маг', health: 50 })).toBe('wounded');
});
