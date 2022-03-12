import { showAttackList, character } from '../app';

test('showAttackList function return array with information about special attack', () => {
  const result = showAttackList(character);
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание не доступно',
    },
  ];
  expect(expected).toEqual(result);
});
