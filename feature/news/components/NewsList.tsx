import { Text, FlatList } from "react-native";
import { NewsApi } from "../data/NewsApi";
import { NewsItemCard } from "./NewsDetails";
import { NavigationScreenProps } from "../../../types";

export const NewsList = (props: NavigationScreenProps) => {
  const result = NewsApi.getTopHeadlines();
  if (result.isLoading) return <Text>Loading...</Text>;
  if (result.error) return <Text>Error: {result.error.message}</Text>;
  return (
    <FlatList
      style={{ padding: 10 }}
      data={result.data}
      renderItem={({ item }) => <NewsItemCard item={item} navigation={props.navigation} />}
    />
  );
};
