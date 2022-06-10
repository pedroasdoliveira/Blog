import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Button
        title="Ir para detalhes"
        onPress={() => navigation.navigate("Details")}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
