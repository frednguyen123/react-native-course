import { TextInput, View, StyleSheet, Alert } from "react-native";
import { Shadow } from "react-native-shadow-2";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber); //string -> int

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!", //title
        "Number has to be a number between 1 and 99.", //message
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
        //button
      );
      return;
    }

    // console.log("Valid number!");
    onPickNumber(chosenNumber);
  }

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
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
    backgroundColor: Colors.primary800,
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
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8, //margin top and bottom
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
