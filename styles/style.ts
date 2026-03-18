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
    fontSize: rMS(16, 0.5),
  },

  inputFontSize: {
    padding: rS(10),
    fontSize: rMS(18, 0.8),
  },
});
