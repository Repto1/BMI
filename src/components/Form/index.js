import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState("Fill in the weight and height");
  const [buttonText, setButtonText] = useState("Calculate");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    let weightFormat = weight.replace(",", ".");
    let heightFormat = height.replace(",", ".");
    return setImc((weightFormat / (heightFormat * heightFormat)).toFixed(2));
  }

  function verificationImc() {
    if (weight == null || height == null) {
      Vibration.vibrate();
      setErrorMessage("Required field*");
    }
    if (weight != null && height != null) {
      setErrorMessage("");
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Your BMI is:");
      setButtonText("Recalculate");
      setErrorMessage(null);
      verificationImc();
      return;
    }
    setImc(null);
    setButtonText("Calculate");
    setMessageImc("Fill in the weight and height!");
    verificationImc();
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.FormContext}>
      <View style={styles.Form}>
        <Text style={styles.FormLabel}>Height</Text>
        <Text style={styles.ErrorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.FormInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.70"
          keyboardType="numeric"
        />
        <Text style={styles.FormLabel}>Weight</Text>
        <Text style={styles.ErrorMessage}>{errorMessage}</Text>

        <TextInput
          style={styles.FormInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 58.456"
          keyboardType="numeric"
        />

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.CalculatorButton}
          onPress={validationImc}
          onPressOut={Keyboard.dismiss}
        >
          <Text style={styles.TextCalculatorButton}>{buttonText}</Text>
        </TouchableOpacity>
      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </Pressable>
  );
}
