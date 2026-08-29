import { Image, useColorScheme } from "react-native";

import lightImage from "../assets/img/book-light.png";
import darkImage from "../assets/img/book-dark.png";

const ThemedImage = (props) => {
  const colorScheme = useColorScheme();

  const image = colorScheme === "dark" ? darkImage : lightImage;

  return <Image {...props} source={image} />;
};

export default ThemedImage;
