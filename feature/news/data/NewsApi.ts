import axios from "axios";
import { useQuery } from "react-query";
import { NewsItem } from "../../../types";
import * as SecureStore from "expo-secure-store";

const secureApiKeyName = "API_KEY";

export const NewsApi = {
  saveApiKeySecurely: async (key: string) => {
    await SecureStore.setItemAsync(secureApiKeyName, key);
  },
  getTopHeadlines: (countryCode = "au") => {
    return useQuery<NewsItem[], Error>("news", async () => {
      const key = await SecureStore.getItemAsync(secureApiKeyName);
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: countryCode,
          apiKey: key,
        },
      });
      return response.data.articles;
    });
  },
};
