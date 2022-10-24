// App.js
import { StyleSheet, Text, View } from "react-native";
import SimpleMenu from "./components/SimpleMenu";

export default function App() {
 return (
   <View style={styles.container}>
     <SimpleMenu />
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
 },
});
