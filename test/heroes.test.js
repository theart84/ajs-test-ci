import sortHeroes from '../src/heroes';

test('Тестируем функцию на возврат корректного значения', () => {
  const received = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  expect(sortHeroes(data)).toEqual(received);
});
