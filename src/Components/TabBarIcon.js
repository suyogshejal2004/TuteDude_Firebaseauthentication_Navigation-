import { Ionicons } from "@expo/vector-icons";
import { useTheme ,themeColor} from "react-native-rapi-ui";

const TabBarIcon = (props)=>{
    const {isDarkmode} = useTheme
    return (
      <Ionicons
        color={
          props.focused ?  isDarkmode ? themeColor.white100 : primary:'rgb(143,155,179'
        }
        name={props.icon}
        size={24}
      />
    );
}
export default TabBarIcon;