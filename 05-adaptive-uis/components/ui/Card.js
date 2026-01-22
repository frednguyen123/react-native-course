import { View, StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    // marginTop: deviceWidth < 380 ? 18 : 34,
    // marginHorizontal: 24,
    // elevation: 80,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
});