import { Styles } from "@/styles/style";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-timberwolf">
      <View className="flex-row">
        <Text
          className="font-google-sans-regular font-[800] text-palm-leaf"
          style={Styles.budgEgoFont}
        >
          Budg
        </Text>
        <Text
          className="font-google-sans-regular font-[800] text-dark-moss"
          style={Styles.budgEgoFont}
        >
          Ego
        </Text>
      </View>
    </SafeAreaView>
  );
}
