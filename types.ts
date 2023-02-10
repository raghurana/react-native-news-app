import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NewsItem = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
  source: {
    name: string;
  };
};

export type RootStackParamList = {
  NewsList: undefined;
  NewsDetails: { item: NewsItem };
  NewsApiKeyDialog: undefined;
};

export type Navigator = NativeStackNavigationProp<RootStackParamList>;

export type NavigationScreenProps = {
  navigation: Navigator;
};

export type NewsDetailsScreenProps = NavigationScreenProps & {
  item: NewsItem;
};

export type NewsDetailsRouteProps = {
  route: RouteProp<RootStackParamList, "NewsDetails">;
};
