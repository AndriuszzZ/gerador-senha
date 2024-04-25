import { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import PasswordsItem from "./components/passwordsItem";

export function Passwords() {
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();
    const [listPasswords, setListPasswords] = useState([]);

  const listPassword = useMemo(() => {
    const passwords = getItem("@pass");
    return passwords.map((password) => {
      return {
        password: password,
      };
    });
  }, [focused]);

  async function handleDeletePassword(item) {
    const passwords = await removeItem("@pass", item);
    setListPasswords(passwords);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>
      {listPassword?.map((i, index) => (
        <Text key={index}>{i.password}</Text>
      ))}
      <View style={styles.content}>
        {/* <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={passwordList}
        //   keyExtractor={(password) => String(password)}
          renderItem={({ password }) => (
            <PasswordsItem
              data={password}
              removePassword={() => handleDeletePassword(password)}
            />
          )}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#392DE9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
