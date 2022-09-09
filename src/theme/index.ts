import { extendTheme } from "@chakra-ui/react";
import vw from "./vw";
import cariad from "./cariad";
import audi from "./audi";
import skoda from "./skoda";

const themes = {
  vw,
  audi,
  skoda,
  cariad,
};

export const getTheme = (selectedTheme: string) =>
  extendTheme(themes[selectedTheme]);
