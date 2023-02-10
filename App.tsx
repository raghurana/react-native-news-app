import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as RNPaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewsList, NewsDetails, NewsApiKeyDialog } from "./feature/news/components";
import { RootStackParamList } from "./types";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <RNPaperProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"NewsApiKeyDialog"} screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen name={"NewsApiKeyDialog"} component={NewsApiKeyDialog} options={{ title: "My News App" }} />
            <Stack.Screen name={"NewsList"} component={NewsList} options={{ title: "My News App" }} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </RNPaperProvider>
  );
}
