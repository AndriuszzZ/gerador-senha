import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

export function PasswordsItem({data, removePassword}) {
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#0E0E0E",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        color: "#fff",

    },
})