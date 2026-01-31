import { View, Text, Button, StyleSheet } from 'react-native';

function UserScreen({navigation}) {
  function openDrawerHandler() {
    // Drawer Navigation
    navigation.toggleDrawer();
    // Bottom Tabs Navigation
    // navigation.navigate('Welcome');
    // navigation.jumpTo('Welcome');
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});