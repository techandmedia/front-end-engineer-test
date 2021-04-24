export function createAStringOfNumber(newNumber) {
  const block1 =
    Math.random(newNumber / 1)
      .toString(9)
      .substring(2, 4) +
    Math.random(newNumber / 2)
      .toString(9)
      .substring(2, 4);
  const block2 =
    Math.random(newNumber / 3)
      .toString(9)
      .substring(2, 4) +
    Math.random(newNumber / 4)
      .toString(9)
      .substring(2, 4);
  const block3 =
    Math.random(newNumber / 5)
      .toString(9)
      .substring(2, 4) +
    Math.random(newNumber / 6)
      .toString(9)
      .substring(2, 4);
  const block4 =
    Math.random(newNumber / 7)
      .toString(9)
      .substring(2, 4) +
    Math.random(newNumber / 8)
      .toString(4)
      .substring(2, 4);
  const final = block1 + " " + block2 + " " + block3 + " " + block4;
  return final;
}

export function createExpiration(newNumber) {
  const randomMonth = parseInt(
    Math.random(newNumber ? newNumber : new Date()) * (12 - 1) + 1
  );
  const randomYear = parseInt(Math.random() + 20);
  let month = "";
  if (randomMonth < 10) {
    month = `0${randomMonth}`;
  } else {
    month = `${randomMonth}`;
  }
  return `${month}/${randomYear}`;
}
