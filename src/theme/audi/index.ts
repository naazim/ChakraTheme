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

export default audi;
