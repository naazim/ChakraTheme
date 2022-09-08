import { extendTheme } from "@chakra-ui/react";

const vw = {
  colors: {
    primary: "#001e50",
    secondary: "#4cc7f4",
  },
  components: {
    Button: {
      variants: {
        primary: {
          fontSize: "0.875rem",
          fontWeight: "normal",
          bg: "primary",
          color: "white",
          rounded: "full",
          _hover: {
            bg: "secondary",
            color: "primary",
          },
        },
        outline: {
          fontSize: "0.875rem",
          fontWeight: "normal",
          bg: "transparent",
          border: "2px",
          borderColor: "currentColor",
          color: "primary",
          rounded: "full",
          _hover: {
            bg: "transparent",
            color: "#0040c5",
          },
        },
      },
    },
  },
};
const cariad = {
  colors: {
    primary: "#442ee0",
    secondary: "#2e218e",
  },
  components: {
    Button: {
      variants: {
        primary: {
          fontSize: "0.875rem",
          fontWeight: "normal",
          bg: "primary",
          color: "white",
          rounded: "full",
          _hover: {
            bg: "secondary",
          },
        },
        outline: {
          fontSize: "0.875rem",
          fontWeight: "normal",
          bg: "transparent",
          border: "2px",
          borderColor: "currentColor",
          color: "primary",
          rounded: "full",
          _hover: {
            bg: "transparent",
            color: "#0040c5",
          },
        },
      },
    },
  },
};
const audi = {
  colors: {
    primary: "#000000",
    secondary: "#4C4C4C",
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "primary",
          color: "white",
          rounded: "none",
          _hover: {
            bg: "secondary",
          },
        },
        outline: {
          bg: "transparent",
          border: "2px",
          borderColor: "currentColor",
          color: "primary",
          rounded: "none",
          _hover: {
            bg: "transparent",
            color: "secondary",
          },
        },
      },
    },
  },
};

const scoda = {
  colors: {
    primary: "#4ba82e",
    secondary: "#419128",
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "primary",
          color: "white",
          rounded: "full",
          _hover: {
            bg: "secondary",
          },
        },
        outline: {
          bg: "transparent",
          border: "2px",
          borderColor: "currentColor",
          color: "primary",
          rounded: "full",
          _hover: {
            bg: "transparent",
            color: "secondary",
          },
        },
      },
    },
  },
};

const themes = {
  vw,
  audi,
  scoda,
  cariad,
};

export const getTheme = (selectedTheme: string) =>
  extendTheme(themes[selectedTheme]);
