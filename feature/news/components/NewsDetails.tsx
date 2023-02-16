import dateFormat from 'dateformat';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Avatar, Card, Text } from 'react-native-paper';
import { NewsDetailsScreenProps, NewsDetailsRouteProps } from '../../../types';

export const NewsItemCard = ({ item: newsItem, navigation }: NewsDetailsScreenProps) => (
  <Card
    mode="outlined"
    style={NewsItemCardStyles.container}
    onPress={() => navigation.navigate('NewsDetails', { item: newsItem })}>
    <Card.Title
      left={(props) => <Avatar.Icon {...props} icon="image" />}
      title={newsItem.title}
      titleStyle={NewsItemCardStyles.titleStyles}
      titleNumberOfLines={Number(3)}
      subtitle={dateFormat(new Date(newsItem.publishedAt), 'dddd dS mmm yyyy @ h:MM TT')}
      subtitleStyle={NewsItemCardStyles.subtitleStyles}
    />
    <Card.Cover source={{ uri: newsItem.urlToImage }} />
    <Card.Content style={NewsItemCardStyles.content}>
      <Text>{newsItem.description}</Text>
    </Card.Content>
  </Card>
);

export const NewsDetails = ({ route }: NewsDetailsRouteProps) => <WebView source={{ uri: route.params.item.url }} />;

const DEFAULT_MARGIN = 5;
const NewsItemCardStyles = StyleSheet.create({
  container: {
    margin: DEFAULT_MARGIN,
  },
  titleStyles: {
    fontWeight: 'bold',
    marginTop: DEFAULT_MARGIN,
  },
  subtitleStyles: {
    marginTop: DEFAULT_MARGIN,
    marginBottom: DEFAULT_MARGIN,
  },
  content: {
    padding: DEFAULT_MARGIN * 2,
  },
});
