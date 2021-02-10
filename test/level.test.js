import getLevel from '../src/level';
import fetchData from '../src/http';

jest.mock('../src/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Проверяем если статус ok', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 10,
  });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 10');
});

test('Проверяем если статус не ok', () => {
  fetchData.mockReturnValue({
    status: 'error',
    level: 10,
  });
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
