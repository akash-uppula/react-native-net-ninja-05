import { TextInput, useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const ThemedInput = (props) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.placeholder}
      style={[
        {
          width: "100%",
          borderWidth: 1,
          borderColor: colors.inputBorder,
          backgroundColor: colors.inputBackground,
          color: colors.inputText,
          borderRadius: 8,
          padding: 12,
          marginBottom: 15,
          fontSize: 16,
        },
        props.style,
      ]}
    />
  );
};

export default ThemedInput;
