import { TextInput, View, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <Shadow
      distance={10} // this is like 'elevation: 10'
      stretch={true}
      containerStyle={{
        marginTop: 100,
        marginHorizontal: 24,
      }}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </Shadow>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    // marginTop: 100,
    // marginHorizontal: 24,
    // elevation: 80,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  }
});
