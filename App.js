import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import Router from "./src/navigation/Router";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <Router />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
