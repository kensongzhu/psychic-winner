import { parseToRgb } from "polished";

// Bootstrap color yig calculation
export const colorYig = (color) => {
  const { red, green, blue } = parseToRgb(color);
  const yig = (red * 299 + green * 587 + blue * 114) / 1000;
  if (yig >= 150) {
    return "#000";
  } else {
    return "#fff";
  }
};
