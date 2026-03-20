import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import { Styles } from "@/styles/style";
import { Link } from "expo-router";
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

      <View></View>
      <View className="gap-5 w-full">
        <View className="gap-2" style={Styles.inputSize}>
          <View>
            <Text
              style={Styles.inputTextSize}
              className="font-google-sans-regular font-[600] text-slate-600"
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
              className="font-google-sans-regular font-[600] text-slate-600"
              style={Styles.inputTextSize}
            >
              Password
            </Text>
          </View>
          <TextInput
            className="border border-slate-500 rounded-[10px]"
            secureTextEntry
            style={Styles.inputFontSize}
          />
        </View>
        <View className="items-center">
          <Link href={"/"}>
            <Text className="font-google-sans-regular text-slate-600">
              Forgot Password?
            </Text>
          </Link>
        </View>
      </View>
      <Link href={"/"} asChild>
        <PrimaryButton text={"Login"} />
      </Link>
    </SafeAreaView>
  );
}
