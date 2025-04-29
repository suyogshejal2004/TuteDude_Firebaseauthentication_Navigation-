import { Ionicons } from "@expo/vector-icons";
import { Text, useTheme } from "react-native-rapi-ui";

const TabBarText = (props) => {
  const { isDarkmode } = useTheme;
  return (
    <Text
    style={{ fontWeight:"bold",marginBottom:10,  }}
      color={
        props.focused
          ? isDarkmode
            ? themeColor.white100
            : primary
          : "rgb(143,155,179"
      }
    >
      {props.title}
    </Text>
  );
};
export default TabBarText;
