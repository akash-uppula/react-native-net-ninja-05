import { Image } from "react-native";
import { useColorScheme } from "react-native";

import lightImage from "../assets/img/book-light.png";
import darkImage from "../assets/img/book-dark.png";

const ThemedImage = ({ style }) => {
  const colorScheme = useColorScheme();

  const image = colorScheme === "dark" ? darkImage : lightImage;

  return <Image source={image} style={style} />;
};

export default ThemedImage;
