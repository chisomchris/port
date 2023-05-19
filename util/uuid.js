const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperAlpha = alpha.map((item) => item.toUpperCase());
const random = (limit) => {
  return Math.floor(Math.random() * limit);
};

export const uuid = () => {
  const d = new Date().valueOf().toString();
  return `${upperAlpha[random(upperAlpha.length)]}${
    upperAlpha[random(upperAlpha.length)]
  }${upperAlpha[random(upperAlpha.length)]}${
    upperAlpha[random(upperAlpha.length)]
  }${d.substring(0, 4)}${alpha[random(alpha.length)]}${
    alpha[random(alpha.length)]
  }${alpha[random(alpha.length)]}${alpha[random(alpha.length)]}${d.substring(
    4,
    8
  )}${alpha[random(upperAlpha.length)]}${upperAlpha[random(alpha.length)]}${
    upperAlpha[random(upperAlpha.length)]
  }${upperAlpha[random(upperAlpha.length)]}${d.substring(8)}`;
};
