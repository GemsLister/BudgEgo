import { StyleSheet } from "react-native";
import { rMS, rS } from "./responsive";

export const Styles = StyleSheet.create({
  budgEgoFontLogo: {
    fontSize: rMS(60, 0.7),
  },

  inputSize: {
    paddingHorizontal: rS(20),
  },

  inputTextSize: {
    fontSize: rMS(15, 0.5),
  },

  inputFontSize: {
    padding: rS(9),
    fontSize: rMS(15, 0.8),
  },

  buttonViewStyle: {
    paddingHorizontal: rS(20),
  },

  touchableOpacityStyle: {
    padding: rS(10),
    fontSize: rMS(15, 0.8),
  },
});
