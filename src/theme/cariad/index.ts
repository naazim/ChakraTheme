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

export default cariad;
