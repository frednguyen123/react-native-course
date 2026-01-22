import { Text, StyleSheet, Platform } from "react-native";

import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS ==='android'? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    borderwidth: 2,
    borderColor: "white",
    padding: 12,
    alignSelf: "center", 
    //alignSelf added because of how shadow and card works
    maxWidth: '80%',
    width: 300,
  },
});
