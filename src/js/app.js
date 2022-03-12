// TODO: write your code here
export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
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
    },
  ],
};


export function showAttackList({ special }) {
  return special.map((item) => {
    const newitem = { ...item };
    if (!('description' in newitem)) {
      newitem.description = 'Описание не доступно';
    }
    return newitem;
  });
}
showAttackList(character);
// console.log(showAttackList(character))
