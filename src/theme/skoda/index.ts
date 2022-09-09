const skoda = {
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

export default skoda;
