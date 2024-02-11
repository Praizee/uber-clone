import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map Screen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "Food Screen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg"
        >
          <View>
            <Image
              source={{ uri: item.image }}
              className=""
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              name="arrowright"
              color="white"
              style={tw`p-2 bg-black rounded-full mt-4 w-10`}
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
