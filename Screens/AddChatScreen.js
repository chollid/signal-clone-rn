import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon
            style={styles.iconChatStyle}
            name="wechat"
            type="antdesign"
            size={24}
            color="black"
          />
        }
      />
      <TouchableOpacity style={styles.buttonTouchStyle}>
        <Button
          onPress={createChat}
          style={styles.buttonChat}
          title="Create new Chat"
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddChat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
  buttonChat: {
    color: "white",
    backgroundColor: "#2C6BED",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonTouchStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.41,
    shadowRadius: 13.16,
  },
  iconChatStyle: {
    marginRight: 7,
  },
});
