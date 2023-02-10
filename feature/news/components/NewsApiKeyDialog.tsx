import { useState } from "react";
import { NewsApi } from "../data/NewsApi";
import { NavigationScreenProps, Navigator } from "../../../types";
import { Button, Dialog, Portal, TextInput as RnpTextInput } from "react-native-paper";

export const NewsApiKeyDialog = (props: NavigationScreenProps) => {
  const [text, setText] = useState("");
  return (
    <Portal>
      <Dialog dismissable={false} visible={true}>
        <Dialog.Title>Enter API Key</Dialog.Title>
        <Dialog.Content>
          <RnpTextInput value={text} onChangeText={(text) => setText(text)} />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={async () => await handleDone(props.navigation, text)}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const handleDone = async (navigation: Navigator, keyText: string) => {
  await NewsApi.saveApiKeySecurely(keyText);
  navigation.replace("NewsList");
};
