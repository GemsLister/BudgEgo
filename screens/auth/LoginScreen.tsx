import { Styles } from "@/styles/style";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center gap-5 items-center bg-timberwolf">
      <View className="flex-row">
        <Text
          className="font-google-sans-regular font-[800] text-palm-leaf"
          style={Styles.budgEgoFontLogo}
        >
          Budg
        </Text>
        <Text
          className="font-google-sans-regular font-[800] text-dark-moss"
          style={Styles.budgEgoFontLogo}
        >
          Ego
        </Text>
      </View>

      <View className="gap-5 w-full">
        <View className="gap-2" style={Styles.inputSize}>
          <View>
            <Text
              style={Styles.inputTextSize}
              className="font-google-sans-regular"
            >
              Email
            </Text>
          </View>
          <TextInput
            className="border border-slate-500 rounded-[10px]"
            style={Styles.inputFontSize}
          />
        </View>
        <View className="gap-2" style={Styles.inputSize}>
          <View className="mb-2">
            <Text
              className="font-google-sans-regular"
              style={Styles.inputTextSize}
            >
              Password
            </Text>
          </View>
          <TextInput
            className="border border-slate-500 rounded-[10px]"
            style={Styles.inputFontSize}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
