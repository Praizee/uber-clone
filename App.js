import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";
import FoodScreen from "./screens/FoodScreen";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

export default function App() {
  const Stack = createStackNavigator();
  // developers.google.com/maps/documentation/places/web-service/get-api-key/
  // 4:40:00 (Got stuck - Uber, cause couldn't add card to use Google Cloud API...error on google cloud platform)
  // https://developers.google.com/maps/documentation/places/web-service/get-api-key/
  // https://console.cloud.google.com/apis/library/directions-backend.googleapis.com?organizationId=0&project=uber-clone-app-414016

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home Screen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Map Screen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Food Screen"
              component={FoodScreen}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
