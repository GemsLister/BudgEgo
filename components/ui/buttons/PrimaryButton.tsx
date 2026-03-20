import { Styles } from "@/styles/style";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PrimaryButtonProp = {
  text: string;
};

export default function PrimaryButton({ text }: PrimaryButtonProp) {
  return (
    <SafeAreaView className="w-full">
      <View style={Styles.buttonViewStyle} className="w-full">
        <TouchableOpacity
          style={Styles.touchableOpacityStyle}
          className="items-center rounded-lg bg-palm-leaf"
        >
          <Text className="text-timberwolf font-google-sans-regular font-[800]">
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
