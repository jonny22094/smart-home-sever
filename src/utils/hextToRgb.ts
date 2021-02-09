export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let string = '';

  for (let i = 1; i <= 3; i++) {
    string += parseInt(result[i], 16)
      .toString()
      .padStart(3, '0');
  }

  return string;
}