import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Red Hat Display', sans-serif`,
    body: `'Red Hat Display', sans-serif`,
  },
  colors: {
    bg: {
      canvas: "#fcfdfe",
    },
    melro: {
      100: "#212227",
      200: "#262626",
      300: "#2A2A2C",
      500: "#D99518",
      600: "#D98014",
      700: "#D9C0A3",
    },
  },
});

export default theme;
