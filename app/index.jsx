import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Tja</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={{ color: "blue" }}>
                Go to Profile
            </Link>
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
// npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
