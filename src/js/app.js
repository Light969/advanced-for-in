const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(object, array) {
  const result = [];

  for (const property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property) && !array.includes(property)) {
      result.push({ key: property, value: object[property] });
    }
  }

  result.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(object, array[i])) {
      result.unshift({
        key: array[i],
        value: object[array[i]],
      });
    }
  }

  return result;
}

console.log(orderByProps(obj, ['name', 'level']));
console.log(obj);
console.log(orderByProps(obj, ['attack', 'level']));
console.log(obj);
