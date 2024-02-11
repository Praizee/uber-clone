import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full ">
      <View className="p-5">
        <Image
          source={{ uri: "https://links.papareact.com/gzs" }}
          className=""
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
