import { StyleSheet, Text, View } from "react-native";

import * as ExpoOpenPackage from "expo-open-package";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => ExpoOpenPackage.openApplication("com.instagram.android")}
      >
        Open Instagram
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
