import React, { useState } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

const ModalScreen = ({ onClose, onAdd }) => {
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const [newTodoDetails, setNewTodoDetails] = useState("");

    const addNewTodo = () => {
        if (newTodoTitle && newTodoDetails) {
            onAdd(newTodoTitle, newTodoDetails);
            onClose();
        }
    };

    return (
        <View style={styles.container}>
            <Text>Nouvel Article</Text>
            <TextInput
                style={styles.input}
                placeholder="Titre"
                onChangeText={(text) => setNewTodoTitle(text)}
                value={newTodoTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Contenu"
                onChangeText={(text) => setNewTodoDetails(text)}
                value={newTodoDetails}
                multiline={true}
            />
            <Button
                style={{ backgroundColor: "red" }}
                title="ENREGISTRER"
                onPress={addNewTodo}
            />
            <Button title="ANNULER" onPress={onClose} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    input: {
        width: "80%",
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
    },
});

export default ModalScreen;
