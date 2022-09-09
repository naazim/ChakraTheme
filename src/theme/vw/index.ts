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

export default vw;
